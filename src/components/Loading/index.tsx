import { ActivityIndicator, View } from "react-native";
import { colors } from "@/theme/colors";
import { styles } from "./styles";

export function Loading() {
  return (
    <ActivityIndicator style={styles.container} color={colors.black[500]} />
  );
}
