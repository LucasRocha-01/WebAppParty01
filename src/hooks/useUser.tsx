import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import api from '../services/api';

interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    avatar: any,
    bio: string,
    birthdate: string,
    presences: string,
    created_at: string,
    updated_at: string
}

type UserEditInput = Pick<User, 'name' | 'bio' | 'avatar' >
// type AvatarInput = Pick<User, 'avatar' >

interface UsersProviderProps {
    children: ReactNode;
}

interface UsersContextData {
    users?:{ user: User};
    editUser: (userEditInput: UserEditInput) => Promise<void>;
    // uploadAvatar: (avatarInput: AvatarInput) => Promise<void>
}

export const UsersContext = createContext<UsersContextData>(
    {} as UsersContextData
    );

export function UsersProvider({children}: UsersProviderProps) {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.get('/owner/profile')
        .then((response => setUsers(response.data)))
    },[])

    async function editUser(userEditInput: UserEditInput) {
        
        const response = await api.post(`owner/profile/edit`, {
            ...userEditInput, 
        })
        
        if (response.status === 200) {

            const {data} = await api.get(`/owner/profile`);
            
            setUsers(data.user.data)

            uploadAvatar(userEditInput.avatar)
        }        
    }

    async function uploadAvatar(userEditInput: UserEditInput) {
        const formData = new FormData();
        formData.append(
            "avatar",
            userEditInput.avatar
        )
        await api.post(`/owner/profile/avatar`, formData)

        const {data} = await api.get('/owner/profile')
       
        setUsers(data.user.data)
    }

    return (
        <UsersContext.Provider value={{users, editUser}}>
            {children}
        </UsersContext.Provider>
    )    
}

export function useUsers() {
    const context = useContext(UsersContext);

    return (context)
}