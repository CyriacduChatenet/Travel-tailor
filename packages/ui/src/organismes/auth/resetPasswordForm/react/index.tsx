import { AuthService } from '@travel-tailor/services';
import { ResetPasswordDTO } from '@travel-tailor/types';
import { FC, FormEvent, useState } from 'react';

export const WebResetPasswordForm: FC = () => {
	const [credentials, setCredentials] = useState<ResetPasswordDTO>({
		password: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		return AuthService.resetPassword(credentials, 'token');
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			<label htmlFor="">
				<span>Password</span>
				<input type="password" placeholder="Password" name="password" onChange={handleChange} />
			</label>
			<input type="submit" value={'Signup'} />
		</form>
	);
};
