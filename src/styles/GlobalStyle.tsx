import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  :root{
    --brand-color: #0cc0df
  }

  * {
    font-family: 'Roboto', sans-serif;
  }
`;
