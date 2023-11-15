import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Center, Heading, ScrollView } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';


export function SignUp() {
  const { goBack } = useNavigation();

  const handleBackToSignIn = () => goBack();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando em uma academia"
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Create your account
          </Heading>

          <Input placeholder="Name" />

          <Input
            placeholder="E-mail"
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <Input placeholder="Password" secureTextEntry />

          <Button title='Create account' variant="solid" />
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
