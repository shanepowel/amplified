import { cva, type VariantProps } from "class-variance-authority";

/** Shared brand tokens used by layout and surface components. */
export const ampTokens = {
  navy: "#1A1A1A",
  purple: "#8B3A2A",
  coral: "#C75B39",
  coralHover: "#A8482C",
  mist: "#EFEBE3",
  mistSoft: "#F7F4EE",
  border: "#E0DBD2",
  borderStrong: "#C9C2B6",
  ink: "#1A1A1A",
  inkMuted: "#5C584F",
  inkSubtle: "#7A7468",
  paper: "#F5F2EA",
  white: "#FFFFFF",
  white70: "rgba(255,255,255,0.70)",
  white75: "rgba(255,255,255,0.75)",
  white80: "rgba(255,255,255,0.80)",
  white45: "rgba(255,255,255,0.45)",
  white15: "rgba(255,255,255,0.15)",
  white10: "rgba(255,255,255,0.10)",
  white04: "rgba(255,255,255,0.04)",
} as const;

export const containerVariants = cva("mx-auto w-full min-w-0 px-5 sm:px-8 lg:px-10", {
  variants: {
    size: {
      default: "max-w-[1120px]",
      narrow: "max-w-[760px]",
      wide: "max-w-[1320px]",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const sectionVariants = cva("w-full min-w-0 overflow-x-clip", {
  variants: {
    tone: {
      white: "bg-[#F5F2EA] text-[#1A1A1A]",
      mist: "bg-[#EFEBE3] text-[#1A1A1A]",
      navy: "bg-[#1A1A1A] text-white",
      purple: "bg-[#8B3A2A] text-white",
      transparent: "bg-transparent",
    },
    padding: {
      none: "py-0",
      sm: "py-10 lg:py-12",
      md: "py-16 lg:py-20",
      lg: "py-20 lg:py-28",
      xl: "py-24 lg:py-32",
      hero: "py-24 lg:py-32",
    },
  },
  defaultVariants: {
    tone: "white",
    padding: "lg",
  },
});

export const stackVariants = cva("flex min-w-0", {
  variants: {
    direction: {
      column: "flex-col",
      row: "flex-row",
      "row-responsive": "flex-col sm:flex-row",
    },
    gap: {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    direction: "column",
    gap: "md",
    align: "stretch",
    justify: "start",
  },
});

export const gridVariants = cva("grid min-w-0 w-full", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      "2-lg": "grid-cols-1 lg:grid-cols-2",
      "3-lg": "grid-cols-1 lg:grid-cols-3",
      "5-hero": "grid-cols-1 lg:grid-cols-5",
      "12": "grid-cols-1 lg:grid-cols-12",
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-10 lg:gap-16",
    },
    equal: {
      true: "auto-rows-[minmax(0,1fr)] [&>*]:h-full [&>*]:min-h-0",
      false: "",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "none",
    equal: true,
  },
});

export const textVariants = cva("min-w-0 max-w-full break-words [overflow-wrap:anywhere]", {
  variants: {
    variant: {
      display:
        "font-display font-normal leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      h1: "font-display font-normal leading-[1.08] tracking-tight text-4xl md:text-5xl lg:text-6xl",
      h2: "font-display font-normal leading-tight text-3xl md:text-4xl lg:text-[2.75rem]",
      h3: "font-display font-normal leading-snug text-2xl md:text-3xl",
      h4: "font-display font-normal leading-snug text-xl md:text-2xl",
      lead: "font-sans text-lg leading-relaxed",
      body: "font-sans text-base leading-relaxed",
      small: "font-sans text-sm leading-relaxed",
      caption: "font-sans text-xs leading-relaxed",
      eyebrow: "font-sans text-[11px] uppercase tracking-[0.14em]",
      mono: "font-sans text-[11px] uppercase tracking-[0.12em]",
    },
    tone: {
      ink: "text-[#1A1A1A]",
      muted: "text-[#5C584F]",
      subtle: "text-[#7A7468]",
      coral: "text-[#C75B39]",
      white: "text-white",
      "white-80": "text-white/80",
      "white-75": "text-white/75",
      "white-70": "text-white/70",
      "white-45": "text-white/45",
    },
    clamp: {
      none: "",
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
    },
  },
  defaultVariants: {
    variant: "body",
    tone: "ink",
    clamp: "none",
  },
});

export const surfaceVariants = cva(
  "min-w-0 max-w-full overflow-x-clip break-words [overflow-wrap:anywhere]",
  {
    variants: {
      variant: {
        plain: "bg-transparent",
        panel: "bg-[#F5F2EA]",
        mist: "bg-[#EFEBE3]",
        navy: "bg-[#1A1A1A] text-white",
        purple: "bg-[#8B3A2A] text-white",
        bordered: "bg-[#F5F2EA] border border-[#E0DBD2]",
        inset: "bg-white/5 border border-white/10",
      },
      padding: {
        none: "p-0",
        sm: "p-4 sm:p-5",
        md: "p-6 lg:p-7",
        lg: "p-8 lg:p-10",
        xl: "p-10 lg:p-12",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-lg",
        lg: "rounded-xl",
      },
      border: {
        none: "",
        hairline: "border border-[#E0DBD2]",
        strong: "border border-[#C9C2B6]",
        white10: "border border-white/10",
        white15: "border border-white/15",
      },
    },
    defaultVariants: {
      variant: "panel",
      padding: "lg",
      radius: "none",
      border: "none",
    },
  },
);

export const ampButtonVariants = cva(
  "amp-focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-sans font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 shrink-0 min-w-0 max-w-full",
  {
    variants: {
      variant: {
        coral:
          "bg-[#C75B39] text-white hover:bg-[#A8482C] amp-focus-ring-on-navy",
        navy: "bg-[#1A1A1A] text-white hover:bg-[#000000] amp-focus-ring-on-light",
        outlineLight:
          "border border-white/30 bg-transparent text-white hover:bg-white/10 amp-focus-ring-on-navy",
        outlineDark:
          "border border-[#1A1A1A]/25 bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A]/5 amp-focus-ring-on-light",
        ghostLight:
          "bg-transparent text-white underline-offset-4 hover:underline amp-focus-ring-on-navy",
        ghostDark:
          "bg-transparent text-[#1A1A1A] underline-offset-4 hover:underline amp-focus-ring-on-light",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-12 px-10 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "coral",
      size: "lg",
      fullWidth: false,
    },
  },
);

export type ContainerVariantProps = VariantProps<typeof containerVariants>;
export type SectionVariantProps = VariantProps<typeof sectionVariants>;
export type StackVariantProps = VariantProps<typeof stackVariants>;
export type GridVariantProps = VariantProps<typeof gridVariants>;
export type TextVariantProps = VariantProps<typeof textVariants>;
export type SurfaceVariantProps = VariantProps<typeof surfaceVariants>;
export type AmpButtonVariantProps = VariantProps<typeof ampButtonVariants>;
