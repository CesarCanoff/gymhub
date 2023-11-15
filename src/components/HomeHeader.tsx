import { HStack, Heading, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from './UserPhoto';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://www.github.com/CesarCanoff.png' }}
        alt='User profile image'
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Hello
        </Text>

        <Heading color="gray.100" fontSize="md">
          César
        </Heading>
      </VStack>

      <TouchableOpacity onPress={() => {}}>
        <Icon
          size={7}
          name="logout"
          color="gray.200"
          as={MaterialIcons}
        />
      </TouchableOpacity>
    </HStack>
  );
}