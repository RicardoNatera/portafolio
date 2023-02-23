import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscChevronRight, VscMenu,VscChromeMaximize, VscChromeMinimize, VscChromeClose, VscSplitHorizontal, VscTerminalTmux, VscSplitVertical } from "react-icons/vsc";
import { GoKebabHorizontal } from "react-icons/go";

import useWindowSize from "../hooks/useWindowSize";

function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isKebabExpanded, setIsKebabExpanded] = useState(false)
    const size = useWindowSize();
  return (
    <>
    <nav>
        <div id="nav-link-section" className="nav-section">
        
            <a href="https://github.com/RicardoNatera/portafolio" id="logo">
                <FaGithub/>
            </a>
            <button className="barsToggler" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                <VscMenu/>
            </button>
            <a className="navItem" href="#">File</a>
            <a className="navItem" href="#">Edit</a>
            <a className="navItem" href="#">Selection</a>
            <a className="navItem" href="#">View</a>
            <a className="navItem" href="#">Go</a>
            {size.width<=888 ? (<></>):(<a className="navItem" href="#">Run</a>)}
            {size.width<=1020 ? (<></>):(<a className="navItem" href="#">Terminal</a>)}
            {size.width<=1028 ? (<></>):(<a className="navItem" href="#">Help</a>)}
            <div>
                <button className="kebab" onClick={() => {setIsKebabExpanded(!isKebabExpanded);}}>
                    <GoKebabHorizontal/>
                </button>
                {
                isKebabExpanded ? (
                    <div className="menu-kebab">
                        {size.width>=888 ? (<></>):(<a className="responsiveItem" href="#">Run <VscChevronRight/></a>)}
                        {size.width>=1020 ? (<></>):(<a className="responsiveItem" href="#">Terminal <VscChevronRight/></a>)}
                        {size.width>=1028 ? (<></>):(<a className="responsiveItem" href="#">Help <VscChevronRight/></a>)}
                    </div>
                ):(<></>)
                }
                
            </div>
        </div>
        <div id="nav-text-section" className="nav-section">
            <p>Nav.jsx - portafolio - Visual Studio Code</p>
        </div>
        <div id="nav-other-section" className="nav-section">
                <a href="#">
                    <VscSplitHorizontal />
                </a>
                <a href="#">
                    <VscSplitVertical />
                </a>
                <a href="#">
                    <VscSplitHorizontal />
                </a>
                <a href="#">
                    <VscTerminalTmux />
                </a>
        </div>
        <div id="nav-button-section" className="nav-section">
            <a href="#">
                <VscChromeMinimize />
            </a>
            <a href="#">
                <VscChromeMaximize />
            </a>
            <a href="#">
                <VscChromeClose />
            </a>
        </div>
    </nav>
    {
        isNavExpanded ? (
        <div className="menu">
            <a className="responsiveItem" href="#">File <VscChevronRight/></a>
            <a className="responsiveItem" href="#">Edit <VscChevronRight/></a>
            <a className="responsiveItem" href="#">Selection <VscChevronRight/></a>
            <a className="responsiveItem" href="#">View <VscChevronRight/></a>
            <a className="responsiveItem" href="#">Go <VscChevronRight/></a>
            <a className="responsiveItem" href="#">Run <VscChevronRight/></a>
            <a className="responsiveItem" href="#">Terminal <VscChevronRight/></a>
            <a className="responsiveItem" href="#">Help <VscChevronRight/></a>
        </div>
    ):(<></>)
    }
    
    </>
  )
}

export default Nav