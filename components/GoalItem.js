import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback
      underlayColor={"red"}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.list}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "rgb(236,236,236)",
    color: "black",
  },
});

export default GoalItem;
