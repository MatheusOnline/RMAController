import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  :root{
    --brand-color: #0cc0df;
    --background-color: #f5f7fb;
    --item-color: #41afee;
    --transparent-color: #41aeee78;
  }

  * {
    font-family: 'Roboto', sans-serif;
  }
`;
