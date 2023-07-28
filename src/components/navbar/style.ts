import {BurguerContentProps, NavLinksUrlProps} from "interfaces/NavBar";
import {styled} from "styled-components";

export const NavBarStld = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 8vh;
  border: none;
  display: flex;
  background-color: white;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0));
  }

  @media (max-width: 980px) {
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: auto;
    padding: 20px 0;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  width: 50%;
  .logo {
    height: 75px;
    width: 75px;
    margin: 10px;
    border-radius: 100%;
  }
  .namelogo {
    font-size: 2.5em;
  }
  @media (max-width: 980px) {
    width: 100%;
    .namelogo {
      display: none;
    }
    .logo {
      margin: 5px;
      height: 60px;
      width: 60px;
    }
  }
`;
export const NavLinksUrl = styled.div<NavLinksUrlProps>`
  width: 50%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (max-width: 980px) {
    display: ${(props) => (props.showMobileMenu ? "flex" : "none")};
  }
`;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  width: 100%;
  &:hover {
    color: #d8ae5e;
    font-size: 2.5em;
  }
  @media (max-width: 980px) {
    margin-top: 50px;
    border-bottom: 3px solid #d8ae5e;
    width: 90%;
    font-size: 3em;
    &:hover {
      color: #d8ae5e;
      font-size: 3em;
    }
  }
`;
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 980px) {
    display: flex;
    margin: 0 25px;
    .closeIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      .burguer-close-one,
      .burguer-close-two {
        position: absolute;
        width: 50px;
        height: 5px;
        background-color: black;
      }
      .burguer-close-one:nth-child(1) {
        transform: rotate(45deg);
      }
      .burguer-close-two:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
    .openIcon {
      width: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 50px;
      .burguer {
        margin: 2px 0;
        height: 5px;
        width: 100%;
        background-color: black;
      }
    }
  }
`;

export const BurguerContent = styled.div<BurguerContentProps>`
  display: none;
  @media (max-width: 980px) {
    height: ${(props) => props.deviceHeight}px;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: white;
  }
`;
