import { createGlobalStyle } from 'styled-components'

export const colors = {
  beige: '#FFEBD9',
  rose: '#E66767',
  white: '#FFFFFF',
  white2: '#FFF8F2'
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${colors.rose};
        font-family: 'Roboto', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: ${colors.white2};
    }

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    .margin-top{
        margin-top: 24px;
        margin-bottom: 8px;
    }
    .margin-bottom{
        margin-bottom: 24px;
    }
`

export default GlobalStyle
