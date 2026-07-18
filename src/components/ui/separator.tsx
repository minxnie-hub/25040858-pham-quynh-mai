import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../lib";

export function Separator({ className, orientation = "horizontal" }: { className?: string; orientation?: "horizontal" | "vertical" }) {
  return <SeparatorPrimitive.Root decorative orientation={orientation} className={cn("separator", `separator--${orientation}`, className)} />;
}
