import { View, StyleSheet } from "react-native";
import { Avatar, Title } from "./ReusableItems";

export const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar url={props.avatar} />
    <View style={{ textAlign: "center" }}>
      <Title>{props.name}</Title>
    </View>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E7E3EB",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 25,
    padding: 11,
    width: 88,
    height: 112,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});
