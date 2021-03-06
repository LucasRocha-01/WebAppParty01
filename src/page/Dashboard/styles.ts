import { lighten, shade } from 'polished';
import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    column-gap: 60px;
    row-gap: 30px;
    justify-content: center;
    margin-top: 30px;

    h1{
        margin-top: 30px;
        color: var(--white);
        margin-bottom: 30px;
    }

    .item {
        margin: 20px;
    }

    .nextEvent      { grid-area: nextEvent; }
    .boxPart        { grid-area: boxPart; }
    .adsParty       { grid-area: adsParty; }
    .btnAddParty    {
        grid-area: btnAddParty;
        width: 100% ;
        margin: 0 !important;
        padding: 0 !important;
    }

    //desktop
    @media screen and (min-width: 1024px) {
        
    /* .nextEvent { max-width: 60px; } */
    /* .boxPart { max-width: 20px; } */

        grid-template-columns: 50% 15%;
        grid-template-areas:
            "nextEvent  btnAddParty"
            "nextEvent  adsParty"
            "boxParty   adsParty"
            "boxParty   adsParty"
        ;
    }
    //mobile
    @media screen and (max-width: 767px) {
        margin: 40px;
        .btnAddParty {
            margin: 20px;

        }
        .boxParty {
            margin: 20px;
        }

        /* justify-content: center; */

        grid-template-areas:
            "btnAddParty"
            "nextEvent"
            "boxParty"
            "adsParty"
        ;
    }
`;

export const BoxContent = styled.div`

    /* overflow-y: scroll;  */
    height: auto ;
    padding-bottom: 30px;

    li{
        
        list-style-type: none;

        & + li {
            margin-top: 15px;
        }
    }
`;

export const NextEvent = styled.div`

    display: grid;
    justify-content: center;
        align-items: center;


    .imgNE { 
        grid-area: imgNE;
        }
    .contentNE { grid-area: contentNE;}
        width: 100%;
        align-items: center;

        .row {
            /* margin-left: 5px; */
            margin: 15px;
        }

        .col-6 {
            margin: 0;
            padding:0;

            & + .col-6 {
                margin-left: 5px;
            }
        }

        .imgNE {
            width: 100%;
            height: 350px;
            padding: 15px;
            object-fit: cover;
            border-radius: 7%;

        }
    //desktop
    @media screen and (min-width: 1024px) {

        grid-template-columns: 50% 50%;
        grid-template-areas:
            "imgNE contentNE" 
        ;
    }

    //mobile
    @media screen and (max-width: 767px) {

        grid-template-columns: 100%;
        grid-template-areas:
            "imgNE"
            "contentNE"
        ;
    }

    background: var(--shape);
    box-shadow: 2px 2px 10px;
    border-radius: 6px;
    margin-bottom: 50px;

    height: auto;

    transition: background-color 0.2s;

    :hover {
        background: ${shade(0.2, '#3E3B47')};
    }

    .description {
        /* max-height: 110px; */
    }


    h1 {
        font-size: 1rem;
        padding:0;
        margin: 0;
    }

    h2 {
        font-size: 1.2rem;
        padding:0;
        margin: 0;
    }    

`;

export const Anuncio = styled.div`


    img {
        width: 100%;
        box-shadow: 2px 2px 10px;
        border-radius: 6px;
    }
`;

export const InfoSemParty = styled.div`

    display: flex;
    align-items: center;
    
    svg {
        color: white;
        margin: 20px;
    }

    div {
        display: inline;
        align-items: center;
        justify-content: center;
        
        h1{
            font-size: 20px;
            margin: 0;
            padding:0;
        }
        span {
            color: white;
        }
    }

    border: 4px solid;
    border-radius: 10px;
    border-color: ${lighten(0.2, '#003399')};
    background: ${lighten(0.1, '#003399')};

`;


