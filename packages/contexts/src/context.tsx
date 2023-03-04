import React, { PropsWithChildren } from 'react';
import { UserContextProvider } from './user/index.context';

export const Context = ({ children }: PropsWithChildren) => {
	return (
		<>
		<UserContextProvider>
			{children}
		</UserContextProvider>
		</>
	);
};
