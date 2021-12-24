import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{flexDirection : "row" , justifyContent :"space-between" , alignItems :"center"}}>
        <TextInput
          placeholder="Course Goal"
          style={{width : '80%', borderColor: "black", borderWidth: 1, padding: 5  }}
        ></TextInput>
        <Button title="Add" />
      </View>
      <View></View>
    </View>
  );
}
