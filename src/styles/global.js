import { injectGlobal } from 'styled-components'

injectGlobal`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* Add fluid typography code */
  html {
    font: 100%/1 BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  body {
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";

}
  footer {
  width: 100%;
}

  /* Added to Fix Footer to bottom of viewport */
  html, body {
    height: 100%;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    flex: 1 0 auto;
  }

  /* End Fix to Place Footer on Bottom of Viewport /
  /* Continue CSS Reset */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  /* End CSS Reset */

  /* Casper Typography Default Styles Below /
  /* These Settings are Modified in PageBody.js but must be specified here first */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #2e2e2e;
    line-height: 1.15em;
    margin: 0 0 0.4em;
    text-rendering: geometricPrecision;
    font-weight: 700;
  }

  h1 {
    font-size: 3.125rem;
    letter-spacing: -2px;
    text-indent: -3px;
  }

  h2 {
    font-size: 2.25rem;
    letter-spacing: -1px;
    @media screen and (max-width: 35em) {
      font-size: 1.92rem;
    }
  }

  p {
    margin: 0 0 1rem;
    line-height: 1.78;
  }

  /* End Default Typography Code */
`
