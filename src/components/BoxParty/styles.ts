import { shade } from 'polished';
import styled from 'styled-components';
// import { GlobalStyle } from '../../styles/globalStyles'

export const ContainerBP = styled.div`


    display: flex;
    align-items: center;

    width: 100%;
    height: auto;
    padding-left: 20px;

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

    padding: 10px;

    section {
        display: grid;
        align-items: center;

        color: var(--text-light);
        font-size: 12px;

        grid-template-columns: 1fr 7fr 1fr 3fr;
        grid-template-areas:
        "logo   nameParty   hourClock   dateInit"
        "logo   typeParty   hourClock   dateClose"
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
    }

    .typeParty{
        grid-area: typeParty;
    }

    .hourClock{
            grid-area: hourClock;
        }

    .dateInit{
        grid-area: dateInit;
    }

    .dateClose{
        grid-area: dateClose;
    }

`;
