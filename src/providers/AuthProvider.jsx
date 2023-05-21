import  { createContext } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut, updateProfile
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const createUser = (email, password, name, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const NewUser = userCredential.user;
         updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser(NewUser);
          setLoading(false);
          console.log(NewUser);
        });
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };
  


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update the user object with the photo URL
        const updatedUser = {
          ...userCredential.user,
          photoURL: userCredential.user.photoURL || '',
        };
        setUser(updatedUser);
        setLoading(false);
        return updatedUser;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };


  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log('logged in user inside auth state observer', loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
        <Spinner className=" spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
        
      ) : (
        children // Remove curly braces
      )}
    </AuthContext.Provider>
  );
  
};
  

export default AuthProvider;
