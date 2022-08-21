import styled from "styled-components";

let NavbarStyled = styled.div`
width : 100%
height : 64px;
background-color: var(--primary-dark-faded);
margin: 0px;
padding: 0 12px;
display:flex;
justify-content: space-between;
align-items: center;
.nav-left {
    display: flex;
    align-items: center;
}
nav {
    margin-left: 20px;
}
.nav-right{
    margin-right: 16px;
}
`;
let NavItem = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  display: inline-block;
  margin: 0 16px;
  &:hover {
    cursor: pointer;
    color: var(--secondary-light);
    transition: all ease-in-out 0.2s;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
let NavMobile = styled.div`
  height: 64px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  @media (min-width: 480px) {
    display: none;
  }
  .nav-mobile {
    width: 100%;
    background-color: var(--primary-dark-faded);
    height: 64px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    border-left: 2px solid var(--primary-background);
    padding: 16px;
  }
`;

export { NavbarStyled, NavItem, NavMobile };
