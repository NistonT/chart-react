import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		setTheme(prev => (prev === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("theme-dark");
			document.documentElement.classList.remove("theme-light");
		} else {
			document.documentElement.classList.add("theme-light");
			document.documentElement.classList.remove("theme-dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={theme === "dark" ? "theme-dark" : "theme-light"}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
