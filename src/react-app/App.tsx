import { useState, useEffect } from "react";
import { Button, Card, CardBody, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch } from "@heroui/react";

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Apply the theme class directly to <html> or to your app container
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
    document.documentElement.classList.toggle("light", !prefersDark);
  }, []);

  // Handle toggle switch
  const toggleTheme = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle("dark", checked);
    document.documentElement.classList.toggle("light", !checked);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
      {/* Navbar */}
      <Navbar maxWidth="xl" position="static" className="shadow-sm bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md">
        <NavbarBrand>
          <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">MyHeroApp</span>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <a href="#features" className="text-gray-700 transition-colors">
              Features
            </a>
          </NavbarItem>
          <NavbarItem>
            <a href="#about" className="transition-colors">
              About
            </a>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat">
              Get Started
            </Button>
          </NavbarItem>

          {/* 🌗 Theme Switch */}
          <NavbarItem>
            <Switch
              isSelected={isDark}
              onValueChange={toggleTheme}
              aria-label="Toggle theme"
              color="primary"
              size="sm"
            >
              {isDark ? "Dark" : "Light"}
            </Switch>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16 transition-colors duration-300">
        <h1 className="text-5xl font-extrabold mb-6">
          Build Beautiful Interfaces with <span className="text-indigo-600 dark:text-indigo-400">HeroUI</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
          A simple, elegant, and fast UI built on React, powered by Vite, and deployed on Cloudflare Workers.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/CodeNeedsCoffee/CodeNeedsCoffee-Site"
            isExternal
          >
            <Button color="primary" size="lg">
              Explore
            </Button>
          </Link>
          <Button variant="bordered" color="primary" size="lg" onPress={() => setCount(count + 1)}>
            Clicks: {count}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16
        bg-background text-foreground
        transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Fast",
                desc: "Built with Vite and optimized for Cloudflare Workers for instant load times.",
              },
              {
                title: "Responsive by Default",
                desc: "Every component adapts beautifully to any screen size or device.",
              },
              {
                title: "Customizable",
                desc: "Easily theme components with Tailwind and HeroUI configuration.",
              },
            ].map((f, i) => (
              <Card key={i} shadow="sm" className="border border-gray-200 dark:border-zinc-700 transition-colors">
                <CardBody>
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 dark:border-zinc-800 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} MyHeroApp. Built with ❤️ using HeroUI, Vite, and Cloudflare Workers.</p>
      </footer>
    </div>
  );
}

export default App;