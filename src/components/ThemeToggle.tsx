"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 flex items-center justify-center rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-purple-primary" />
      ) : (
        <Moon className="h-5 w-5 text-purple-primary" />
      )}
    </button>
  );
}
