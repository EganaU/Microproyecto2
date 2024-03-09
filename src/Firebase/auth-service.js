import { auth,googleProvider } from './config';
import { signInWithPopup } from 'firebase/auth';

export const signInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth,googleProvider);
        console.log(result);
    }catch(error){
        console.error(error);
    }
};

export const registerEmailPassword = async () => {};

export const signInEmailPassword = async () => {};

export const logout = async () => {};