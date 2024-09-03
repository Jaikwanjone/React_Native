import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.banner}>
      <Text style={styles.link} onPress={() => router.navigate("/about")}>
        About us in Index
      </Text>
      <Text>Hello From Thailand</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    borderRadius: 10,
    margin: 20,
    backgroundColor: "#ddd",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  link: {
    color: "#58f",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
