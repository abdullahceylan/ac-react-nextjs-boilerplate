import styled, { css, createGlobalStyle } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { normalize } from 'polished';
import theme from '@theme';

export { styled, ifProp, prop, css };

export const GlobalNormalize = createGlobalStyle`${normalize()}`;

// Rest of styles
export const globalStyles = `
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.65;
  word-break: break-word;
  font-kerning: auto;
  font-variant: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  hyphens: auto;
}
h2, h3, h4 {
  margin-top: 1.5em;
}
a {
  cursor: pointer;
  color: #0076FF;
  text-decoration: none;
  transition: all 0.2s ease;
  border-bottom: 1px solid white;
}
a:hover {
  border-bottom: 1px solid #0076FF;
}
ul, ol {
  padding: 0;
  margin-left: 1.5em;
}
ul {
  list-style-type: none;
}
li {
  margin-bottom: 10px;
}
ul li:before {
  content: '–';
}
li:before {
  display: inline-block;
  color: #999;
  position: absolute;
  margin-left: -18px;
  transition: color 0.2s ease;
}
code, pre {
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  font-size: .92em;
  color: #D400FF;
}
code:before, code:after {
  content: '\`';
}
blockquote {
  margin: 1.6em 0;
  padding: 5px 24px;
  background: #efefef;
}
input, button, textarea
{
  margin: 0;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding: .5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
}
button {
  padding: .65em 1em;
  background: #0076ff;
  color: #fff;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;
}
input:focus, textarea:focus, button:focus
{
  outline: 0;
  border-color: #0076ff;
}
button:hover {
  background: rgba(0, 118, 255, 0.8);
}
button:focus {
  box-shadow: 0 0 0 2px rgba(0, 118, 255, 0.5);
}
button:disabled {
  pointer-events: none;
  background: #999;
}
img {
  max-width: 100%;
}
textarea {
  min-height: 300px;
  width: 100%;
  resize: none;
  margin: 1.4em 0;
  box-sizing: border-box;
}
hr {
  border: none;
  border-bottom: 1px solid #efefef;
  margin: 6em auto;
}
`;

export const media = {
  xs: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.md}px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.lg}px) {
      ${css(...args)};
    }
  `,
  mdOnly: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.md}px) and (max-width: ${theme.grid.breakpoints.lg -
        1}px) {
      ${css(...args)};
    }
  `,
  smOnly: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.sm}px) and (max-width: ${theme.grid.breakpoints.md -
        1}px) {
      ${css(...args)};
    }
  `,
  smLess: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  mdLess: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.md}px) {
      ${css(...args)};
    }
  `,
  lgLess: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.lg}px) {
      ${css(...args)};
    }
  `,
};

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${prop('width', 300)}px;
  margin-bottom: 20px;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Grid = styled.div`
  width: ${prop('width', '100%')};
  margin-left: -5px;
  margin-right: -5px;
  ${ifProp(
    'width',
    css`
      margin: 0 auto;
    `,
  )}
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0 5px 0px;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  width: auto;
  ${ifProp('extend', 'width: 100%;')}
  ${ifProp(
    'xs',
    media.xs`
      width: calc(${({ gridSize, xs }) => (100 / (gridSize || theme.grid.size)) * xs}% - ${
      theme.grid.gutter
    }px);
    `,
  )}
  ${ifProp(
    'sm',
    media.sm`
      width: calc(${({ gridSize, sm }) => (100 / (gridSize || theme.grid.size)) * sm}% - ${
      theme.grid.gutter
    }px);
    `,
  )}
  ${ifProp(
    'md',
    media.md`
      width: calc(${({ gridSize, md }) => (100 / (gridSize || theme.grid.size)) * md}% - ${
      theme.grid.gutter
    }px);
    `,
  )}
  ${ifProp(
    'lg',
    media.lg`
    width: calc(${({ gridSize, lg }) => (100 / (gridSize || theme.grid.size)) * lg}% - ${
      theme.grid.gutter
    }px);
  `,
  )}
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  vertical-align: top;
`;
