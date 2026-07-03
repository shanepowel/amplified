'use client';

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      data-testid="button-theme-toggle"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
      )}
    </Button>
  );
}
