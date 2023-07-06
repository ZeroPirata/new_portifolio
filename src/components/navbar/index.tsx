import React, { useState, FunctionComponent, useEffect } from "react";
import { ContainerLogo, NavBarStld, NavLinksUrl, NavLink, MobileMenuButton, BurguerContent } from './style'
import utils from 'static/utils.json'
import { imagePathResolve } from "utils/imageresolver";
interface NavBarProps {

}

const links = [
    { id: "Home", url: "#home" },
    { id: "About", url: "#about" },
    { id: "Projects", url: "#projects" },
    { id: "Contact", url: "#contact" }
]

const NavBar: FunctionComponent<NavBarProps> = () => {
    const logoPath = imagePathResolve(utils.full)
    const [deviceHeight, setDeviceHeight] = useState(window.innerHeight)
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    useEffect(() => {
        const handleSizer = () => {
            setDeviceHeight(window.innerHeight)
        }
        window.addEventListener("resize", handleSizer)

        return () => { window.removeEventListener('resize', handleSizer) }
    }, [])

    return (
        <NavBarStld>
            <ContainerLogo>
                <img src={logoPath} alt="BichoCorps" className="logo" />
                <span className="namelogo">Gabriel Bicho</span>
            </ContainerLogo>
            <NavLinksUrl>
                {links.map(link => (
                    <NavLink key={link.id} href={link.url}>
                        {link.id}
                    </NavLink>
                ))}
            </NavLinksUrl>
            <MobileMenuButton onClick={toggleMobileMenu}>
                {showMobileMenu ?
                    (
                        <div className="closeIcon">
                            <div className="burguer-close-one"></div>
                            <div className="burguer-close-two"></div>
                        </div>
                    ) : (
                        <div className="openIcon" >
                            <div className="burguer"></div>
                            <div className="burguer"></div>
                            <div className="burguer"></div>
                        </div>
                    )}
            </MobileMenuButton>
            {showMobileMenu && <BurguerContent deviceHeight={deviceHeight}>
                {links.map(link => (
                    <NavLink key={link.id} href={link.url}>
                        {link.id}
                    </NavLink>
                ))}
            </BurguerContent>}
        </NavBarStld>
    );
}

export default NavBar;