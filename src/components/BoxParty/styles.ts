import styled from 'styled-components';
import { GlobalStyle } from '../../styles/globalStyles'

export const ContainerBP = styled.div`


    display: flex;
    align-items: center;


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


    display: flex;
    align-items: center;

    width: 100%;
    height: 88px;
    padding-left: 20px;

    border-radius: 6px;

    background: var(--shape);

    box-shadow: 2px 2px 10px;

    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    span {
        margin-left: 20px;
        color: var(--white);
    }

    .hourClock {
        
        width: 25px;
        height: 25px;

        margin-left: 225px;
        margin-right: 20px;
    }

    p {
        color: var(--white);
    }

`;

export const ImgPartyBP = styled.img`

    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;

`;