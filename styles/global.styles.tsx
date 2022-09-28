import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: 'Space Grotesk', sans-serif;
    line-height: 1.5;
    background-color: #000;
    color: #fff;
  }
  
  
  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
  
  input, button {
    border: none;
    outline: none;
    font-family: inherit;
    &:focus {
      outline: none;
    }
  }

  input {
    font-size: 1.8rem;
  }
`
