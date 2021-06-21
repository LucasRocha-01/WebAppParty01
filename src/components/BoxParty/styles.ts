import { shade } from 'polished';
import styled from 'styled-components';
// import { GlobalStyle } from '../../styles/globalStyles'

export const ContainerBP = styled.div`

    padding-left:   20px;
    padding-right:  30px;

    svg {
        color: #8D88FF;
        margin-left: 20px;
        margin-right: 20px;
    }

    display: flex;
    align-items: center;

    width: 100%;
    height: auto;
    /* padding-left: 5px; */

    border-radius: 6px;

    background: var(--shape);

    box-shadow: 2px 2px 10px;

    transition: background-color 0.2s;
  
    &:hover {
        background: ${shade(0.2, '#3E3B47')};
    }


    img{
        width: 25px;
        height: 25px;
    }

    span{
        width: 100px;
        color: var(--white);
    }

`;

export const ContentBP = styled.div`

    /* padding: 10px; */

    section {
        display: grid;
        align-items: center;

        color: var(--text-light);
        font-size: 12px;

        grid-template-columns: 1fr 1fr 2fr 1fr;
        grid-template-areas:
        "logo   nameParty   nameParty   dateInit"
        "logo   typeParty   typeParty   dateClose"
        ;
    

        .item {
            display: flex;
            align-items: center;

            text-align: center;
            font-size: 1.5em;
        }
    }

    .logo{
        grid-area: logo;
        width: 100px;
        
        img {

            border-radius: 50%;
            width: 70px;
            height: 70px;
            object-fit: cover;    
        }
    }

    .nameParty{
        grid-area: nameParty;
        margin: 0;
    }

    .typeParty{
        grid-area: typeParty;
        margin: 0;
    }

    .hourClock{
            grid-area: hourClock;
            margin: 0;
        }

    .dateInit{
        grid-area: dateInit;
        margin: 0;
    }

    .dateClose{
        grid-area: dateClose;
        margin: 0;
    }

`;
