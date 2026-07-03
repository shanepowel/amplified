import PDFDocument from 'pdfkit';
import type { Engagement } from '../../client/src/lib/engagements';

const NAVY = '#181F4F';
const CORAL = '#F85C70';
const PURPLE = '#60266A';
const MUTED = '#65677B';
const LIGHT = '#F2F0F7';
const RULE = '#E5E3EE';

export async function generateEngagementPlaybookPdf(
  engagement: Engagement,
  recipient: { name: string; company?: string },
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margin: 56,
        info: {
          Title: `${engagement.name} Playbook`,
          Author: 'Amplified',
          Subject: `${engagement.name} engagement playbook for ${recipient.name}`,
        },
      });

      const chunks: Buffer[] = [];
      doc.on('data', (c) => chunks.push(c as Buffer));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      const pageWidth = doc.page.width;
      const pageHeight = doc.page.height;
      const left = doc.page.margins.left;
      const right = pageWidth - doc.page.margins.right;
      const contentWidth = right - left;

      const drawHeaderBand = () => {
        doc.save();
        doc.rect(0, 0, pageWidth, 110).fill(NAVY);
        doc.fillColor(CORAL).fontSize(9).font('Helvetica-Bold')
          .text('AMPLIFIED', left, 38, { characterSpacing: 2 });
        doc.fillColor('#FFFFFF').fontSize(9).font('Helvetica')
          .text(`Engagement playbook · ${engagement.name}`, left, 56);
        doc.restore();
        doc.y = 140;
      };

      const drawFooter = (pageNo: number) => {
        const y = pageHeight - 38;
        doc.save();
        doc.strokeColor(RULE).lineWidth(0.5)
          .moveTo(left, y - 10).lineTo(right, y - 10).stroke();
        doc.fillColor(MUTED).fontSize(8).font('Helvetica')
          .text('Amplified · amplified.co.uk · hello@amplified.co.uk', left, y, { width: contentWidth, align: 'left', lineBreak: false });
        doc.text(`Page ${pageNo}`, left, y, { width: contentWidth, align: 'right', lineBreak: false });
        doc.restore();
      };

      let pageNo = 1;
      const ensure = (needed: number) => {
        if (doc.y + needed > pageHeight - 60) {
          drawFooter(pageNo);
          doc.addPage();
          pageNo += 1;
          drawHeaderBand();
        }
      };

      const sectionLabel = (kicker: string, title: string) => {
        ensure(80);
        doc.moveDown(0.5);
        doc.fillColor(CORAL).font('Helvetica-Bold').fontSize(8.5)
          .text(kicker.toUpperCase(), { characterSpacing: 1.5 });
        doc.moveDown(0.3);
        doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(18).text(title);
        doc.moveDown(0.5);
        doc.strokeColor(RULE).lineWidth(0.5)
          .moveTo(left, doc.y).lineTo(left + 64, doc.y).stroke();
        doc.strokeColor(CORAL).lineWidth(1.5)
          .moveTo(left, doc.y).lineTo(left + 28, doc.y).stroke();
        doc.moveDown(0.8);
      };

      const paragraph = (text: string) => {
        ensure(40);
        doc.fillColor('#2A2D45').font('Helvetica').fontSize(11)
          .text(text, { width: contentWidth, align: 'left', lineGap: 3 });
        doc.moveDown(0.6);
      };

      const bulleted = (items: string[]) => {
        items.forEach((item) => {
          ensure(36);
          const startY = doc.y;
          doc.save();
          doc.circle(left + 4, startY + 6, 2.5).fill(CORAL);
          doc.restore();
          doc.fillColor('#2A2D45').font('Helvetica').fontSize(11)
            .text(item, left + 16, startY, { width: contentWidth - 16, lineGap: 3 });
          doc.moveDown(0.4);
        });
      };

      const numberedList = (items: string[]) => {
        items.forEach((item, i) => {
          ensure(40);
          const startY = doc.y;
          doc.save();
          doc.roundedRect(left, startY, 22, 18, 3).fill(NAVY);
          doc.fillColor(CORAL).font('Helvetica-Bold').fontSize(9)
            .text(String(i + 1).padStart(2, '0'), left, startY + 5, { width: 22, align: 'center', lineBreak: false });
          doc.restore();
          doc.fillColor('#2A2D45').font('Helvetica').fontSize(11)
            .text(item, left + 32, startY + 1, { width: contentWidth - 32, lineGap: 3 });
          doc.moveDown(0.5);
        });
      };

      const factBox = (label: string, value: string) => {
        ensure(60);
        const startY = doc.y;
        const boxH = Math.max(56, doc.heightOfString(value, { width: contentWidth - 24, lineGap: 2 }) + 32);
        doc.save();
        doc.rect(left, startY, contentWidth, boxH).fill(LIGHT);
        doc.rect(left, startY, 3, boxH).fill(CORAL);
        doc.restore();
        doc.fillColor(MUTED).font('Helvetica-Bold').fontSize(8)
          .text(label.toUpperCase(), left + 14, startY + 12, { characterSpacing: 1.2, width: contentWidth - 24 });
        doc.fillColor(NAVY).font('Helvetica').fontSize(12)
          .text(value, left + 14, startY + 26, { width: contentWidth - 24, lineGap: 2 });
        doc.y = startY + boxH + 12;
      };

      // ----- Cover -----
      drawHeaderBand();

      doc.fillColor(CORAL).font('Helvetica-Bold').fontSize(9)
        .text(`ENGAGEMENT PLAYBOOK ${engagement.forBuyer.toUpperCase()}`, { characterSpacing: 1.5 });
      doc.moveDown(0.6);
      doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(34)
        .text(engagement.name, { lineGap: 2 });
      doc.moveDown(0.4);
      doc.fillColor(CORAL).font('Helvetica-Oblique').fontSize(14)
        .text(`${engagement.tagline}.`, { width: contentWidth, lineGap: 3 });
      doc.moveDown(1.2);
      doc.fillColor('#2A2D45').font('Helvetica').fontSize(11)
        .text(engagement.buyerSentence, { width: contentWidth, lineGap: 3 });
      doc.moveDown(1.4);

      // Prepared for box
      const prepStartY = doc.y;
      const prepLines = [`Prepared for ${recipient.name}${recipient.company ? ` · ${recipient.company}` : ''}`,
        `Issued ${new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}`];
      doc.save();
      doc.rect(left, prepStartY, contentWidth, 60).fill(NAVY);
      doc.restore();
      doc.fillColor(CORAL).font('Helvetica-Bold').fontSize(8)
        .text('PREPARED FOR', left + 16, prepStartY + 12, { characterSpacing: 1.5 });
      doc.fillColor('#FFFFFF').font('Helvetica').fontSize(11)
        .text(prepLines.join('  ·  '), left + 16, prepStartY + 28, { width: contentWidth - 32, lineGap: 2 });
      doc.y = prepStartY + 76;

      // Key facts
      factBox('Duration', engagement.duration);
      factBox('Investment', engagement.price);
      factBox('Built for', engagement.forBuyer.replace('for ', ''));

      // ----- Problem -----
      doc.addPage(); pageNo += 1; drawHeaderBand();
      sectionLabel('01 · The problem we solve', 'Why this engagement exists.');
      engagement.problem.forEach(paragraph);

      // ----- Qualifiers -----
      sectionLabel('Is this you?', 'Three quick checks before you read on.');
      bulleted(engagement.qualifiers);

      // ----- Included -----
      doc.addPage(); pageNo += 1; drawHeaderBand();
      sectionLabel('02 · What is included', 'Deliverables, by name.');
      paragraph('Every engagement is scoped to a fixed list of artefacts and decisions. Nothing implied, nothing left until the closeout meeting.');
      numberedList(engagement.included);

      // ----- Timeline -----
      doc.addPage(); pageNo += 1; drawHeaderBand();
      sectionLabel('How the weeks unfold', `${engagement.duration}, paced like this.`);
      engagement.timeline.forEach((step, i) => {
        ensure(70);
        const startY = doc.y;
        doc.save();
        doc.rect(left, startY, 4, 44).fill(CORAL);
        doc.restore();
        doc.fillColor(MUTED).font('Helvetica-Bold').fontSize(8)
          .text(`${String(i + 1).padStart(2, '0')} · ${step.label.toUpperCase()}`, left + 14, startY, { characterSpacing: 1.2 });
        doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(12)
          .text(step.focus, left + 14, startY + 12);
        doc.fillColor('#2A2D45').font('Helvetica').fontSize(10.5)
          .text(step.detail, left + 14, doc.y + 2, { width: contentWidth - 14, lineGap: 2 });
        doc.moveDown(0.7);
      });

      // ----- Outcome -----
      doc.addPage(); pageNo += 1; drawHeaderBand();
      sectionLabel('03 · What you have at the end', 'The handover, in one paragraph.');
      const outStartY = doc.y;
      const outH = doc.heightOfString(engagement.outcome, { width: contentWidth - 28, lineGap: 3 }) + 32;
      doc.save();
      doc.rect(left, outStartY, contentWidth, outH).fill(LIGHT);
      doc.rect(left, outStartY, 4, outH).fill(CORAL);
      doc.restore();
      doc.fillColor(NAVY).font('Helvetica').fontSize(12)
        .text(engagement.outcome, left + 16, outStartY + 16, { width: contentWidth - 28, lineGap: 3 });
      doc.y = outStartY + outH + 16;

      // ----- Case study -----
      sectionLabel('04 · Case study', 'Where this has been delivered.');
      doc.fillColor(MUTED).font('Helvetica-Bold').fontSize(8)
        .text(engagement.caseStudySector.toUpperCase(), { characterSpacing: 1.2 });
      doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(14)
        .text(engagement.caseStudyName);
      doc.moveDown(0.4);
      paragraph(engagement.caseStudyOutcome);

      // ----- Not for you if -----
      sectionLabel('05 · Not for you if', 'We work better when we are honest about fit.');
      bulleted(engagement.notForYouIf);

      // ----- CTA -----
      ensure(140);
      const ctaY = doc.y;
      const ctaH = 120;
      doc.save();
      doc.rect(left, ctaY, contentWidth, ctaH).fill(PURPLE);
      doc.restore();
      doc.fillColor(CORAL).font('Helvetica-Bold').fontSize(8)
        .text('START A CONVERSATION', left + 20, ctaY + 18, { characterSpacing: 1.5 });
      doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(18)
        .text(`Ready to scope a ${engagement.name} engagement?`, left + 20, ctaY + 34, { width: contentWidth - 40 });
      doc.fillColor('rgba(255,255,255,0.85)').font('Helvetica').fontSize(10.5);
      doc.fillColor('#FFFFFF').font('Helvetica').fontSize(10.5)
        .text('We start every engagement with a 30-minute discovery call. Bring the situation, we will tell you whether this is the right fit before we send a proposal. Reply to the email this PDF arrived in, or visit amplified.co.uk/engagements.',
          left + 20, ctaY + 70, { width: contentWidth - 40, lineGap: 2 });
      doc.y = ctaY + ctaH + 12;

      doc.fillColor(MUTED).font('Helvetica-Oblique').fontSize(9)
        .text(engagement.oneLineOutcome, { width: contentWidth, align: 'center' });

      drawFooter(pageNo);
      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
