import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.css";
import Header from "./component/Header";
import { useTheme } from "./context/useThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Content from "./component/Content";

const queryClient = new QueryClient();
function App() {
  const { isThemeLight } = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`h-screen m-0 ${
          isThemeLight ? "bg-white text-black " : "bg-gray-800 text-white"
        }`}
      >
        <Header />
        <Content />
      </div>
    </QueryClientProvider>
  );
}

export default App;
