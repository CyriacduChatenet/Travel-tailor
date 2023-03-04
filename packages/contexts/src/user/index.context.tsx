import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

type Context = {
	user: {};
	setUser: Dispatch<SetStateAction<{}>>
};

const userContext = createContext<Context>({
	user: {},
	setUser: () => {},
});

export const UserContextProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState({});

	return <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>;
};

export const useUser = () => useContext<Context>(userContext);
