import { useState } from "react";
import { useTheme } from "../context/useThemeContext";
import { Moon, Sun } from "lucide-react";

function Header() {
  const { isThemeLight, setIsThemeLight } = useTheme();

  return (
    <div
      className={`flex justify-between items-center py-4 px-24 ${
        isThemeLight
          ? "shadow-gray-700 bg-white text-black"
          : "bg-gray-700 text-white"
      }  `}
    >
      <p className="font-bold">where in the world</p>
      <button
        className="flex justify-between items-center gap-1 text-sm"
        onClick={() => setIsThemeLight((is) => !is)}
      >
        <span>{isThemeLight ? <Sun size="16" /> : <Moon size="16" />}</span>
        Dark Mode
      </button>
    </div>
  );
}

export default Header;
