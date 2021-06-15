import React, {useRef, useCallback} from "react";
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

import getValidationErrors from "../../utils/getValidationErrors";

import logoImg from "../../assets/images/logo.png";

import Input from '../../components/Input';
import Button from '../../components/Button'; 

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/toast';

import { Container, Content, Background, AnimationContainer } from "./styles";

interface SignInFormData {
    email: string;
    password: string;
    remember: boolean;
}



const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();
      
    const handleSubmit = useCallback(
        async (data: SignInFormData) => { 
            try {
                formRef.current?.setErrors({});
                
                const schema = Yup.object().shape({
                   email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um email Válido'),
                   password: Yup.string().required('No mínimo 6 dígitos'),
                });
                
                await schema.validate(data, { abortEarly: false });
                
                await signIn({
                    email: data.email,
                    password: data.password,
                    remember: data.remember,
                });

                console.log(data);
                
            } catch (err) {
                
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);

                    return;
                };

                addToast({
                    type: 'error',
                    title: 'erro na autenticação',
                    description: 'ocorreu um erro ao fazer login check as credenciais',
                });
            }
     },
        [signIn, addToast]
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
                        
                        <Input name="email"icon={FiMail} placeholder="E-mail" />                
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                       
                        <span>
                            <input name="remember" type="checkbox"/>
                            Lembrar essa senha 
                        </span>
                        
                        
                        <Button name="submit" type="submit" >
                            Entrar
                        </Button>

                    {/* <a href="forgot">Esqueci minha senha</a> */}
                    </Form>

                    <Link to="/SignUp">
                    <FiLogIn />
                    Criar conta
                    </Link>

                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}

export default SignIn; 