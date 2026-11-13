import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Extra classes on the outer wrapper */
  className?: string;
  /** Extra classes on the inner content panel */
  innerClassName?: string;
}

/**
 * Animated conic-gradient glow border wrapper.
 *
 * Wraps any content in a spinning cyan ↔ purple border glow.
 * The inner panel uses the standard glass-card background (`zinc-900/95`).
 *
 * Usage:
 * ```tsx
 * <GlowBorder>
 *   <p>Your content</p>
 * </GlowBorder>
 * ```
 */
const GlowBorder = React.forwardRef<HTMLDivElement, GlowBorderProps>(
  ({ children, className, innerClassName, ...props }, ref) => {
    const [useGlow, setUseGlow] = React.useState(true);

    React.useEffect(() => {
      // Check if conic-gradient with position syntax is supported
      try {
        const testDiv = document.createElement('div');
        testDiv.style.background = 'conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#7000ff_50%,#00f2ff_100%)';
        if (!testDiv.style.background) {
          setUseGlow(false);
        }
      } catch {
        setUseGlow(false);
      }
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl p-[1px]",
          !useGlow && "border border-white/10",
          className,
        )}
        {...props}
      >
        {useGlow && (
          /* Spinning conic gradient — visible as the 1px border glow */
          <div className="absolute inset-[-500%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#7000ff_50%,#00f2ff_100%)]" />
        )}

        {/* Inner panel */}
        <div
          className={cn(
            "relative h-full w-full rounded-[14px] border-2 border-transparent",
            useGlow
              ? "bg-[linear-gradient(#18181bf2,#18181bf2),conic-gradient(from_0deg,#FF3D71,#A855F7,#00E5FF,#FF3D71)] bg-origin-border bg-clip-padding"
              : "bg-zinc-900/95 border-white/10",
            "p-4",
            innerClassName,
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);
GlowBorder.displayName = "GlowBorder";

export { GlowBorder };
