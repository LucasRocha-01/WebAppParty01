import React, {useRef, useState, useCallback} from "react";
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button'; 


import logoImg from "../../assets/images/logo.png";

import { Container, Content, Background, AnimationContainer } from "./styles";

import api from '../../services/api';

interface SignInFormData {
    email: string;
    password: string;
    remember: boolean;
}

export default function SignIn() {
    const formRef = useRef<FormHandles>(null);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');

    const { signIn } = useAuth();

    
    

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                
            signIn({
                email: data.email,
                password: data.password,
                remember: data.remember,
            });
            } catch (error) {
                
            }
        },
        [signIn]
    );
        // try {
            // api.post('owner-guest/login', {email, password, remember}).then((response) => {
            //     console.log(response);
                
            //     const token = response.data.token;

            //     localStorage.setItem('token', token);

            //     console.log('token: ' + token);
                
            // }, 
            // (error) => {
            //     console.log(error);
            // });

        // } catch (error) {
            
        // }
    // } 

    

    return(
        <Container>
            <Content> 
                <AnimationContainer>
                        
                    <img src={logoImg} alt="AppParty"/>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça o seu login</h1>
                        
                        <Input 
                            name="email" 
                            icon={FiMail} 
                            placeholder="E-mail" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                        <Input 
                            name="password" 
                            icon={FiLock} 
                            type="password" 
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>
                            <input 
                                name="remember"
                                type="checkbox" 
                                value={remember}
                                onChange={(e) => setRemember(e.target.value)}
                            />
                            Lembrar essa senha 
                        </span>
                        
                        
                        <Button name="submit" type="submit" >
                            Entrar
                        </Button>
                        {/* <Link to="/dashboard">
                        </Link> */}

                    {/* <a href="forgot">Esqueci minha senha</a> */}
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

