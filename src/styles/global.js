import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--primary);
  }

  input,
  button,
  textarea,
  select {
    font: 500 16px Roboto, sans-serif;
    border: 0;
    outline: 0;
    border-radius: 6px;
  }

  .button {
    height: 50px;
    border-radius: 20px;
    background: var(--secondary);
    color: var(--font);
    font-weight: bold;
    transition: 400ms;

    &:hover {
      cursor: pointer;
      color: var(--font);
      opacity: 0.8;
    }
  }

  .image {
    width: 200px;
    height: 200px;
  }

  .link {
    display: flex;
    align-items: center;
    color: var(--secondary);
    font-size: 18px;

    > svg {
      margin-right: 10px;
    }
  }

  a {
    &:hover {
      color: var(--secondary);
      opacity: 0.7;
      text-decoration: none;
    }
  }

  :root {
    --primary: #1A1D1A;
    --secondary: #F0544F;

    --line: #cccccc;
    --white: #ffffff;
    --font: #f5f5f5;

    --scroll: #2f3136;
    --scroll-detail: rgb(32,34,37);

    --whatsapp: #189D0E;
    --facebook: #485A96;
    --gmail: #BF4539
  }

`