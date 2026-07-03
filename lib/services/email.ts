import { Resend } from 'resend';
import type { ConsultationRequest } from '@shared/schema';

class EmailService {
  private resend: Resend | null = null;
  private fromEmail: string;
  private toEmail: string;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    this.fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    this.toEmail = process.env.CONTACT_EMAIL || 'hello@amplified.co.uk';
    
    if (apiKey) {
      this.resend = new Resend(apiKey);
      console.log('✅ Resend email service initialized');
      console.log('📧 From:', this.fromEmail);
      console.log('📧 To:', this.toEmail);
      
      if (this.fromEmail === 'onboarding@resend.dev') {
        console.log('⚠️  Using Resend test sender (onboarding@resend.dev)');
        console.log('ℹ️  This only works for sending to your Resend account email');
        console.log('ℹ️  To send to any email: verify domain at resend.com/domains and set RESEND_FROM_EMAIL');
      }
    } else {
      console.log('⚠️  RESEND_API_KEY not configured. Email notifications disabled.');
    }
  }

  async sendContactFormEmail(consultation: ConsultationRequest): Promise<boolean> {
    if (!this.resend) {
      console.log('Email service not configured - skipping email notification');
      return false;
    }

    try {
      const emailHtml = this.formatContactFormEmail(consultation);
      
      const { data, error } = await this.resend.emails.send({
        from: this.fromEmail,
        to: this.toEmail,
        subject: `New Contact Form Submission from ${consultation.name}`,
        html: emailHtml,
      });

      if (error) {
        console.error('❌ Failed to send email via Resend:', error);
        return false;
      }

      console.log(`✅ Email sent successfully to ${this.toEmail} (ID: ${data?.id})`);
      return true;
    } catch (error) {
      console.error('❌ Error sending contact form email:', error);
      return false;
    }
  }

  private formatContactFormEmail(consultation: ConsultationRequest): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #f97316 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e3a8a; margin-top: 0; font-size: 20px;">Contact Information</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Name:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    ${consultation.name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Email:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${consultation.email}" style="color: #f97316; text-decoration: none;">${consultation.email}</a>
                  </td>
                </tr>
                ${consultation.phone ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Phone:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <a href="tel:${consultation.phone}" style="color: #f97316; text-decoration: none;">${consultation.phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${consultation.company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Company:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    ${consultation.company}
                  </td>
                </tr>
                ` : ''}
                ${consultation.serviceInterest ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Service Interest:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    ${this.formatServiceInterest(consultation.serviceInterest)}
                  </td>
                </tr>
                ` : ''}
                ${consultation.persona ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Persona:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    ${this.formatPersona(consultation.persona)}
                  </td>
                </tr>
                ` : ''}
                ${consultation.urgencyLevel ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Urgency Level:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="background: ${this.getUrgencyColor(consultation.urgencyLevel)}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                      ${this.formatUrgencyLevel(consultation.urgencyLevel)}
                    </span>
                  </td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            ${consultation.description ? `
            <div style="background: white; padding: 25px; border-radius: 8px;">
              <h2 style="color: #1e3a8a; margin-top: 0; font-size: 20px;">Message</h2>
              <p style="margin: 0; white-space: pre-wrap; color: #374151; line-height: 1.8;">
                ${consultation.description}
              </p>
            </div>
            ` : ''}
            
            <div style="margin-top: 20px; padding: 15px; background: #e0f2fe; border-left: 4px solid #1e3a8a; border-radius: 4px;">
              <p style="margin: 0; color: #1e3a8a; font-size: 14px;">
                <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-GB', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}
              </p>
            </div>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This email was sent from the Amplified contact form</p>
            <p style="margin-top: 10px;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://amplified.co.uk'}" style="color: #f97316; text-decoration: none;">
                Visit Amplified
              </a>
            </p>
          </div>
        </body>
      </html>
    `;
  }

  private formatServiceInterest(interest: string): string {
    const labels: Record<string, string> = {
      'amplified-learn': 'The Amp Store - Quick skill modules',
      'amplified-coach': 'AmplifiedCoach - Strategic guidance',
      'amplified-teams': 'AmplifiedTeams - Team scaling',
      'amplified-transformation': 'AmplifiedTransformation - Complete transformation',
      'full-suite': 'Full Suite - All services',
      'discovery': 'Just exploring options'
    };
    return labels[interest] || interest;
  }

  private formatPersona(persona: string): string {
    const labels: Record<string, string> = {
      'individual': 'Individual Professional',
      'startup': 'Startup Founder',
      'scaleup': 'Scale-up Leader',
      'enterprise': 'Enterprise Executive'
    };
    return labels[persona] || persona;
  }

  private formatUrgencyLevel(level: string): string {
    const labels: Record<string, string> = {
      'immediate': 'Immediate (Within 24 hours)',
      'urgent': 'Urgent (This week)',
      'standard': 'Standard (This month)',
      'compliance': 'Compliance/Regulatory Issue'
    };
    return labels[level] || level;
  }

  private getUrgencyColor(level: string): string {
    const colors: Record<string, string> = {
      'immediate': '#dc2626',
      'urgent': '#f97316',
      'standard': '#1e3a8a',
      'compliance': '#7c3aed'
    };
    return colors[level] || '#1e3a8a';
  }

  async sendEngagementPlaybookEmail(params: {
    toEmail: string;
    name: string;
    company?: string;
    engagementName: string;
    engagementTagline: string;
    pdfBuffer: Buffer;
    pdfFilename: string;
  }): Promise<boolean> {
    if (!this.resend) {
      console.log('Email service not configured - cannot send playbook email');
      return false;
    }

    const { toEmail, name, company, engagementName, engagementTagline, pdfBuffer, pdfFilename } = params;

    const html = `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#181F4F;background:#F2F0F7;padding:32px;">
      <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border-top:6px solid #F85C70;">
        <div style="padding:32px;">
          <p style="font-size:11px;letter-spacing:1.5px;color:#F85C70;margin:0 0 8px;font-weight:700;">AMPLIFIED · ENGAGEMENT PLAYBOOK</p>
          <h1 style="font-size:26px;line-height:1.15;margin:0 0 12px;color:#181F4F;">${engagementName}</h1>
          <p style="font-size:15px;line-height:1.5;color:#65677B;margin:0 0 20px;font-style:italic;">${engagementTagline}.</p>
          <p style="font-size:15px;line-height:1.6;color:#181F4F;margin:0 0 16px;">Hi ${name.split(' ')[0]},</p>
          <p style="font-size:15px;line-height:1.6;color:#181F4F;margin:0 0 16px;">Here is the playbook for the <strong>${engagementName}</strong> engagement, attached as a PDF. It covers the problem we solve, what is included, how the weeks unfold, what you have at the end, and the qualifiers we use to confirm fit.</p>
          <p style="font-size:15px;line-height:1.6;color:#181F4F;margin:0 0 24px;">If after a read it feels like a fit, reply to this email and we will book a 30-minute discovery call. No pitch, no deck.</p>
          <p style="font-size:14px;line-height:1.6;color:#65677B;margin:0;">— The Amplified team</p>
        </div>
        <div style="padding:18px 32px;background:#181F4F;color:#FFFFFF;font-size:12px;">amplified.co.uk · hello@amplified.co.uk</div>
      </div>
    </body></html>`;

    try {
      const { data, error } = await this.resend.emails.send({
        from: this.fromEmail,
        to: toEmail,
        replyTo: this.toEmail,
        subject: `Your ${engagementName} playbook from Amplified`,
        html,
        attachments: [
          {
            filename: pdfFilename,
            content: pdfBuffer,
          },
        ],
      });

      if (error) {
        console.error('❌ Failed to send playbook email:', error);
        return false;
      }
      console.log(`✅ Playbook sent to ${toEmail} (ID: ${data?.id})`);

      // Internal notification copy (non-blocking)
      this.resend.emails.send({
        from: this.fromEmail,
        to: this.toEmail,
        subject: `Playbook downloaded: ${engagementName} — ${name}${company ? ` (${company})` : ''}`,
        html: `<p>${name} (${toEmail})${company ? ` from ${company}` : ''} downloaded the <strong>${engagementName}</strong> playbook.</p>`,
      }).catch((e) => console.error('Internal playbook notification failed:', e));

      return true;
    } catch (err) {
      console.error('❌ Error sending playbook email:', err);
      return false;
    }
  }
}

export const emailService = new EmailService();
