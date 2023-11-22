import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { jwtDecode } from "jwt-decode";
import { signInWithEmailAndPassword,signOut  } from 'firebase/auth';
import { auth } from '../../service/config/firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // public afAuth: AngularFireAuth // Inject Firebase auth service
  ) { }

  jwt_decode(token: string) {
    return jwtDecode(token);
  }

  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth,email, password)
  }

  SignOut() {
    return signOut(auth)
  }
}
