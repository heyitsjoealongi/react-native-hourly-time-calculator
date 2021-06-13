import React from "react";
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
  const [timeOne, onChangeTimeOne] = React.useState(null);
  const [timeTwo, onChangeTimeTwo] = React.useState(null);
  const [timeTotal, onChangeTimeTotal] = React.useState(null);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <View style={styles.calculator}>
          <View style={styles.totalGroup}>
            <Text style={styles.heading}>Calculate Your Hours</Text>
            <TextInput
              style={styles.inputTotal}
              onChangeText={onChangeTimeTotal}
              value={timeTotal}
              placeholder="00:00"
              keyboardType="numeric"
              disabled
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.inputTwo}
              onChangeText={onChangeTimeOne}
              value={timeOne}
              placeholder="00:00"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputOne}
              onChangeText={onChangeTimeTwo}
              value={timeTwo}
              placeholder="00:00"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.buttonGroup}>
            <Button title="Calculate" color="#4b5563" />
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
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
