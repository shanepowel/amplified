'use client';

import { useState } from 'react';
import { Download, FileText, Loader2, Check, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { Engagement } from '@/lib/engagements';
import { AmpButton, Eyebrow, Text } from '@/components/system';

interface Props {
  engagement: Engagement;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EngagementPlaybookDownload({ engagement }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [emailDelivered, setEmailDelivered] = useState<boolean>(false);
  const [form, setForm] = useState({ name: '', email: '', company: '' });

  const reset = () => {
    setStatus('idle');
    setErrorMsg('');
    setEmailDelivered(false);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setTimeout(() => {
        reset();
        setForm({ name: '', email: '', company: '' });
      }, 200);
    }
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setErrorMsg('Name and email are required.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/engagement-playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: engagement.slug,
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || undefined,
        }),
      });

      if (!res.ok) {
        let message = 'We could not generate your playbook. Please try again.';
        try {
          const data = await res.json();
          if (data?.issues?.[0]?.message) message = data.issues[0].message;
          else if (data?.error) message = data.error;
        } catch { /* ignore */ }
        setErrorMsg(message);
        setStatus('error');
        return;
      }

      setEmailDelivered(res.headers.get('X-Email-Sent') === 'true');

      const blob = await res.blob();
      const cd = res.headers.get('Content-Disposition') || '';
      const match = cd.match(/filename="?([^";]+)"?/i);
      const filename = match?.[1] || `amplified-${engagement.slug}-playbook.pdf`;

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);

      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  const inputClass =
    'h-11 w-full rounded border border-[#E5E3EE] px-3 font-sans text-base text-[#181F4F] focus:outline-none focus:ring-2 disabled:opacity-60';
  const labelClass =
    'mb-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-[#65677B]';

  return (
    <>
      <AmpButton
        type="button"
        variant="navy"
        size="lg"
        className="!px-7"
        onClick={() => setOpen(true)}
        data-testid={`button-download-playbook-${engagement.slug}`}
      >
        <Download className="h-4 w-4" />
        Download the playbook
      </AmpButton>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-w-md gap-0 overflow-hidden border-0 p-0"
          data-testid={`dialog-playbook-${engagement.slug}`}
        >
          <div className="bg-[#181F4F] p-6 text-white">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#F85C70]/15">
                <FileText className="h-5 w-5 text-[#F85C70]" />
              </div>
              <Eyebrow>Engagement playbook</Eyebrow>
            </div>
            <DialogTitle className="font-display text-2xl font-normal leading-tight">
              Get the {engagement.name} playbook.
            </DialogTitle>
            <DialogDescription className="mt-2 font-sans text-sm text-white/75">
              A branded PDF covering the problem, what is included, the week-by-week timeline,
              outcomes, and qualifiers. We will email a copy to you and trigger a download now.
            </DialogDescription>
          </div>

          {status === 'success' ? (
            <div className="bg-white p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#181F4F]">
                  <Check className="h-5 w-5 text-[#F85C70]" />
                </span>
                <div>
                  <Text variant="h4" tone="ink" className="!text-lg">
                    Your playbook is downloading.
                  </Text>
                  <Text variant="small" tone="muted" className="mt-1">
                    {emailDelivered
                      ? `A copy is also on its way to ${form.email}.`
                      : 'The download has started. (Email delivery is not active in this environment.)'}
                  </Text>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="mt-6 h-11 w-full rounded bg-[#F2F0F7] font-sans font-semibold text-[#181F4F] transition-colors hover:bg-[#E5E3EE]"
                data-testid={`button-playbook-close-${engagement.slug}`}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6" data-testid={`form-playbook-${engagement.slug}`}>
              <div>
                <label htmlFor="pb-name" className={labelClass}>
                  Your name *
                </label>
                <input
                  id="pb-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={status === 'submitting'}
                  className={inputClass}
                  data-testid="input-playbook-name"
                />
              </div>
              <div>
                <label htmlFor="pb-email" className={labelClass}>
                  Work email *
                </label>
                <input
                  id="pb-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={status === 'submitting'}
                  className={inputClass}
                  data-testid="input-playbook-email"
                />
              </div>
              <div>
                <label htmlFor="pb-company" className={labelClass}>
                  Company (optional)
                </label>
                <input
                  id="pb-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  disabled={status === 'submitting'}
                  className={inputClass}
                  data-testid="input-playbook-company"
                />
              </div>

              {status === 'error' && errorMsg && (
                <div className="flex items-start gap-2 rounded bg-[#FDECEE] p-3 text-[#7a1f2c]">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <p className="font-sans text-sm">{errorMsg}</p>
                </div>
              )}

              <AmpButton
                type="submit"
                disabled={status === 'submitting'}
                fullWidth
                size="lg"
                data-testid={`button-playbook-submit-${engagement.slug}`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Generating playbook…
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" /> Email and download the PDF
                  </>
                )}
              </AmpButton>
              <Text variant="caption" tone="muted" className="text-center">
                We will only use your email to send the playbook and follow up about the engagement.
              </Text>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
