import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


/*----------*----------*----------* Fonts */


/*----------*----------*----------* Reset */
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
}


/*----------*----------*----------* General Styles */
:root {
  /* font-size: 62.5%; */
  /* max-width: 960px; */
  /* margin: 0 auto; */
  /* padding: 40px 20px; */
  /*----------*----------*----------* Website Theme */
  --color-primary: hsl(0, 0%, 100%);
  --color-secondary: hsl(0, 0%, 11%);
  --color-secondary-m: hsla(0, 0%, 11%, 0.4);
  --color-tertiary: hsl(0, 0%, 17%);
  --color-quaternary: hsl(0, 1%, 50%);
  /*----------*----------*----------* Padding */
  /* 
        --------------------- Sizing Nature
        d     = dynamic
        st    = static
        --------------------- Sizing
        l     = large
        m     = medium
        s     = small
        xs    = extra small
        c     = customized
        --------------------- Orientation
        v  = vertical   (top & bottom)
        h  = horizontal (right & left)
  */


  /* Dynamic */
  --dlv: calc(2rem + 12vh);
  --dlh: calc(2rem + 12vw);


  --dmv: calc(1rem + 2vh);
  --dmh: calc(1rem + 2vw);


  --dmvc: calc(1rem + 4vh);
  --dmhc: calc(1rem + 4vw);


  --dsv: calc(1rem + 1vh);
  --dsh: calc(1rem + 1vw);


  /* Static */
  --slv: 2rem;
  --slh: 3rem;


  --smv: 1.5rem;
  --smh: 2.5rem;


  --ssv: 1rem;
  --ssh: 2rem;


  /*----------*----------*----------* Typography */
  /* 
      --------------------- Sizing Nature
      d     = dynamic
      st    = static
      --------------------- Sizing
      xl    = extra large
      l     = large
      m     = medium
      s     = small
      xs    = extra small
      c     = customized
      --------------------- Family
      font-family: 'Oswald', sans-serif;
      font-family: 'Plus Jakarta Sans', sans-serif;
*/


  /* Dynmaic */
  --fdl: calc(2rem + 3vw);
  --fdlc: calc(3rem + 3.5vw);
  --fdm: calc(1rem + 2vw);
  --fdmc: calc(2rem + 2.5vw);
  --fds: calc(1rem + 1vw);
  --fdsc: calc(1rem + 1.5vw);



  /* Static */
  --fsl: 3rem;
  --fslc: 3.5rem;
  --fsxl: 4rem;
  --fsm: 2rem;
  --fsmc: 2.5rem;
  --fss: 1rem;
  --fssc: 1.5rem;



  /* Family */
  --font-family-heading: "Oswald", sans-serif;
  --font-family-text: "Plus Jakarta Sans", sans-serif;
  --font-family-code: "Courier", Courier;
}


html {
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  font-size: 62.5%;
}


body {
  font-family: ${props => props.theme.fonts.fontFamily.text}, sans-serif;
  font-size: ${props => props.theme.fonts.size.fs16};
  font-weight: ${props => props.theme.fonts.fontWeight.regular};
  min-height: 100vh;
  color: ${props => props.theme.variant.gray500};
  background: ${props => props.theme.variant.gray100};
    -webkit-font-smoothing: antialiased;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${props => props.theme.fonts.fontFamily.heading};
  font-weight: ${props => props.theme.fonts.fontWeight.bold};
  line-height: ${props => props.theme.fonts.lineHeight};
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



ul {
  list-style-type: none;
}


/* li+li {
  margin-top: 2rem;
} */


p {
  line-height: 160%;
  font-size: 1.4rem;
  /* margin-top: 0.8rem; */
  color: var(--color-secondary-modifier);
}

button, a {
  cursor: pointer;
}

a {
  display: inline-block;
  text-decoration: none;
  /* margin-top: 1.6rem; */
  color: var(--color-primary);
  /* width: 100%; */
  color: inherit;
  align-self: center;
  font-size: ${({ theme }) => theme.fonts.size.fd16};
}


a:hover {
  filter: brightness(0.9);
  cursor: pointer;
  /* color: red; */
}


:focus {
  outline: transparent;
  /* box-shadow: 0 0 0 2px red; */
  /* border-radius: 0.5rem; */
  /* border: 1px solid red; */
}


main {
  display: flex;
  flex: 1 1;
  flex-direction: column;
  min-height: 100vh;
}


ol,
ul {
  list-style-position: inside;
  list-style-type: none;
}


blockquote,
q {
  quotes: none;
}


blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}


table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 60rem;
}


span {
  display: block;
}

`;
