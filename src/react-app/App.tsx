import { useState, useEffect } from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch } from "@heroui/react";

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