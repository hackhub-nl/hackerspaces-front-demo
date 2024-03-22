import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .logo {
    color: white;
    font-size: 2.5rem;
    background: linear-gradient(to left, purple, orange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .pixelify-sans-600 {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }

  .navLinks,
  .subscribeBtn {
    margin-left: auto;
  }
`;
