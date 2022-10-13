import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    /* scroll-snap-type: y proximity; */
  }
  body {
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    background-color: #000;
    color: #fff;

    @supports (overflow-x: clip) {
      overflow-x: clip !important;
    }
    @supports not (overflow-x: clip) {
      overflow-x: hidden;
      height: -webkit-fill-available;
    }
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
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
