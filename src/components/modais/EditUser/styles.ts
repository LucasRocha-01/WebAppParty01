import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.form`
    
    overflow: scroll;
    height: 80vh;

    padding-right: 2rem;

    .imgBorder {
        display: flex;
        justify-content: center;
    }

    .avatarInput {
        margin-top: -50px;
        margin-left: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        
        background: #87CEFA;
        border-radius: 50%;
        padding: 0;
        width: 4rem;
        cursor: pointer;
        transition: background-color 0.2s;

        :hover {
            background: ${shade(0.2, '#87CEFA')};
        }

        input {
            display: none;
        }
    }

    .avatarImg {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;
        background: var(--background);
        border-radius: 50%;

        margin: 0 auto;
        height: 14rem;
        width: 14rem;
        img {
            justify-content: center;
            align-items: center;
            height: 12.5rem;
            width: 12.5rem;
            border-radius: 42%;
            object-fit: cover;
        }
    }

    .titulo {
        display: flex;
        justify-content: center;
    }
    .row {
        margin-top: 50px;
    }
    
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    label {

        margin: 1rem 0 1rem;
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        align-items: center;
        justify-content: center;

        display: flex;
        p{
            flex: 1;
        }
        
        input {
            height: 30px;
            flex: 0.5;
            background: transparent;
            border: none;
        }
    }

    select {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body)
        }


        & + select {
            margin-top: 1rem;
        }

        & + input {
            margin-top: 1rem;
        }

    }

    textarea {

        resize: none;
        margin-top: 1rem;
        width: 100%;
        padding: 1rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;
        height: 8rem;

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }

    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius : 0.25rem;
        border :0;

        font-size : 1rem;
        margin-top : 1.5rem;
        font-weight : 600;

        transition : filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;
