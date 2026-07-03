'use client';

import { useState } from 'react';
import { Download, FileText, Loader2, Check, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { Engagement } from '@/lib/engagements';

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="amp-focus-ring-on-light inline-flex items-center gap-2 px-7 h-12 font-sans font-bold text-base rounded transition-colors duration-200"
        style={{ backgroundColor: '#181F4F', color: '#FFFFFF' }}
        onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0f1538'; }}
        onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#181F4F'; }}
        data-testid={`button-download-playbook-${engagement.slug}`}
      >
        <Download className="h-4 w-4" />
        Download the playbook
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-w-md p-0 overflow-hidden border-0 gap-0"
          data-testid={`dialog-playbook-${engagement.slug}`}
        >
          <div className="p-6" style={{ backgroundColor: '#181F4F', color: '#FFFFFF' }}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded flex items-center justify-center"
                style={{ backgroundColor: 'rgba(248,92,112,0.15)' }}
              >
                <FileText className="h-5 w-5" style={{ color: '#F85C70' }} />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: '#F85C70' }}>
                Engagement playbook
              </p>
            </div>
            <DialogTitle className="font-display text-2xl leading-tight" style={{ fontWeight: 400 }}>
              Get the {engagement.name} playbook.
            </DialogTitle>
            <DialogDescription className="font-sans text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
              A branded PDF covering the problem, what is included, the week-by-week timeline,
              outcomes, and qualifiers. We will email a copy to you and trigger a download now.
            </DialogDescription>
          </div>

          {status === 'success' ? (
            <div className="p-6 bg-white">
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#181F4F' }}
                >
                  <Check className="h-5 w-5" style={{ color: '#F85C70' }} />
                </span>
                <div>
                  <p className="font-display text-lg" style={{ color: '#181F4F', fontWeight: 400 }}>
                    Your playbook is downloading.
                  </p>
                  <p className="font-sans text-sm mt-1" style={{ color: '#65677B' }}>
                    {emailDelivered
                      ? `A copy is also on its way to ${form.email}.`
                      : 'The download has started. (Email delivery is not active in this environment.)'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="mt-6 w-full h-11 font-sans font-semibold rounded transition-colors"
                style={{ backgroundColor: '#F2F0F7', color: '#181F4F' }}
                data-testid={`button-playbook-close-${engagement.slug}`}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 bg-white space-y-4" data-testid={`form-playbook-${engagement.slug}`}>
              <div>
                <label htmlFor="pb-name" className="font-mono text-xs uppercase tracking-[0.1em] block mb-1.5" style={{ color: '#65677B' }}>
                  Your name *
                </label>
                <input
                  id="pb-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={status === 'submitting'}
                  className="w-full h-11 px-3 font-sans text-base rounded border focus:outline-none focus:ring-2 disabled:opacity-60"
                  style={{ borderColor: '#E5E3EE', color: '#181F4F' }}
                  data-testid="input-playbook-name"
                />
              </div>
              <div>
                <label htmlFor="pb-email" className="font-mono text-xs uppercase tracking-[0.1em] block mb-1.5" style={{ color: '#65677B' }}>
                  Work email *
                </label>
                <input
                  id="pb-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={status === 'submitting'}
                  className="w-full h-11 px-3 font-sans text-base rounded border focus:outline-none focus:ring-2 disabled:opacity-60"
                  style={{ borderColor: '#E5E3EE', color: '#181F4F' }}
                  data-testid="input-playbook-email"
                />
              </div>
              <div>
                <label htmlFor="pb-company" className="font-mono text-xs uppercase tracking-[0.1em] block mb-1.5" style={{ color: '#65677B' }}>
                  Company (optional)
                </label>
                <input
                  id="pb-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  disabled={status === 'submitting'}
                  className="w-full h-11 px-3 font-sans text-base rounded border focus:outline-none focus:ring-2 disabled:opacity-60"
                  style={{ borderColor: '#E5E3EE', color: '#181F4F' }}
                  data-testid="input-playbook-company"
                />
              </div>

              {status === 'error' && errorMsg && (
                <div className="flex items-start gap-2 p-3 rounded" style={{ backgroundColor: '#FDECEE', color: '#7a1f2c' }}>
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-sm">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 h-12 font-sans font-bold text-base rounded transition-colors duration-200 disabled:opacity-70"
                style={{ backgroundColor: '#F85C70', color: '#181F4F' }}
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
              </button>
              <p className="font-sans text-xs text-center" style={{ color: '#65677B' }}>
                We will only use your email to send the playbook and follow up about the engagement.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
