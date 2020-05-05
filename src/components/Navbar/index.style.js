import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.nav``;

const MenuButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: ${colors.crimson};
  clip-path: circle(
    ${({ istoggled }) => (istoggled ? "50vw" : "20vw")} at 100% 100%
  );
  width: ${({ istoggled }) => (istoggled ? "50vw" : "20vw")};
  height: ${({ istoggled }) => (istoggled ? "50vw" : "20vw")};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 3;
  transition: 0.5s;
  @media (min-width: 1024px) {
    clip-path: circle(
      ${({ istoggled }) => (istoggled ? "10vw" : "5vw")} at 100% 100%
    );
    width: ${({ istoggled }) => (istoggled ? "10vw" : "5vw")};
    height: ${({ istoggled }) => (istoggled ? "10vw" : "5vw")};
  }
`;
const MenuButton = styled.button`
  color: #fff;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  padding: 0.6rem;
  cursor: pointer;
  position: relative;
  z-index: 50;
`;

const MenuLink = styled(Link)`
  position: absolute;
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  opacity: ${({ istoggled }) => (istoggled ? "1" : "0")};
  transition: 0.5s;
  text-decoration: none;
`;

const DesktopNav = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
  z-index: 50;
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const DesktopNavLink = styled.li`
  margin: 1rem;
  font-weight: bold;
  color: ${colors.purple};
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: ${colors.crimson};
  }
  > * {
    text-decoration: none;
  }
`;

export {
  Wrapper,
  MenuButtonContainer,
  MenuButton,
  MenuLink,
  DesktopNav,
  DesktopNavLink,
};
