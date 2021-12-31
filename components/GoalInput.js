import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [textEntered, setTextEntered] = useState("");

  const goalInputHandler = (textEntered) => {
    setTextEntered(textEntered);
  };

  const addGoalHandler = () => {
    props.onAddGoal(textEntered);
    setTextEntered("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={textEntered}
        ></TextInput>
        <View style={styles.groupBtn}>
          <View style={styles.button}>
            <Button title="cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  groupBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
