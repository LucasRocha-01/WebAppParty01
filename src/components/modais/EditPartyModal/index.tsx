import axios from 'axios';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
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

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

export function EditPartyModal({isOpen, onRequestClose}: NewPartyModalProps) {
    const {
        editParty, 
        parties, 
        slugView
    } = useParties();

    const party = parties.filter(party => party.party_slug === slugView);

    console.log(party); //esta retornado todas as info de party
    

    const [name, setName]                   = useState(`${party[0].name? party[0].name : ''}`); //Property 'name' does not exist on type 'Party[]' 
    const [description, setDescription]     = useState(`${party[0].description}`);
    const [type_event, setType_event]       = useState(`${party[0].type_event? party[0].type_event : '' }`);
    const [address, setAddress]             = useState(`${party[0].description? party[0].description : '' }`);
    const [zipcode, setZipcode]             = useState(`${party[0].zipcode? party[0].zipcode : '' }`);
    const [number, setNumber]               = useState(`${party[0].number? party[0].number : '' }`);
    const [district, setDistrict]           = useState(`${party[0].district? party[0].district : '' }`);
    const [tel, setTel]                     = useState(`${party[0].tel? party[0].tel : '' }`);
    const [ticket_link, setTicket_link]     = useState(`${party[0].ticket_link? party[0].ticket_link : '' }`);
    // const [banner_link, setBanner_link]     = useState(`${party[0].banner_link? party[0].banner_link : '' }`);
    const [banner_link2, setBanner_link2]     = useState({});
    const [tutorial_video_link, setTutorial_video_link] = useState(`${party[0].tutorial_video_link? party[0].tutorial_video_link : '' }`);
    const [point_of_reference, setPoint_of_reference] = useState(`${party[0].point_of_reference? party[0].point_of_reference : '' }`);
    const [theme, setTheme]                 = useState(`${party[0].theme? party[0].theme : '' }`);
    const [atractions, setAtractions]       = useState(`${party[0].atractions? party[0].atractions : '' }`);
    const [date_init, setDate_init]         = useState(`${party[0].date_init}`);
    const [date_close, setDate_close]       = useState(`${party[0].date_close}`);
    
    const [latitude, setLatitude]           = useState(`${party[0].latitude? party[0].latitude : ''}`);
    const [longitude, setLongitude]         = useState(`${party[0].longitude? party[0].longitude : ''}`);
    
    const [city, setCity] =     useState<string[]>([`${party[0].city? party[0].city : '0' }`]);
    const [state, setState] =   useState<string[]>([`${party[0].state? party[0].state : '0' }`]);
    const [selectedCity, setSelectedCity] = useState(`${party[0].city? party[0].city : '0' }`);
    const [selectedUf, setSelectedUf] =     useState(`${party[0].state? party[0].state : '0' }`);
    
    useEffect(() => {
        axios
          .get<IBGEUFResponse[]>(
            "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
          )
          .then((response) => {
            const ufInitials = response.data.map((state) => state.sigla);
            setState(ufInitials);
          });
      }, []);
    
      useEffect(() => {
        if (selectedUf === "0") return;
    
        axios
          .get<IBGECityResponse[]>(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
          )
          .then((response) => {
            const cityNames = response.data.map((city) => city.nome);
            setCity(cityNames);
          });
      }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedUf(event.target.value);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(event.target.value);
  }

    const handleChangeBanner = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {               
                setBanner_link2(e.target.files[0])
            }
        },[]
    );

    async function handleEditParty(event: FormEvent) {
        
        setState([selectedUf]);
        setCity([selectedCity]);

        event.preventDefault();

        await editParty({
   
            name,
            // party_slug,
            description,
            type_event,
            address,
            zipcode,
            number,
            district,
            city,
            latitude,
            longitude,
            state,
            tel,
            ticket_link,
            // banner_link,
            banner_link2,
            tutorial_video_link,
            point_of_reference,
            theme,
            atractions,
            date_init,
            date_close,
        })

        onRequestClose();
        
    }


    // function handleEditParty() {
    //     console.log('teste')

    //     const party_slug = slugView;

    //     api.post(`/owner/delete/${party_slug}`,{party_slug})
    //     // .then(() => {onRequestClose})
    //     .then((response) => {console.log(response);

    //     }, (error) => {
    //         console.log(error);
    //     });

    //     onRequestClose();
    // }

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
                onSubmit={handleEditParty}> 

            <h2>Editar Party</h2>
                
                <input 
                    placeholder="Nome da Festa"
                    value={name}
                    required={true}
                    onChange={event => setName(event.target.value)}
                    defaultValue="teste"
                    />

                <textarea placeholder="Descrição da Festa"
                    value={description}
                    required={true}
                    onChange={event => setDescription(event.target.value)}
                    className="description"
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

                    <select
                        name="uf"
                        id="uf"
                        value={selectedUf}
                        onChange={handleSelectUf}
                    >
                        <option value={selectedUf}>{selectedUf}</option>
                        {state.map((uf) => (
                            <option key={uf} value={uf}>
                            {uf}
                        </option>
                        ))}
                    </select>

                    <select
                        name="city"
                        id="city"
                        value={selectedCity}
                        onChange={handleSelectCity}
                    >
                        <option value={selectedCity}>{selectedCity}</option>
                        {city.map((citys) => (
                        <option key={citys} value={citys}>
                            {citys}
                        </option>
                        ))}
                    </select>
                    <input placeholder="Bairro"
                        value={district}
                        onChange={event => setDistrict(event.target.value)}
                    />

                    <input placeholder="Telefone"
                        value={tel}
                        onChange={event => setTel(event.target.value)}
                    />
                </div>

                <label>
                    <input placeholder="Longitude" 
                        value={longitude}
                        onChange={event => setLongitude(event.target.value)}
                    />

                    <input placeholder="Latitude" 
                        value={latitude}
                        onChange={event => setLatitude(event.target.value)}
                    />
                </label>

                <input placeholder="Link de venda de Tickets"
                    value={ticket_link}
                    onChange={event => setTicket_link(event.target.value)}
                />

                <label>
                    <input placeholder="Link do Banner"
                        type="file"
                        onChange={handleChangeBanner}
                    />
                </label>

                <input placeholder="Tutorial Video Link"
                    value={tutorial_video_link}
                    onChange={event => setTutorial_video_link(event.target.value)}
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
                > Início do Evento:
                    <input  
                        className="dataHour"
                        placeholder="Data de Término"
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
                        placeholder="Data de Início"
                        value={date_close}
                        type="datetime-local"
                        onChange={event => setDate_close(event.target.value)}
                    />
                </label>
                

                

                <button type="submit">
                    Editar
                </button>

            </Container>
        </Modal>
    )
}