import { useNavigation } from '@react-navigation/native';
import { VStack, Center, Heading, ScrollView } from 'native-base';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { yupResolver as YupResolver } from '@hookform/resolvers/yup'; // Add this import

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
  const { goBack } = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: YupResolver(signUpSchema),
  });

  const handleBackToSignIn = () => goBack();

  function handleSignUp({ name, email, password }: FormDataProps) {
    fetch('http://127.0.0.1:3333/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
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
function yupResolver(signUpSchema: yup.ObjectSchema<{ name: string; email: string; password: string; password_confirmation: string; }, yup.AnyObject, { name: undefined; email: undefined; password: undefined; password_confirmation: undefined; }, "">): import("react-hook-form").Resolver<FormDataProps, any> | undefined {
  throw new Error('Function not implemented.');
}

