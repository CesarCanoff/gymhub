import { useState } from "react";
import { Heading, SectionList, VStack, Text } from "native-base";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
  const [exercisesLog, setExercisesLog] = useState([
    {
      title: "26/08/2023",
      data: ["Puxada Frontal", "Prancha"]
    },

    {
      title: "22/07/2023",
      data: ["Prancha"]
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Exercises History" />

      <SectionList
        px={8}
        sections={exercisesLog}
        scrollEnabled
        contentContainerStyle={exercisesLog.length === 0 && { flex: 1, justifyContent: 'center' }}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center" fontSize="md">
            There's no exercise history, {"\n"} we go workout?
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
      />

    </VStack>
  );
}