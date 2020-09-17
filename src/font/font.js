import { createGlobalStyle } from "styled-components";

import NetflixSans from "./NetflixSans-Icon.woff2";

export default createGlobalStyle`
@font-face{
    font-family: "Netflix Sans";
    src: local("Netflix Sans"),
    url(${NetflixSans}) format('woff2),
}
`;
