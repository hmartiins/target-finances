import { View, Text, Button } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function InProgress() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>In Progress: {id}</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
