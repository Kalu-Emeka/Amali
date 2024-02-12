import { useState } from "react"
function Nav () {
    const [showNavBar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavBar)
    }
    const removeActive = () => {
        setIsActive(false)
    }
    return (
        <>
            <div className="nav bg-white py-2 shadow-black">
                <nav className="flex justify-between mx-4 h-12 pb-13">
                    <div className="nav-logo">
                        <div className="navLogo">
                            <a href="/"><img src="/images/amali-small-logo 1.svg" alt=""/></a>
                        </div>
                        <div className="logoBar w-0">
                            <img onClick={handleShowNavbar} src="/images/Untitled.png" alt=""/>
                        </div>
                    </div>
                    <ul id="nav-links" className={`nav-links flex justify-center items-center text-green py-13 ${showNavBar && 'active'}`}>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">Who we are</a></li>
                        <li><a href="/mentor">Mentor</a>
                            <div className="sub-menu">
                                <ul>
                                    <li><a href="/becomeAmentor">Become a Mentor</a></li>
                                    <li><a href="/mentor">Our Mentor</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="/mentee">Mentees</a>
                            <div className="sub-menu2">
                                <ul>
                                    <li><a href="/becomeAmentee">Become a mentee</a></li>
                                    <li><a href="/mentee">Mentees</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="/resources">Resources</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Nav