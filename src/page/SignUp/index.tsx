import React, {useCallback, useRef} from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from "../../assets/images/logo.png";

import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Content, Background, AnimationContainer } from "./styles";
import { useAuth } from "../../hooks/AuthContext";

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    birthdate: string;
    remember: boolean;
}

export default function SignUp() {
    const formRef = useRef<FormHandles>(null);
  
    const { signUp } = useAuth();

    const handleSubmit = useCallback(
        async (data: SignUpFormData) => { 
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um email Válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
                // passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
                // birthdate: Yup.number().required('Data de Nascimento obrigatório'),
            });

            await schema.validate(data, { abortEarly: false, });

            await signUp({
                name: data.name,
                email: data.email,
                password: data.password,
                passwordConfirmation: data.passwordConfirmation,
                birthdate: data.birthdate,
                remember: data.remember,
            });

            console.log(data);

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            //dispara tast
             
        }
    },[signUp]);
        

        // api.post('owner-guest/signup', obj).then((response) => {
        //     console.log(response);
        //   }, (error) => {
        //     console.log(error);
        //   });
    
    return(
        <Container>
        <Background />
            <Content> 
                <AnimationContainer>
                        
                    <img src={logoImg} alt="AppParty"/>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça o seu Registro</h1>
                        
                    
                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input name="email" icon={FiMail} placeholder="E-mail" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Digite sua Senha" />
                        <Input name="passwordConfirmation" icon={FiLock} type="password" placeholder="Repita a Senha" />
                        <Input name="birthdate" icon={FiLock} type="date" placeholder="Data de Aniversario" />

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

