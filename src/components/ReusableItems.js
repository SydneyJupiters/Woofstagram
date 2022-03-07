import { Text, StyleSheet, Image } from "react-native";

export const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.url }} />
);

export const Heading = (props) => (
  <Text style={styles.heading}>{props.children}</Text>
);

export const Title = (props) => (
  <Text style={styles.title}>{props.children}</Text>
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    width: 64,
    height: 64,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Sofia Pro",
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#280D5F",
    textTransform: "uppercase",
    fontFamily: "Sofia Pro",
  },
});
