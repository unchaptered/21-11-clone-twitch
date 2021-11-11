import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const InitStlyes = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        font-size: 12px;
    }
    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    svg {
        width: 20px;
        padding: 0;
        margin: 0;
    }
    button {
        border: initial;
        font-size: 16px;
        background-color: initial;
        transition: font-size 0.2s ease-in;
        @media screen and (max-width: 1340px) {
            font-size: 14px;
        }
    }
`;
