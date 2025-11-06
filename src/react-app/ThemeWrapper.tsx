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
      <main className={`${theme} text-foreground bg-background min-h-screen`}>
        {/* Pass the toggle function via React context or prop if needed */}
        {React.cloneElement(children, { toggleTheme, theme })}
      </main>
    </HeroUIProvider>
  );
}
