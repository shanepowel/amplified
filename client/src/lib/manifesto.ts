export interface ManifestoClaim {
  number: string;
  headline: string;
  body: string[];
}

export const manifestoClaims: ManifestoClaim[] = [
  {
    number: "01",
    headline: "Most digital transformations fail in procurement, not technology.",
    body: [
      "The procurement model decides whether a programme can move at the pace it needs to. Cost-driven RFPs that force fixed-scope, fixed-price delivery are the single biggest contributor to programmes that ship late, over budget, and short of their mandate. We work alongside procurement, not around it.",
      "We spend more time on contract architecture, supplier model design, and procurement strategy than most consultancies, because that is where the failure mode actually lives. The earliest and cheapest moment to fix a digital transformation is at the point the contracts are being shaped. By the time delivery is underway, the constraints are already locked in. If we can only do one thing for a client at the start of a programme, we would rather it be the procurement architecture than the delivery methodology.",
    ],
  },
  {
    number: "02",
    headline: "Governance that slows delivery is governance that gets bypassed.",
    body: [
      "The fastest way to lose assurance is to make it expensive. We design governance into delivery cadences so decisions get made at the right altitude, by the right people, in real time, not at quarterly stage gates nobody reads. The right governance accelerates programmes. The wrong governance just buys you a paper trail when things fail.",
    ],
  },
  {
    number: "03",
    headline: "Teams ship. Frameworks do not.",
    body: [
      "The best framework in the world will not save a team without a clear mission, owned accountability, and the operating cadence to make decisions without asking permission. We start with the team. The framework comes after. Stable Teams, the Squad Blueprint, and our delivery model exist because we found that the people doing the work matter more than the process they are asked to run.",
    ],
  },
  {
    number: "04",
    headline: "AI without governance is not innovation. It is liability.",
    body: [
      "In regulated industries, an unmanaged AI model is exposure. We have seen pilots scaled into production without a model inventory, a usage policy, or a single named owner. The cost of unwinding that, after the regulator notices or after the model fails publicly, is always higher than the cost of governing it from day one. We are not anti-AI. We are anti-AI without accountability.",
      "The organisations that get this right are the ones treating AI governance as part of how they ship, not as a separate workstream that compliance owns. The acceptable-use policy is the easy bit. The hard bit is the operational picture: what is running where, on what data, with what controls. That picture only emerges when delivery, architecture, and risk work together rather than in sequence. We design AI governance engagements to produce that operational picture first, with the policy following from it rather than preceding it.",
    ],
  },
  {
    number: "05",
    headline: "Capability that walks out the door with the consultants was never capability.",
    body: [
      "If your team cannot run the operating model, the governance framework, or the delivery dashboard six months after we leave, we have not built capability. We have built dependency. We deliberately design for handover from day one of every engagement: artefacts you own, decisions your people made, and skills that stay with the function we worked alongside.",
      "Where genuine delivery capacity is what is needed rather than strategic advice, we run that through AmplifiedTeams as a deliberately separate offering, with a different commercial model and a different team. Amplified is small-team, senior-led strategic work. AmplifiedTeams is delivery capacity. Keeping them clearly distinct is how we make sure clients get what they are actually buying.",
    ],
  },
];
