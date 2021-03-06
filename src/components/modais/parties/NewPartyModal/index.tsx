import { FormEvent, useState, ChangeEvent, useCallback, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {v4 as uuidv4} from 'uuid'
// import Geocode from "react-geocode";

import CloseImg from '../../../../assets/images/close.svg';
import { useParties } from '../../../../hooks/useParties';


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
    const [tel, setTel] = useState('');
    const [ticket_link, setTicket_link] = useState('');
    // const [banner_link, setBanner_link] = useState('');
    const [banner_link2, setBanner_link2] = useState({});
    const [tutorial_video_link, setTutorial_video_link] = useState('');
    const [point_of_reference, setPoint_of_reference] = useState('');
    const [theme, setTheme] = useState('');
    const [atractions, setAtractions] = useState('');
    const [date_init, setDate_init] = useState('');
    const [date_close, setDate_close] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    
    const [city, setCity] = useState<string[]>([]);
    const [state, setState] = useState<string[]>([]);
    const [selectedUf, setSelectedUf] = useState("0");
    const [selectedCity, setSelectedCity] = useState("0");

    const todayDate = new Date();
    const todayString = todayDate.toString()
    
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

    // Geocode.setApiKey("AIzaSyA5nmky0ZVIVUbehhxByaopCnCMOzJ9Bf0");
    // Geocode.setLanguage("pt-BR");
    // Geocode.setRegion("br");
    // Geocode.enableDebug();

    // Geocode.fromAddress("Eiffel Tower").then(
    //     (response) => {
    //     const { lat, lng } = response.results[0].geometry.location;
    //     console.log(lat, lng);
    //     },
    //     (error) => {
    //     console.error(error);
    //     }
    // );

    // function handleLat(event: ChangeEvent<HTMLInputElement>) {
    //     const lat = event.target.value
        
    //     setLatitude(parseFloat(lat));
    //   }

    // function handleLong(event: ChangeEvent<HTMLInputElement>) {
    //     const long = event.target.value
        
    //     setLongitude(parseFloat(long));
    //   }

    // function handleLGBT(event: ChangeEvent<HTMLInputElement>) {
    //     const lgbt = event.target.value = false ? "Livre" : "LGBTQIA+"
        
    //     setType_event(lgbt);
    //   }

    const handleChangeBanner = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {               
                setBanner_link2(e.target.files[0])
            }
        },[]
    );

    async function handleCreateNewParty(event: FormEvent, ) {

        // latitude.parseFloat()
        // longitude.parseFloat() 

        setState([selectedUf]);
        setCity([selectedCity]);

        event.preventDefault(); 

        const uuid = uuidv4()
        uuid.toString()
        setParty_slug(uuid)

        console.log(latitude);
        console.log(longitude);


        await createParty({
   
            name,
            description,
            party_slug,
            type_event,
            address,
            zipcode,
            number,
            district,
            latitude,
            longitude,
            city,
            state,
            tel,
            ticket_link,
            tutorial_video_link,
            point_of_reference,
            theme,
            atractions,
            date_init,
            date_close,

            banner_link2,
        })

        setName('');
        setDescription('');
        setParty_slug('');
        setType_event('');
        setAddress('');
        setZipcode('');
        setNumber('');
        setDistrict('');
        setLatitude('');
        setLongitude('');
        setCity([]);
        setState([]);
        setTel('');
        setTicket_link('');
        // setBanner_link('');
        setBanner_link2('');
        setTutorial_video_link('');
        setPoint_of_reference('');
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
                    required={true}
                    onChange={event => setName(event.target.value)}
                    />

                <textarea placeholder="Descri????o da Festa"
                    value={description}
                    required={true}
                    onChange={event => setDescription(event.target.value)}
                    className="description"
                    
                    />

                {/* <input placeholder="Slug da Festa"
                    value={party_slug}
                    required={true}
                    onChange={event => setParty_slug(event.target.value)}
                /> */}

                <div className="col-6">
                    <input placeholder="Endere??o"
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                    />

                    <input placeholder="N??mero"
                        value={number}
                        onChange={event => setNumber(event.target.value)}
                        className="numberCode"
                        type="number"
                    />

                    <input placeholder="CEP"
                        value={zipcode}
                        onChange={event => setZipcode(event.target.value)}
                        className="zipCode"
                        type="number"
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
                            onChange={
                                event => setType_event(event.target.value)
                                // handleLGBT
                            }
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
                        <option value="0">Selecione uma UF</option>
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
                        <option value="0">Selecione uma Cidade</option>
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
                        type="number"
                    />
                </div>

                <label className="latlonglabel"> Adicione a sua Latitude e Longitude </label>
                <span className="latlongSpan">{'Descubra sua Latitude e Longitude em:   .'} {<a href="https://satellite-map.gosur.com/pt/latitude-longitude-coordenadas-GPS.html" target="_blank" rel="noreferrer">Descubra aqui</a>} </span>
                
                <div className="row">
                <label className="dataHour">
                    <input 
                        placeholder="Latitude" 
                        type="text"
                        value={latitude}
                        onChange={event => setLatitude(event.target.value)}
                    />
                </label>

                <label className="dataHour">
                    <input 
                        placeholder="Longitude" 
                        type="text"
                        value={longitude}
                        onChange={event => setLongitude(event.target.value)}
                    />
                </label>

                </div>

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

                {/* <input placeholder="Presen??as"
                    value={presences}
                    onChange={event => setPresences(event.target.value)}
                /> */}

                <input placeholder="Seu Tema"
                    value={theme}
                    onChange={event => setTheme(event.target.value)}
                />

                <input placeholder="Atra????es"
                    value={atractions}
                    onChange={event => setAtractions(event.target.value)}
                />

                <label
                        className="dataHour"
                    > In??cio do Evento:
                        <input 
                            className="dataHour"
                            placeholder="Data de In??cio"
                            value={date_init}
                            type="datetime-local"
                            required={true}
                            min={todayString}
                            onChange={event => setDate_init(event.target.value)}
                        />
                </label>

                <label
                        className="dataHour"
                    > Termino do Evento:
                        <input  
                            className="dataHour"
                            placeholder="Data de T??rmino"
                            value={date_close}
                            type="datetime-local"
                            required={true}
                            min={date_init}
                            onChange={event => setDate_close(event.target.value)}
                        />
                </label>
                

                

                <button id="confirmCad" type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}