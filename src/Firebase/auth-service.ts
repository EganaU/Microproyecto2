import { auth,googleProvider } from './config';
import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { createUserProfile } from './users-service';
// import { createUserProfile } from './users-service';
//signInWithEmailAndPassword

export const signInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth,googleProvider);
        console.log(result);
    }catch(error){
        console.error(error);
    }
};
//, extradata: object
export const registerWithEmailAndPassword = async (email: string, password: string) => {
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Register email and password ", result);  
        // await createUserProfile(result.user.uid,{
        //     'correo': email,
        //     extradata
        // })
    }catch(error){
        console.error({ error });
    }
};

export const signInEmailPassword = async (email: string, password: string) => {
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log("Sign in with email and password", result);
    }catch(error){
        console.error({ error });
    }
};

export const logout = async () => {
    try{
        await signOut(auth);
    }catch(error){
        console.error({ error });
    }
};