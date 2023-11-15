import { HStack, Heading, Image, VStack, Text, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Entypo } from '@expo/vector-icons';


type Props = TouchableOpacityProps & {
  name: string;
}

export function ExerciseCard({ name, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={() => {}} {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image  
          source={{ uri: 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg' }}
          alt='Exercise image'
          resizeMode='cover'
          w={16}
          h={16}
          mr={4}
          rounded="md"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            {name}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 series and 12 repetitions
          </Text>
        </VStack>
        
        <Icon
          as={Entypo}
          name='chevron-thin-right'
          color='gray.300'
        />
      </HStack>
    </TouchableOpacity>
  );
}