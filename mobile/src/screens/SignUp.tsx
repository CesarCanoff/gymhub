import { VStack, Center, Heading, ScrollView, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import * as yup from 'yup';

import { useForm, Controller } from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from '@services/api';
import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { Alert } from 'react-native';
import { AppError } from '@utils/AppError';

type FormDataProps = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

const signUpSchema = yup.object({
	name: yup.string().required('Enter a name.'),
	email: yup.string().required('Enter a e-mail').email('Invalid e-mail address.'),
	password: yup.string().required('Enter a password').min(6, 'Password must be at least 6 characters.'),
	password_confirmation: yup.string().required('Confirm the password').oneOf([yup.ref('password'), ''], 'Passwords must match.')
});

export function SignUp() {
	const toast = useToast();
	const { goBack } = useNavigation();

	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema),
	});

	const handleBackToSignIn = () => goBack();

	async function handleSignUp({ name, email, password }: FormDataProps) {
		await api
			.post("/users", { name, email, password })
			.then((response: AxiosResponse) => console.log(response.data))
			.catch((error) => {
				const isAppError = error instanceof AppError;
				const title = isAppError ? error.message : 'Error on sign up';

				toast.show({ title, placement: 'top', bgColor: 'red.500' })
			});
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<VStack flex={1} px={10}>
				<Center my={24}>
					<LogoSvg />
				</Center>

				<Center>
					<Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
						Create your account
					</Heading>

					<Controller
						control={control}
						name="name"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Name"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.name?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="E-mail"
								keyboardType="email-address"
								autoCapitalize="none"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.email?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Password"
								secureTextEntry
								onChangeText={onChange}
								value={value}
								errorMessage={errors.password?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="password_confirmation"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Confirm password"
								secureTextEntry
								onChangeText={onChange}
								value={value}
								onSubmitEditing={handleSubmit(handleSignUp)}
								returnKeyType="send"
								errorMessage={errors.password_confirmation?.message}
							/>
						)}
					/>

					<Button
						variant="solid"
						title="Create account"
						onPress={handleSubmit(handleSignUp)}
					/>
				</Center>

				<Button
					onPress={handleBackToSignIn}
					title='Back to sign-in'
					variant="outline"
					mt={24}
				/>
			</VStack>
		</ScrollView>
	);
}
