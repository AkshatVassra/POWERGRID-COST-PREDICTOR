import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

interface RiskBadgeProps {
  level: "Low" | "Medium" | "High";
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

const styles = {
  Low: {
    bg: "bg-success/10",
    text: "text-success",
    border: "border-success/20",
    icon: CheckCircle,
  },
  Medium: {
    bg: "bg-warning/10",
    text: "text-warning",
    border: "border-warning/20",
    icon: AlertCircle,
  },
  High: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/20",
    icon: AlertTriangle,
  },
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export function RiskBadge({ level, showIcon = true, size = "md" }: RiskBadgeProps) {
  const style = styles[level];
  const Icon = style.icon;

  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold border",
        style.bg,
        style.text,
        style.border,
        sizes[size]
      )}
    >
      {showIcon && <Icon className="w-3.5 h-3.5" />}
      {level}
    </span>
  );
}
