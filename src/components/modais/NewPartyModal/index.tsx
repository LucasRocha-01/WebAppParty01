import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import CloseImg from '../../../assets/images/close.svg';
import { useParties } from '../../../hooks/useParties';

import { Container } from './styles';
// import GlobalStyle from '../../styles/globalStyles'

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPartyModal({isOpen, onRequestClose}: NewPartyModalProps) {
    const {createParty} = useParties();

    // const [title, setTitle] = useState('');
    // const [date, setDate] = useState('');
    // const [description, setDescription] = useState('');
    // const [category, setCategory] = useState('');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [party_slug, setParty_slug] = useState('');
    const [type_event, setType_event] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [tel, setTel] = useState('');
    const [ticket_link, setTicket_link] = useState('');
    const [banner_link, setBanner_link] = useState('');
    const [tutorial_video_link, setTutorial_video_link] = useState('');
    const [point_of_reference, setPoint_of_reference] = useState('');
    const [presences, setPresences] = useState('');
    const [theme, setTheme] = useState('');
    const [atractions, setAtractions] = useState('');
    const [date_init, setDate_init] = useState('');
    const [date_close, setDate_close] = useState('');

    

    async function handleCreateNewParty(event: FormEvent) {
        event.preventDefault();

        await createParty({
   
            name,
            description,
            party_slug,
            type_event,
            address,
            zipcode,
            number,
            district,
            city,
            state,
            tel,
            ticket_link,
            banner_link,
            tutorial_video_link,
            point_of_reference,
            presences,
            theme,
            atractions,
            date_init,
            date_close,
        })

        setName('');
        setDescription('');
        setParty_slug('');
        setType_event('');
        setAddress('');
        setZipcode('');
        setNumber('');
        setDistrict('');
        setCity('');
        setState('');
        setTel('');
        setTicket_link('');
        setBanner_link('');
        setTutorial_video_link('');
        setPoint_of_reference('');
        setPresences('');
        setTheme('');
        setAtractions('');
        setDate_init('');
        setDate_close('');

        onRequestClose();
        
    }

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
                onSubmit={handleCreateNewParty}> 

            <h2>Cadastrar Party</h2>
                
                <input 
                    placeholder="Nome da Festa"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <textarea placeholder="Descrição da Festa"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    className="description"
                    
                />

                <input placeholder="Slug da Festa"
                    value={party_slug}
                    onChange={event => setParty_slug(event.target.value)}
                />

                <div className="col-6">
                    <input placeholder="Endereço"
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                    />

                    <input placeholder="CEP"
                        value={zipcode}
                        onChange={event => setZipcode(event.target.value)}
                        className="zipCode"
                    />

                    <input placeholder="Número"
                        value={number}
                        onChange={event => setNumber(event.target.value)}
                        className="numberCode"
                    />
                        
                        <input placeholder="Ponto de Referencia"
                            value={point_of_reference}
                            onChange={event => setPoint_of_reference(event.target.value)}
                        />

                        <label>
                            <p>Evento LGBTQIA+?</p>
                            <input
                                type="checkbox" 
                                value={type_event}
                                onChange={event => setType_event(event.target.value)}
                            />
                        </label>
                </div>

                <div className="col-6">
                    <input placeholder="Distrito"
                        value={district}
                        onChange={event => setDistrict(event.target.value)}
                    />

                    <input placeholder="Cidade"
                        value={city}
                        onChange={event => setCity(event.target.value)}
                    />

                    <input placeholder="Estado"
                        value={state}
                        onChange={event => setState(event.target.value)}
                    />

                    <input placeholder="Telefone"
                        value={tel}
                        onChange={event => setTel(event.target.value)}
                    />
                </div>

                

                <input placeholder="Link de venda de Tickets"
                    value={ticket_link}
                    onChange={event => setTicket_link(event.target.value)}
                />

                <input placeholder="Link do Banner"
                    value={banner_link}
                    onChange={event => setBanner_link(event.target.value)}
                />

                <input placeholder="Tutorial Video Link"
                    value={tutorial_video_link}
                    onChange={event => setTutorial_video_link(event.target.value)}
                />

                <input placeholder="Presenças"
                    value={presences}
                    onChange={event => setPresences(event.target.value)}
                />

                <input placeholder="Seu Tema"
                    value={theme}
                    onChange={event => setTheme(event.target.value)}
                />

                <input placeholder="Atrações"
                    value={atractions}
                    onChange={event => setAtractions(event.target.value)}
                />

                <label
                    className="dataHour"
                > Termino do Evento:
                    <input 
                        className="dataHour"
                        placeholder="Data de Início"
                        value={date_init}
                        type="datetime-local"
                        onChange={event => setDate_init(event.target.value)}
                    />
                </label>

                <label
                    className="dataHour"
                > Termino do Evento:
                    <input  
                        className="dataHour"
                        placeholder="Data de Término"
                        value={date_close}
                        type="datetime-local"
                        onChange={event => setDate_close(event.target.value)}
                    />
                </label>
                

                

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}