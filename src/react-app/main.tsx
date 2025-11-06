import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {HeroUIProvider} from '@heroui/react'
import App from "./App.tsx";
import "./index.css";
import { ThemeWrapper } from "./ThemeWrapper";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HeroUIProvider>
      		<ThemeWrapper>
				<App />
			</ThemeWrapper>
    	</HeroUIProvider>
	</StrictMode>,
);
