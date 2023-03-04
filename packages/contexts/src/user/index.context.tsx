import React, { createContext, PropsWithChildren, useContext } from 'react';

type Context = {};

const userContext = createContext<Context>({});

export const UserContextProvider = ({ children}: PropsWithChildren) => {
	return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};

export const useUser = () => useContext<Context>(userContext);