import React, {createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext({
  user: {},
  setUser: () => true,
  login: () => true,
  register: () => true,
  logout: () => true,
  isDoctor: false,
  setIsDoctor: () => true,
});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isDoctor, setIsDoctor] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(res => {
                console.log({res});
                setUser(res);
              })
              .catch(error => console.log({error}));
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, name, forceSave) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(res => {
                console.log({res});
                setUser(res);
              })
              .catch(error => console.log({error}));
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        isDoctor,
        setIsDoctor,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
