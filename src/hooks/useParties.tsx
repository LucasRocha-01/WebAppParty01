import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import api from '../services/api';

interface Party {
    id: number;
    title: string;
    date: string;
    description: string;
    category: string;
    createdAt: string;
}

type PartyInput = Omit<Party, 'id' | 'createdAt' >;

interface PartiesProviderProps {
    children: ReactNode;
}

interface PartiesContextData {
    parties: Party[];
    idParty: string;
    createParty: (party: PartyInput) => Promise<void>;
    setIdParty: (idParty: string) => void;
}

export const PartiesContext = createContext<PartiesContextData>(
    {} as PartiesContextData
    );

export function PartiesProvider({children}: PartiesProviderProps) {
    const [parties, setParties] = useState<Party[]>([]);
    const [idParty, setIdParty] = useState<string>('');

    useEffect(() => {
        api.get('parties')
        .then(response => setParties(response.data.parties))
    }, []);

    async function createParty(partyInput: PartyInput) {
        
        const response = await api.post('/parties', {
            ...partyInput, 
            createdAt: new Date(),
        })

        const { party } = response.data;

        setParties([...parties, party ]);
    }

    return (
        <PartiesContext.Provider value={{parties, createParty, idParty, setIdParty}}>
            {children}
        </PartiesContext.Provider>
    )    
}

export function useParties() {
    const context = useContext(PartiesContext);

    return (context)
}