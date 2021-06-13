import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

export default function App() {
  const [timeOne, onChangeTimeOne] = React.useState(null);
  const [timeTwo, onChangeTimeTwo] = React.useState(null);
  const [timeTotal, onChangeTimeTotal] = React.useState(null);

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
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
        <DismissKeyboard>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeTimeOne}
              value={timeOne}
              placeholder="00:00"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTimeTwo}
              value={timeTwo}
              placeholder="00:00"
              keyboardType="numeric"
            />
          </View>
        </DismissKeyboard>
        <View style={styles.buttonGroup}>
          <Button title="Calculate" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  calculator: {
    padding: "64px",
    margin: "64px",
  },
  totalGroup: {
    padding: "8px",
    margin: "8px",
  },
  inputGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
  },
  buttonGroup: { marginVertical: "24px", padding: "8px" },
  heading: {
    fontSize: 42,
    textAlign: "center",
    marginVertical: "24px",
    color: "#333",
  },
  inputTotal: {
    fontSize: 42,
    textAlign: "center",
    width: "100%",
    padding: "8px",
    marginVertical: "24px",
    color: "#333",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 3,
  },
  input: {
    fontSize: 24,
    textAlign: "center",
    width: "50%",
    padding: "8px",
    margin: "8px",
    color: "#333",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 3,
  },
});
