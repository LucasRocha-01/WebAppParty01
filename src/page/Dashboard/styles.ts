import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 30px;

    h1{
        margin-top: 30px;
        color: var(--white);

        margin-bottom: 30px;
    }

`;

export const BoxContent = styled.div`

    /* overflow-y: scroll;  */
    height: 400px ;

    li{
        
        list-style-type: none;

        & + li {
            margin-top: 15px;
        }
    }
`;

export const NextEvent = styled.div`

    display: flex;
    align-items: center;
    justify-items: center;

    background: var(--shape);

    width: 100%;
    height: 250px;

    box-shadow: 2px 2px 10px;

    border-radius: 6px;

    margin-bottom: 50px;

    display: grid;
    grid-template-columns: 1fr 1fr;

`;

export const Anuncio = styled.div`

    img {
        width: 100%;
        box-shadow: 2px 2px 10px;
        border-radius: 6px;
    }
    
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const ImgParty = styled.div`

    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;

    border-radius: 9px;

    width: 90%;
    height: 90%;
`;






