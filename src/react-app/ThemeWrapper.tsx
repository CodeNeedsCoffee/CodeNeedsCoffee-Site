import React, { useState } from "react";
import { HeroUIProvider } from "@heroui/react";

interface ThemeWrapperProps {
  children: React.ReactElement<any, any>;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <HeroUIProvider>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Pass the toggle function via React context or prop if needed */}
        {React.cloneElement(children, { toggleTheme, theme })}
      </main>
    </HeroUIProvider>
  );
}
