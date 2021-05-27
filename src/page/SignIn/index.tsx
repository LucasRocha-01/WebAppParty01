import React, {useRef} from "react";
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from "./styles";

import logoImg from "../../assets/images/logo.png";

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

                    {/* <span>Faça o seu login</span>
                    <form>
                        <label>
                            <FiMail className="icon" />
                            <input name="email" icon={FiMail} placeholder="E-mail" />
                        </label>
                        <label>
                            <FiLock className="icon" />
                            <input name="senha" icon={FiLock} placeholder="Senha" />
                        </label>
                    </form> */}

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça o seu login</h1>
                        
                        <Input name="email" icon={FiMail} placeholder="E-mail"/>
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                        <Button name="submit" type="submit" >
                            Entrar
                        </Button>

                    </Form>

                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}

