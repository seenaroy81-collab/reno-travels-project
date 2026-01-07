
import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
    variant?: "default" | "light" | "dark";
    className?: string;
}

export const Logo = ({ variant = "default", className }: LogoProps) => {
    const isDark = variant === "light";

    return (
        <div className={cn("flex items-center gap-2 group", className)}>
            <div className={cn(
                "p-2 rounded-xl transition-all duration-300 group-hover:scale-110",
                isDark ? "bg-white/10 text-white" : "bg-primary text-primary-foreground"
            )}>
                <Plane className="h-5 w-5 fill-current" />
            </div>
            <div className="flex flex-col">
                <span className={cn(
                    "font-display text-xl leading-none font-bold tracking-tight transition-colors",
                    isDark ? "text-white" : "text-primary"
                )}>
                    ALMOUED
                </span>
                <span className={cn(
                    "font-sans text-[0.65rem] tracking-[0.2em] font-medium uppercase",
                    isDark ? "text-white/70" : "text-muted-foreground"
                )}>
                    Travels
                </span>
            </div>
        </div>
    );
};
