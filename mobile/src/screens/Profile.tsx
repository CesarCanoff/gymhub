import { useState } from "react";
import { Center, ScrollView, VStack, Text, Skeleton, Heading } from "native-base";

import { UserPhoto } from "@components/UserPhoto";
import { ScreenHeader } from "@components/ScreenHeader";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
              :
              <UserPhoto
                size={PHOTO_SIZE}
                alt="User profile photo"
                source={{ uri: 'https://www.github.com/CesarCanoff.png' }}
              />
          }

          <TouchableOpacity>
            <Text color="yellow.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Change photo
            </Text>
          </TouchableOpacity>

          <Input
            placeholder="Name"
            defaultValue="Cesar Canoff"
            value="Cesar Canoff"
            bg="gray.500"
          />

          <Input
            placeholder="E-mail"
            isDisabled
            defaultValue="canoff.cesar@gmail.com"
            value="canoff.cesar@gmail.com"
            bg="gray.500"
          />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
            mt={12}
          >
            Change password
          </Heading>

          <Input
            placeholder="Current password"
            secureTextEntry
            bg="gray.500"
          />

          <Input
            placeholder="New password"
            secureTextEntry
            bg="gray.500"
          />

          <Input
            placeholder="Confirm new password"
            secureTextEntry
            bg="gray.500"
          />

          <Button title="Save" variant="solid" />
        </Center>
      </ScrollView>
    </VStack>
  );
}