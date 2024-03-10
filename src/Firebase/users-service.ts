import { doc, setDoc } from 'firebase/firestore'
import { db} from './config'

export async function createUserProfile(email: string, data: object) {
    return setDoc(doc(db, "users", email), data);
}


