import React, {useRef, useState} from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Link,
    //  useHistory 
    } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from "./styles";

import logoImg from "../../assets/images/logo.png";

export default function SignUp() {
    const formRef = useRef<FormHandles>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    function handleSubmit() { 
        const obj = {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            birthdate,
        }

        console.log(obj);
        

        api.post('owner-guest/signup', obj).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

        // setName('');
        // setEmail('');
        // setPassword('');
        // setPasswordConfirmation('');
        // setBirthdate('');

    }
    return(
        <Container>
        <Background />
            <Content> 
                <AnimationContainer>
                        
                    <img src={logoImg} alt="AppParty"/>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça o seu Registro</h1>
                        
                        <Input name="name" icon={FiUser} placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                        <Input name="email" icon={FiMail} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <Input name="password" icon={FiLock} type="password" placeholder="Digite sua Senha" onChange={(e) => setPassword(e.target.value)}/>
                        <Input name="password" icon={FiLock} type="password" placeholder="Repita a Senha" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                        <Input name="birthdate" icon={FiLock} type="date" placeholder="Data de Aniversario" onChange={(e) => setBirthdate(e.target.value)}/>

                        {/* <Link to="/dashboard" >
                        </Link> */}
                        <Button name="submit" type="submit" >
                            Entrar
                        </Button>

                        {/* <a href="forgot">Esqueci minha senha</a> */}
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

