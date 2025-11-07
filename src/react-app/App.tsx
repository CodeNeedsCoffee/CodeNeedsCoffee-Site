import { useState, useEffect, SVGProps } from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch } from "@heroui/react";
import { JSX } from "react/jsx-runtime";

export const MoonIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SunIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};

function App() {
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
        <NavbarBrand className="hidden md:flex">
          <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">CodeNeedsCoffee</span>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <a href="https://github.com/CodeNeedsCoffee" className="text-gray-700 transition-colors">
              GitHub
            </a>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="https://www.linkedin.com/in/codeneedscoffee"
            >
              <Button color="primary" variant="flat">
                LinkedIn
              </Button>
            </Link>
          </NavbarItem>

          {/* 🌗 Theme Switch */}
          <NavbarItem>
            <Switch
              isSelected={isDark}
              onValueChange={toggleTheme}
              defaultSelected
              aria-label="Toggle theme"
              color="secondary"
              size="lg"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? <MoonIcon className={className} /> : <SunIcon className={className} />
              }
            >
            </Switch>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <Avatar
          className="w-50 h-50 mb-10 text-large"
          src="/favicon.svg"
        />
        <h1 className="text-5xl font-bold mb-4">
          Hey, I'm <span className="text-primary">Evan Templin</span>
        </h1>
        <p className="text-lg text-default-500 max-w-2xl mb-8">
          I'm a <span className="font-semibold">Developer at Crestwood Associates</span> who builds
          custom solutions for Acumatica and web applications in Node.js and React.
          I'm passionate about coffee, automation, creative coding, and using technology to help people.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/CodeNeedsCoffee/CodeNeedsCoffee-Site"
          >
            <Button
              variant="solid"
              color="primary"
            >
              Explore My Code
            </Button>
          </Link>
          <Button
            as="a"
            href="mailto:codeneedscoffee@gmail.com"
            variant="bordered"
          >
            Contact Me
          </Button>
        </div>
      </section>

      {/* Skills / Features Section */}
      <section className="py-16 px-6 bg-muted/40">
        <h2 className="text-3xl font-bold text-center mb-10">What I Work With</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary">Full-Stack Development</h3>
            </CardHeader>
            <CardBody>
              <p>
                Building scalable apps using Node.js, React, TypeScript, and modern frameworks.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary">Acumatica Customization</h3>
            </CardHeader>
            <CardBody>
              <p>
                Extending ERP capabilities with C#, automation scripts, and API integrations.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary">Home Automation & IoT</h3>
            </CardHeader>
            <CardBody>
              <p>
                Experimenting with smart home systems and custom integrations using Home Assistant.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-default-100">
        <p className="text-sm text-default-500">
          © {new Date().getFullYear()} Evan Templin — Built with ❤️ using Coffee and Code (HeroUI, React, and Vite).
        </p>
      </footer>
    </div>
  );
}

export default App;