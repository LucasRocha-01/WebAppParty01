import styled from "styled-components";

export const Container = styled.form`

    overflow: scroll;
    height: 80vh;

    padding-right: 2rem;

    .col-6 {
        padding-right: 0;
        padding-left: 0;

        & + .col-6 {
            padding-left: 1rem;
        }
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
        }
    }

    select {
        margin-top: 1rem;
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

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }

    }


    .description {
            height: 8rem;
            align-items: flex-start;
    }

    .zipCode {
        width: 60%;

        margin-right: 5%;
    }

    .numberCode {
        width: 35%;
    }

    .dataHour {
        display: inline-block;
        
        padding: 0;
        width: 49%;
        
        & + label {
            margin-left: 2%;
        }

        input{
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
    }

    div {
        display: inline;

        
            
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
