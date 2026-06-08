import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "cream";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-xl font-bold uppercase tracking-wide transition-all duration-300 ease-out-soft focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Glossy red-gradient with a red glow that intensifies on hover.
  primary:
    "bg-[linear-gradient(180deg,var(--color-accent-from),var(--color-accent-to))] text-white shadow-btn hover:-translate-y-0.5 hover:shadow-btn-hover active:translate-y-0",
  // Glass outline ghost.
  secondary:
    "glass text-foreground hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.06]",
  // Solid light button for use on the red CTA panel.
  cream:
    "bg-foreground text-background shadow-soft hover:-translate-y-0.5 hover:opacity-95 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
};

// Discriminated on `href`: with one it renders <a> (anchor attrs), otherwise
// <button> (button attrs).
export type ButtonProps = CommonProps &
  (
    | ({ href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof CommonProps
      >)
    | ({ href?: undefined } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        keyof CommonProps
      >)
  );

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const iconNode = Icon ? (
    <Icon
      className="size-4 shrink-0 transition-transform duration-300 ease-out-soft group-hover/btn:translate-x-0.5"
      strokeWidth={2.5}
      aria-hidden
    />
  ) : null;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {iconNode && iconPosition === "left" ? iconNode : null}
      <span>{children}</span>
      {iconNode && iconPosition === "right" ? iconNode : null}
    </>
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
