import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import api from '../services/api';

interface Party {
    id: number,   
    name: string,
    description: string,
    owner_id: number,
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

type PartyInput = Omit<Party, 'id' | 'createdAt' | 'owner_id' >;

interface PartiesProviderProps {
    children: ReactNode;
}

interface PartiesContextData {
    parties: Party[];
    slugView: string,
    createParty: (party: PartyInput ) => Promise<void>;
    setSlugView: (slugView:string   ) => void;
    removeParty: ({ slugView }: PartiesRemove) => Promise<void>
}

interface PartiesRemove {
    slugView: string;
}

export const PartiesContext = createContext<PartiesContextData>(
    {} as PartiesContextData
    );

export function PartiesProvider({children}: PartiesProviderProps) {
    const [parties, setParties] = useState<Party[]>([]);
    const [slugView, setSlugView] = useState<string>('');

    
    useEffect(() => {
        api.get('/owner')
        .then(response => setParties(response.data.parties.data))
    }, []);
    
    
    async function createParty(partyInput: PartyInput) {
        
        const response = await api.post('/owner/party/add', {
            ...partyInput, 
            createdAt: new Date(),
        })
        
        const { party } = response.data;
        
        setParties([...parties, party ]);
    }
    
    async function removeParty({ slugView }: PartiesRemove) {
        
        await api.post(`/owner/delete/${slugView}`)
        
    }
    
    return (
        <PartiesContext.Provider value={{parties, createParty, removeParty, slugView, setSlugView}}>
            {children}
        </PartiesContext.Provider>
    )    
}

export function useParties() {
    const context = useContext(PartiesContext);

    return (context)
}