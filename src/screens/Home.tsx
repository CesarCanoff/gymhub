import { useState } from "react";
import { HStack, Text, VStack, FlatList, Heading, Center } from "native-base";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const [groupSelected, setGroupSelected] = useState('Arms');

  const [groups, setGroups] = useState(['Arms', 'Chest', 'Core', 'Legs', 'Shoulders']);
  const [exercises, setExercises] = useState(
    [
      'Push-up',
      'Mountain Climber',
      'Plank',
    ]);

    const handleGoToExerciseScreen = () => navigate("Exercise");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        horizontal
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercises
          </Heading>

          <Text color="gray.200" fontSize="md">{exercises.length}</Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          renderItem={({ item }) => (<ExerciseCard onPress={handleGoToExerciseScreen} name={item} />)}
          ListEmptyComponent={() => (
            <Center>
              <Text flex={1} color="white">No exercises</Text>
            </Center>)}
        />
      </VStack>
    </VStack>
  );
}