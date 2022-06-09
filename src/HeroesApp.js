import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/authContext';



export const HeroesApp = () => {
  return (
    <AuthContext.Provider value={{
      hola: 'mundo',
      name: 'hola soy Agus'
    }}>
        <AppRouter/>

    </AuthContext.Provider>
  )
}
