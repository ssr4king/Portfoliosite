import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-10 h-10 rounded-full hover:bg-gray-800/20 transition-colors"
      data-testid="theme-toggle"
    >
      {/* <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[var(--cyan-glow)]" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[var(--cyan-glow)]" /> */}
      <Sun
  className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-yellow-400 dark:text-yellow-500"
   />
  <Moon
  className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-700 dark:text-cyan-400"
  />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}