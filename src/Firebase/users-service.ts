import { doc, setDoc } from 'firebase/firestore'
import { db} from './config'

export async function createUserProfile(userID: string, data: object) {
    return setDoc(doc(db, "users", userID), data);
}


