import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import api from '../services/api';

interface Party {
    id: number,   
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
    date_init: number,
    date_close: number,
}

type PartyInput = Omit<Party, 'id' | 'createdAt' >;

interface PartiesProviderProps {
    children: ReactNode;
}

interface PartiesContextData {
    parties: Party[];
    createParty: (party: PartyInput) => Promise<void>;
}

export const PartiesContext = createContext<PartiesContextData>(
    {} as PartiesContextData
    );

export function PartiesProvider({children}: PartiesProviderProps) {
    const [parties, setParties] = useState<Party[]>([]);

    useEffect(() => {
        api.get('/owner')
        .then(response => setParties(response.data.parties))
    }, []);

    async function createParty(partyInput: PartyInput) {
        
        const response = await api.post('/owner/party/add', {
            ...partyInput, 
            createdAt: new Date(),
        })

        const { party } = response.data;

        setParties([...parties, party ]);
    }

    return (
        <PartiesContext.Provider value={{parties, createParty}}>
            {children}
        </PartiesContext.Provider>
    )    
}

export function useParties() {
    const context = useContext(PartiesContext);

    return (context)
}