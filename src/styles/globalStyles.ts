import styled, {createGlobalStyle} from 'styled-components'
import { shade } from 'polished'

export const GlobalStyle = createGlobalStyle`
    :root{
        --red:          #E52E4D;
        --blue:         #5429cc;
        --green:        #33CC95;

        --blue-light:   #6933FF;

        --text-title:   #363F5F;
        --text-body:    #969CB3;
        --text-light:   #F4EDE8;

        --background:   #003399;

        --black-medium: #28262E;
        --white:        #F4EDE8;

        --shape:        #3E3B47;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // - TESTE
            * {
        box-sizing: border-box;
        }
        
        .row::after {
        content: "";
        clear: both;
        display: table;
        }

        [class*="col-"] {
        float: left;
        padding: 15px;
        }

        /* .col-1  {width: 8.33%;}
        .col-2  {width: 16.66%;}
        .col-3  {width: 25%;}
        .col-4  {width: 33.33%;}
        .col-5  {width: 41.66%;}
        .col-6  {width: 50%;}
        .col-7  {width: 58.33%;}
        .col-8  {width: 66.66%;}
        .col-9  {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;} */

        html {
        font-family: "Lucida Sans", sans-serif;
        }

        .header {
        background-color: #9933cc;
        color: #ffffff;
        padding: 15px;
        }

        .menu ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        }

        .menu li {
        padding: 8px;
        margin-bottom: 7px;
        background-color: #33b5e5;
        color: #ffffff;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }

        .menu li:hover {
        background-color: #0099cc;
        }


    // - TESTE

    // font-sige: 16px(desktop) 


    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--white);
        padding: 3rem;
        position: relative;

        border-radius: 0.5rem;
    } */

    .react-modal-content {
        width: 100%;
        max-width: 1080px;
        background: var(--white);
        padding: 3rem 26px 3rem 3rem;
        position: relative;

        border-radius: 0.5rem;
    }

    .react-modal-close {
        position: absolute; 
        right: 1.5rem;
        top: 1.5rem;

        border : 0;
        background: transparent;

        transition : filter 0.2s;

        &:hover {
            filter: brightness(0.8)
        }
    }
    .react-modalView-menu {
        position: absolute; 
        right: 1.5rem;
        top: 1.5rem;

        button {
            border : 0;
            background: transparent;

            svg {
                color: var(--shape);
                font-size: 20px;
            }
        }

        transition : filter 0.2s;

        &:hover {
            filter: brightness(0.8)
        }
    }
`;

export const Button = styled.button`
  background: var(--shape);
  height: 56px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px black;
  border: 0;
  padding: 0 16px;
  color: var(--white);
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: ${shade(0.2, '#3E3B47')};
  }
`;

export const HeaderView = styled.div`

    .menuReact {
        display: flex;
        width: 60px;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;

         svg {
             padding:0;
             margin: 0;
         }
    }
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    
    /* background: var(--white); */
    background: var(--black-medium);

    height: 100px;

    button {
        background: transparent;
        border: 0;
        
        font-size: 25px;
        color: var(--text-light);
        
        &:hover {
        background: ${shade(0.2, 'black')};
  }

    }

    div {
        background: var(--black-medium);

        width: 1080px;

        display: flex;
        justify-content: space-between;

        a {
            display: flex;
            align-items: center;
        }
    }
`;