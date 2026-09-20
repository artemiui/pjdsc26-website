"use client";

import { useTheme } from "@/lib/themeContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`w-8 h-8 rounded-full ${className}`} aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center p-1.5 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -30, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 30, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-zinc-700" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
