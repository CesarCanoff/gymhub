import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Center, Heading, ScrollView, useToast } from "native-base";

import LogoSvg from '@assets/logo.svg';

import { useAuth } from '@hooks/useAuth';
import { AppError } from '@utils/AppError';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useState } from 'react';

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  // const { singIn } = useAuth();
  const toast = useToast();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleGoToSignUp = () => navigate('SignUp');

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await singIn(email, password);

    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      })
      setIsLoading(false);
    }
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
            Access your account
          </Heading>

          <Controller
            control={control}
            name="email"
            rules={{ required: 'Enter e-mail' }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: 'Informe a senha' }}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button
            title="Sign-in"
            variant="solid"
            onPress={handleSubmit(handleSignIn)}
            isLoading={isLoading}
          />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Don't have access?
          </Text>
          <Button
            onPress={handleGoToSignUp}
            title='Create an account'
            variant="outline"
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
