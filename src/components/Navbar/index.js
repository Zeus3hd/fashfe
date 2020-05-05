import React, { useState } from "react";
import {
  Wrapper,
  MenuButtonContainer,
  MenuButton,
  MenuLink,
  DesktopNav,
  DesktopNavLink,
} from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Wrapper>
      <MenuButtonContainer istoggled={toggleMenu ? true : undefined}>
        <MenuButton onClick={() => setToggleMenu(!toggleMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
        <MenuLink
          to="/"
          bottom="10%"
          left="5%"
          istoggled={toggleMenu ? true : undefined}
        >
          Home
        </MenuLink>
        <MenuLink
          to="/store"
          bottom="35%"
          left="15%"
          istoggled={toggleMenu ? true : undefined}
        >
          Store
        </MenuLink>
        <MenuLink
          to="/contact"
          bottom="60%"
          left="30%"
          istoggled={toggleMenu ? true : undefined}
        >
          Contact
        </MenuLink>
      </MenuButtonContainer>
      <DesktopNav>
        <DesktopNavLink>
          <Link to="/">Home</Link>
        </DesktopNavLink>
        <DesktopNavLink>
          <Link to="/store">Store</Link>
        </DesktopNavLink>
        <DesktopNavLink>
          <Link to="/contact">Contact</Link>
        </DesktopNavLink>
      </DesktopNav>
    </Wrapper>
  );
};

export default Navbar;
