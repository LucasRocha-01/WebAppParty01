import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    height: 150px;
    background: var(--shape);
    width: 100%;
    justify-content: center;
    div {

        width: 100%;
        max-width: 1080px;

        display: flex;
        justify-content: space-between;

        display: flex;
        align-items: center;

        img {
            height: 80px;
            transition: height 0.2s;

            :hover {
                height:90px;
            }
        }

        ul {
            color: var(--shape);
            list-style: none;
            margin: 10px;

            li {
            }
        }
                a { color: white; } 
                a:hover {color: var(--background)}
                a:link { text-decoration: none}
    }
`;