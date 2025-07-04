import { View, Text, Button } from "react-native";
import { router } from "expo-router";
import { fontFamily } from "@/theme/fontFamily";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: fontFamily.bold }}>Index</Text>

      <Button
        title="in progress"
        onPress={() => router.navigate("/in-progress/123")}
      />
      <Button title="target" onPress={() => router.navigate("/target")} />
      <Button
        title="transaction"
        onPress={() => router.navigate("/transaction/123")}
      />
    </View>
  );
}
