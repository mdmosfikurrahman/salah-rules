import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "ocean" | "gold";
}

export const ContentCard = ({ children, className, variant = "default" }: ContentCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-6 shadow-soft transition-all hover:shadow-elevated",
        variant === "ocean" && "border-primary/20 bg-gradient-to-br from-accent/30 to-card",
        variant === "gold" && "border-secondary/30 bg-gradient-to-br from-secondary/10 to-card",
        className
      )}
    >
      {children}
    </div>
  );
};
