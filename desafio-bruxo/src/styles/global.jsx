import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #10141B;
        --secondary-color: #242633;
        --white: #fff;
        --grey: #E7E7E7;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: var(--primary-color);
        --webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    p {
        margin: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`