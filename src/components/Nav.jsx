import { FaGithub } from "react-icons/fa";
import { VscChromeMaximize, VscChromeMinimize, VscChromeClose, VscSplitHorizontal, VscTerminalTmux, VscSplitVertical } from "react-icons/vsc";


function Nav() {
  return (
    <nav>
        <div id="nav-link-section" className="nav-section">
            <a href="#" id="logo">
                <FaGithub/>
            </a>
            <a href="#">File</a>
            <a href="#">Edit</a>
            <a href="#">Selection</a>
            <a href="#">View</a>
            <a href="#">Go</a>
            <a href="#">Run</a>
            <a href="#">Terminal</a>
            <a href="#">Help</a>
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
  )
}

export default Nav