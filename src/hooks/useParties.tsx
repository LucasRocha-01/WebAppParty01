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

type PartyRemove = Pick<Party, 'party_slug'>;
// type BannerParty = Pick<Party, 'banner_link'>;
type PartyInput = Omit<Party, 'id' | 'createdAt' | 'owner_id' | 'banner_link' >;
type PartyEditInput = Omit<Party, 'id' | 'createdAt' | 'owner_id' | 'party_slug' >;

interface PartiesProviderProps {
    children: ReactNode;
}

interface PartiesContextData {
    parties: Party[];
    slugView: string,
    createParty: (party: PartyInput ) => Promise<void>;
    setSlugView: (slugView:string   ) => void;
    editParty: (party: PartyEditInput) => Promise<void>;
    removeParty: any;
}


export const PartiesContext = createContext<PartiesContextData>(
    {} as PartiesContextData
    );

export function PartiesProvider({children}: PartiesProviderProps) {
    const [parties, setParties] = useState<Party[]>([]);
    const [slugView, setSlugView] = useState<string>('');
    
    useEffect(() => {
        async function getToken() {
            const {data} = await api.get('/owner');
            setParties(data.parties.data)
        }

        getToken();
    }, []);
    
    
    async function createParty(partyInput: PartyInput) {
        
        const response = await api.post('/owner/party/add', {
            ...partyInput, 
            createdAt: new Date(),
        })

        
        if (response.status === 200) {
            const {data} = await api.get('/owner');
            
            setParties(data.parties.data)
        }        
    }
    async function removeParty(partyRemove: PartyRemove) {
        
        const party_slug = slugView;
        const response = await api.post(`/owner/delete/${party_slug}`,{party_slug})
        
        if (response.status === 200) {
            const {data} = await api.get('/owner');
            
            setParties(data.parties.data)
        }       
    }
    async function editParty(partyEditInput: PartyEditInput) {
        
        const response = 
        await api.post(`/owner/edit/${slugView}`, {
            ...partyEditInput, 
        })
        
        if (response.status === 200) {
            const {data} = await api.get(`/owner`);
            
            setParties(data.parties.data)
        }        
    }





    return (
        <PartiesContext.Provider value={{parties, editParty, removeParty, createParty, slugView, setSlugView}}>
            {children}
        </PartiesContext.Provider>
    )    
}

export function useParties() {
    const context = useContext(PartiesContext);

    return (context)
}