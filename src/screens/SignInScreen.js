import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const nav = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In</Text>
      <Button title="Go to Main" onPress={() => nav.navigate("Main")} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
