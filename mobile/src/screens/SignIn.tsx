import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Center, Heading, Text, ScrollView } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const handleGoToSignUp = () => navigate('SignUp');

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        {/* <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando em uma academia"
          resizeMode='contain'
          position='absolute'
        /> */}

        <Center my={24}>
          <LogoSvg />
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Access your account
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <Input
            placeholder="Password"
            secureTextEntry
          />

          <Button title='Sign-in' variant="solid" />
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
