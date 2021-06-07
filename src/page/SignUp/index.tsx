import React, {useRef} from "react";
import { FiMail, FiLock, FiUser, FiLogIn, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from "./styles";

import logoImg from "../../assets/images/logo.png";

export default function SignUp() {
    const formRef = useRef<FormHandles>(null);

    function handleSubmit() { console.log('teste')
}
    return(
        <Container>
        <Background />
            <Content> 
                <AnimationContainer>
                        
                    <img src={logoImg} alt="AppParty"/>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça o seu Registro</h1>
                        
                        <Input name="name" icon={FiUser} placeholder="Nome"/>
                        <Input name="email" icon={FiMail} placeholder="E-mail"/>
                        <Input name="password" icon={FiLock} type="password" placeholder="Digite sua Senha"/>
                        <Input name="password" icon={FiLock} type="password" placeholder="Repita a Senha"/>

                        <Link to="/dashboard" >
                        <Button name="submit" type="submit" >
                            Entrar
                        </Button>
                        </Link>

                        <a href="forgot">Esqueci minha senha</a>
                    </Form>

                    <Link to="/">
                    <FiArrowLeft />
                    Voltar para logon
                    </Link>

                </AnimationContainer>
            </Content>
        </Container>
    )
}

