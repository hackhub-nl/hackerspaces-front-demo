import styled from "styled-components";

//! Header starts
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

  .navLinks {
  }

  .subscribeBtn {
    font-size: 18px;
    background: purple;
  }

  .links {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 20px;
    color: orange;
    &:hover {
      background-color: purple;
    }
  }

  @media (max-width: 1060) {
    .logo {
      font-size: 1.6rem;
    }

    .links,
    .loginBtn {
      font-size: 12px;
    }
  }
`;
//! Header ends

//! DisplayItems starts
export const HackerspaceEventsWrapper = styled.div`

`;
//! DisplayItems ends