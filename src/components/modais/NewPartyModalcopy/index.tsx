import { useRef, useCallback } from 'react';
import { GiPartyPopper } from 'react-icons/gi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import Modal from 'react-modal';
import * as Yup from 'yup';

import CloseImg from '../../../assets/images/close.svg';
import { useToast } from '../../../hooks/toast';
import { useParties } from '../../../hooks/useParties';
import getValidationErrors from '../../../utils/getValidationErrors';
import Input from '../../Input';

import { Container } from './styles';
import Button from '../../Button';
// import GlobalStyle from '../../styles/globalStyles'

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface CreateNewParty {
    name: string,
    description: string,
    party_slug: string,
    type_event: string,
    address: string,
    zipcode: string,
    number: string,
    district: string,
    city: string,
    state: string,
    tel: string,
    ticket_link: string,
    banner_link: string,
    tutorial_video_link: string,
    point_of_reference: string,
    presences: string,
    theme: string,
    atractions: string,
    date_init: string,
    date_close: string,
}

export function NewPartyModalcopy({isOpen, onRequestClose}: NewPartyModalProps) {

    const formRef = useRef<FormHandles>(null);
  
    const {addToast} = useToast();
    const {createParty} = useParties();


    const handleSubmit = useCallback(
        async (data: CreateNewParty) => { 

        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                description: Yup.string().required('descrição obrigatório'),
                party_slug: Yup.string().min(6, 'No mínimo 6 dígitos'),
                // // passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
                // // birthdate: Yup.number().required('Data de Nascimento obrigatório'),
            });


            await schema.validate(data, { abortEarly: false, });

            await createParty({
                // name: data.name,
                // email: data.email,
                // password: data.password,
                // password_confirmation: data.password,
                // birthdate: "1996/03/02",
                // remember: true,

  
                name: data.name,
                description: data.description,
                party_slug: data.party_slug,
                type_event: data.type_event,
                address: data.address,
                zipcode: data.zipcode,
                number: data.number,
                district: data.district,
                city: data.city,
                state: data.state,
                tel: data.tel,
                ticket_link: data.ticket_link,
                banner_link: data.banner_link,
                tutorial_video_link: data.tutorial_video_link,
                point_of_reference: data.point_of_reference,
                presences: data.presences,
                theme: data.theme,
                atractions: data.atractions,
                date_init: data.date_init,
                date_close: data.date_close,
            });

            console.log(data);

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                console.log(data);
                return;
            }

            addToast({
                type: 'error',
                title: 'erro na autenticação',
                description: 'ocorreu um erro ao fazer login check as credenciais',
            });
             
        }
    },[createParty, addToast]);

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName ="react-modal-overlay"
            className="react-modal-content"
            >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"> 

                <img src={CloseImg} alt="Fechar modal" />
            </button>

            <Container 
                // onSubmit={handleCreateNewParty}
                > 

            <Form ref={formRef} onSubmit={handleSubmit} >
                <h2>Cadastrar Party</h2>
                
                <Input name="name" icon={GiPartyPopper} placeholder="Nome da Festa" />

                <textarea placeholder="Descrição da Festa"
                    name="description" className="description"
                    
                />

                <Input placeholder="Slug da Festa"
                    name="party_slug"
                    // onChange={event => setParty_slug(event.target.value)}
                />

                <div className="col-6">
                    <Input placeholder="Endereço"
                        name="address"
                        // onChange={event => setAddress(event.target.value)}
                    />

                    <Input placeholder="CEP"
                        name="zipcode"
                        // onChange={event => setZipcode(event.target.value)}
                        className="zipCode"
                    />

                    <Input placeholder="Número"
                        name="number"
                        // onChange={event => setNumber(event.target.value)}
                        className="numberCode"
                    />
                        
                    <Input placeholder="Ponto de Referencia"
                        name="point_of_reference"
                        // onChange={event => setPoint_of_reference(event.target.value)}
                    />

                    <label>
                        <p>Evento LGBTQIA+?</p>
                        <Input
                            type="checkbox" 
                            name="type_event"
                            // onChange={event => setType_event(event.target.value)}
                        />
                    </label>
                </div>

                <div className="col-6">
                    <Input placeholder="Distrito"
                        name="district"
                        // onChange={event => setDistrict(event.target.value)}
                    />

                    <Input placeholder="Cidade"
                        name="city"
                        // onChange={event => setCity(event.target.value)}
                    />

                    <Input placeholder="Estado"
                        name="state"
                        // onChange={event => setState(event.target.value)}
                    />

                    <Input placeholder="Telefone"
                        name="tel"
                        // onChange={event => setTel(event.target.value)}
                    />
                </div>

                

                <Input placeholder="Link de venda de Tickets"
                    name="ticket_link"
                    // onChange={event => setTicket_link(event.target.value)}
                />

                <Input placeholder="Link do Banner"
                    name="banner_link"
                    // onChange={event => setBanner_link(event.target.value)}
                />

                <Input placeholder="Tutorial Video Link"
                    name="tutorial_video_link"
                    // onChange={event => setTutorial_video_link(event.target.value)}
                />

                <Input placeholder="Presenças"
                    name="presences"
                    // onChange={event => setPresences(event.target.value)}
                />

                <Input placeholder="Seu Tema"
                    name="theme"
                    // onChange={event => setTheme(event.target.value)}
                />

                <Input placeholder="Atrações"
                    name="atractions"
                    // onChange={event => setAtractions(event.target.value)}
                />

                <label
                    className="dataHour"
                > Termino do Evento:
                    <Input 
                        className="dataHour"
                        placeholder="Data de Início"
                        name="date_init"
                        type="datetime-local"
                        // onChange={event => setDate_init(event.target.value)}
                    />
                </label>

                <label
                    className="dataHour"
                > Termino do Evento:
                    <Input  
                        className="dataHour"
                        placeholder="Data de Término"
                        name="date_close"
                        type="datetime-local"
                        // onChange={event => setDate_close(event.target.value)}
                    />
                </label>

                <Button name="submit" type="submit">
                    Cadastrar
                </Button>
                
            </Form>   


            </Container>
        </Modal>
    )
}