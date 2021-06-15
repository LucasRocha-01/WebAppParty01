import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
}

interface SignInCredentials {
    email: string;
    password: string;
    remember: boolean;
}

interface SignUpCredentials {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    birthdate: string;
    remember: boolean;
}
interface AuthContextData {
    data: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    signUp(credentials: SignUpCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@AppParty:token');

        if (token) {
            return {token};
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async({email, password, remember}) =>{
        const response = await api.post('owner-guest/login',{
            email,
            password,
            remember,
        });

        const {token} = response.data;        

        localStorage.setItem('@AppParty:token', token);
        
        setData({token})
    },[])

    const signUp = useCallback(async({ name, password, password_confirmation, birthdate, remember}) => {
        const response = await api.post('owner-guest/signup', {
            name,
            password,
            password_confirmation,
            birthdate,
            remember,
        });

        const {token} = response.data;

        localStorage.setItem('@AppParty:token', token);

        setData({token})

        
    },[])

    const signOut = useCallback(() =>{
        localStorage.removeItem('@AppParty:token')

        setData({} as AuthState)
    },[])

    return (
        <AuthContext.Provider value={{ data: data, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    );
} ;

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth deveria ser usado junto a AuthProvider')
    }

    return context;
}