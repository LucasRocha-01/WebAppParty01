import { Container } from './styles';

import logoImg from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Container>
            <div>
                <Link to="/" >AppParty</Link>
                <img src={logoImg} alt="logo" />
                <ul>
                    <li><a href="https://github.com/carlos-dev" target="_blank" rel="noreferrer" >GitHub - Carlos André </a></li>
                    <li><a href="https://github.com/eduardojesusdev" target="_blank" rel="noreferrer" >GitHub - Eduardo José </a></li>
                    <li><a href="https://github.com/LucasRocha-01" target="_blank" rel="noreferrer" >GitHub - Lucas Rocha</a></li>
                    <li><a href="https://github.com/pinpassos" target="_blank" rel="noreferrer" >GitHub - Matheus Passos</a></li>
                </ul>
            </div>
        </Container>
    )
}