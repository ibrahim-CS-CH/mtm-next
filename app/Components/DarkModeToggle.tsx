"use client"
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme();
    useEffect(()=>{
        setMounted(true);
    }, [])
    if(!mounted) return null;
  return (
    
    <button title={theme} onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} >
      {theme ==="dark" ? <CiLight size={"2em"} /> : <CiDark size={"2em"} />}
    </button>
  );
};

export default DarkModeToggle;

