import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 30px;

    h1{
        color: var(--white);

        margin-bottom: 20px;
    }

`;

export const View = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr ;
    gap: 90px;
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

export const BoxCalendar = styled.div`

`;

export const NextEvent = styled.div`
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
    
    margin-top: 50px;

    background: var(--shape);

    width: 100%;
    height: 340px;

    box-shadow: 2px 2px 10px;

    border-radius: 6px;

    margin-bottom: 50px;
`;

export const ImgParty = styled.img`

    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;

    width: 100%;
    height: 100%;
`;
