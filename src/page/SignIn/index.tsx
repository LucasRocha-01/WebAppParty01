import React, {useRef} from "react";
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from "./styles";

import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function SignIn() {
    const formRef = useRef<FormHandles>(null);

    function handleSubmit() {
        console.log('teste')
    } 

    return(
        <Container>
            <Content> 
                <AnimationContainer>
                        
                    <img src={logoImg} alt="AppParty"/>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça o seu login</h1>
                        
                        <Input name="email" icon={FiMail} placeholder="E-mail"/>
                        <Input 
                            name="password" 
                            icon={FiLock} 
                            type="password" 
                            placeholder="Senha"
                        />
                        
                        <Link to="/dashboard">
                            <Button name="submit" type="submit" >
                                Entrar
                            </Button>
                        </Link>

                    <a href="forgot">Esqueci minha senha</a>
                    </Form>

                    <Link to="SignUp">
                    <FiLogIn />
                    Criar conta
                    </Link>

                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}

