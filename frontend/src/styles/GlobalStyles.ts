import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #282534;
        background-color: #282534;;
        color: var(--white)
    }
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
    }
    html {
        background : var(--primary);
    }
    :root {
         --primary: #282534;
         --secondary: #15181C;
         --search: #202327;
         --white: #D9D9D9;
         --gray: #7A7A7A;
         --outline: #2F3336;
         --retweet: #00c06b;
         --like: #e8265e;
         --twitter:#33A1F2;
         --twitter-dark-hover: #011017;
         --twitter-light-hover: #2C8ED6;
    }
`;
