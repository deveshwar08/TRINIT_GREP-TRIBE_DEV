import { createContext, useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axios';
/* eslint-disable*/

export interface UserContext {
  loading: boolean;
  isLoggedIn: boolean;
  setIsLoggedIn: any;
}

export const UserContextProvider: React.FC<any> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getValues = useCallback(() => {
    setLoading(true);
    axiosInstance
      .get('/auth/loggedIn')
      .then((res: any) => {
        if (res.status === 200) {
          setLoading(false);
          setIsLoggedIn(true);
          console.log('Logged In');
        } else {
          console.log('looged in set to false');

          setIsLoggedIn(false);
        }
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
        setIsLoggedIn(false);
      });
  }, []);

  useEffect(() => {
    console.log('executed');

    getValues();
  }, [getValues]);

  return (
    <userContext.Provider
      value={{
        loading,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const userContext = createContext<any>(null);
