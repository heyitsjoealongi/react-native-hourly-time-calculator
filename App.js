import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  const [timeOne, setTimeOne] = useState(0);
  const [timeTwo, setTimeTwo] = useState(0);
  const [timeTotal, setTimeTotal] = useState(timeOne + timeTwo);

  function calculateTotal() {
    setTimeTotal((timeTwo * 24 - timeOne * 24) / 24 / 60);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.totalGroup}>
          <Text style={styles.heading}>Calculate Your Hours</Text>
          <Text style={styles.inputTotal}>{timeTotal}</Text>
        </View>
        <DismissKeyboard>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.inputOne}
              value={timeOne}
              keyboardType="numeric"
              onChangeText={(text) => setTimeOne(+text)}
            />
            <TextInput
              style={styles.inputTwo}
              value={timeTwo}
              keyboardType="numeric"
              onChangeText={(text) => setTimeTwo(+text)}
            />
          </View>
        </DismissKeyboard>
        <View style={styles.buttonGroup}>
          <Button title="Calculate" color="#4b5563" onPress={calculateTotal} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  calculator: {
    padding: 8,
    margin: 8,
  },
  totalGroup: {
    padding: 8,
    margin: 8,
  },
  inputTotal: {
    fontSize: 42,
    textAlign: "center",
    width: "100%",
    margin: "auto",
    padding: 8,
    marginVertical: 16,
    color: "#333",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 3,
  },
  buttonGroup: { marginVertical: 24, padding: 8 },
  heading: {
    fontSize: 42,
    textAlign: "center",
    marginVertical: 16,
    color: "#333",
  },
  inputGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    padding: 8,
  },
  inputOne: {
    flex: 1,
    fontSize: 24,
    textAlign: "center",
    width: "50%",
    padding: 8,
    marginTop: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    color: "#333",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 3,
  },
  inputTwo: {
    flex: 1,
    fontSize: 24,
    textAlign: "center",
    width: "50%",
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    color: "#333",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 3,
  },
});
