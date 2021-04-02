import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --red:          #E52E4D;
        --blue:         #5429cc;
        --green:        #33CC95;

        --blue-light:   #6933FF;

        --text-title:   #363F5F;
        --text-body:    #969CB3;

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

    // font-sige: 16px(desktop) 
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 87.5%; 
        }
    }

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

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
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
`;

export const HeaderView = styled.div`
    background: var(--black-medium);

    height: 100px;

    div {
        background: var(--black-medium);

        justify-content: center;
        display: flex;
        max-width: 1080px;
    }
`;