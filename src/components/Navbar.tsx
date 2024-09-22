import { useState } from "react"

export default function Navbar(props: { handleTabChange: (tab: string) => void }) {
    const [active,setActive] = useState("experience")
    const handleTabChange = (tab: string) => {
        setActive(tab)
        props?.handleTabChange(tab)
    }
    return <>
        <div className="w-full md:flex justify-center items-center hidden">

            <button type="button" onClick={() => handleTabChange("experience")} className={`nav-button ${active=="experience"&&"focus"}`}>Experience</button>
            <button type="button" onClick={() => handleTabChange("research")} className={`nav-button ${active=="research"&&"focus"}`}> Research</button>

            <button type="button" onClick={() => handleTabChange("aboutMe")} className={`nav-button ${active=="aboutMe"&&"focus"}`}>About Me</button>
            <button type="button" onClick={() =>handleTabChange("academics")} className={`nav-button ${active=="academics"&&"focus"}`}>Academics</button>
            <button type="button" onClick={() => handleTabChange("contests")} className={`nav-button ${active=="contests"&&"focus"}`}>Contests</button>

        </div>
    </>
}