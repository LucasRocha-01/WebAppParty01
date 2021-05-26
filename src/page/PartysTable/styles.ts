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