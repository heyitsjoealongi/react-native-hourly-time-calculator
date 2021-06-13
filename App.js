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
  const [timeThree, setTimeThree] = useState(0);
  const [timeFour, setTimeFour] = useState(0);
  const [timeTotal, setTimeTotal] = useState(
    ((timeThree - timeOne) * 100 + (timeFour - timeTwo)) / 100
  );

  function calculateTotal() {
    setTimeTotal(((timeThree - timeOne) * 100 + (timeFour - timeTwo)) / 100);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.totalGroup}>
          <Text style={styles.heading}>Calculate Your Hours</Text>
          <Text style={styles.inputTotal}>{timeTotal}</Text>
        </View>
        <Text style={styles.subHeading}>Time One</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.inputOne}
            keyboardType="numeric"
            placeholder="Hour"
            onChangeText={(text) => setTimeOne(+text)}
          />
          <TextInput
            style={styles.inputTwo}
            keyboardType="numeric"
            placeholder="Minutes"
            onChangeText={(text) => setTimeTwo(+text)}
          />
        </View>
        <Text style={styles.subHeading}>Time Two</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.inputOne}
            keyboardType="numeric"
            placeholder="Hour"
            onChangeText={(text) => setTimeThree(+text)}
          />
          <TextInput
            style={styles.inputTwo}
            keyboardType="numeric"
            placeholder="Minutes"
            onChangeText={(text) => setTimeFour(+text)}
          />
        </View>
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
  heading: {
    fontSize: 42,
    textAlign: "center",
    marginVertical: 16,
    color: "#333",
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
  subHeading: {
    fontSize: 21,
    textAlign: "center",
    marginVertical: 16,
    color: "#17baeb",
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
