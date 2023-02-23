import { useState,useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { VscMenu,VscChromeMaximize, VscChromeMinimize, VscChromeClose, VscSplitHorizontal, VscTerminalTmux, VscSplitVertical } from "react-icons/vsc";
import { GoKebabHorizontal } from "react-icons/go";

function Nav() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>
    <nav>
        {/*<h2>Width: {windowSize.current[0]}</h2>

        <h2>Height: {windowSize.current[1]}</h2>*/
        }
        <div id="nav-link-section" className="nav-section">
        
            <a href="#" id="logo">
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
            <a className="navItem" href="#">Run</a>
            <a className="navItem" href="#">Terminal</a>
            <a className="navItem" href="#">Help</a>
            <button className="kebab">
                <GoKebabHorizontal/>
            </button>
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
            <a href="#">File</a>
            <a href="#">Edit</a>
            <a href="#">Selection</a>
            <a href="#">View</a>
            <a href="#">Go</a>
            <a href="#">Run</a>
            <a href="#">Terminal</a>
            <a href="#">Help</a>
        </div>
    ):(<></>)
    }
    
    </>
  )
}

export default Nav