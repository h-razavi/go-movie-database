import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::after,*::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family:'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --primary-dark : #1c1f54;
    --primary-dark-faded : #1c1f5460;
    --primary-light: #26c897;
    --primary-background: #191923;
    --secondary-light: #279ba1;
    --primary-button: #298cbe;
    --primary-purple: #5b326d;
    --primary-red: #a72a3c;
    --primary-link: #7bb0e8;
    --primary-text: #fff;
    --card-background:rgba(255,255,0255,0.25);
    --secondary-text:rgba(255,255,255,0.45);
    background-color: var(--primary-background);
    color: var(--primary-text);
  }
  .container {
    width: 100%;
    max-width: 1310px;
    margin: 0 auto;
  }
  h2, h3, h4 {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  } 
`;

export default GlobalStyles;
