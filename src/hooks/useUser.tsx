import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import api from '../services/api';

interface User {
    user: any
}

interface UsersProviderProps {
    children: ReactNode;
}

interface UsersContextData {
    users: any;
}

export const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
    );

export function UsersProvider({children}: UsersProviderProps) {
    const [users, setUsers] = useState<User>();

    useEffect(() => {
        api.get('/owner/profile')
        .then((response => setUsers(response.data)))
    },[])

    return (
        <UsersContext.Provider value={{users}}>
            {children}
        </UsersContext.Provider>
    )    
}

export function useUsers() {
    const context = useContext(UsersContext);

    return (context)
}