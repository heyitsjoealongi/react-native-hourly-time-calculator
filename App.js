import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import TimeField from "react-simple-timefield";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.totalGroup}>
          <Text
            style={{
              fontSize: 42,
              textAlign: "center",
              padding: "24px",
              margin: "24px auto",
              color: "#333",
            }}
          >
            Calculate Your Hours
          </Text>
          <TextInput style={styles.inputTotal} disabled />
        </View>
        <View style={styles.inputGroup}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <View style={styles.buttonGroup}>
          <Button title="Calculate" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  calculator: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: "64px",
    margin: "64px",
    backgroundColor: "#fff",
    borderRadius: 30,
    border: "2px solid #666",
    maxWidth: 600,
  },
  totalGroup: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    maxHeight: 200,
    width: "100%",
  },
  inputGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    maxHeight: 100,
    width: "100%",
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "column",
    maxHeight: 100,
    width: "100%",
  },
  inputTotal: {
    border: "2px solid #666",
    fontSize: 42,
    textAlign: "center",
    width: "100%",
    padding: "8px",
    margin: "8px",
    color: "#333",
    borderRadius: 3,
  },
  input: {
    border: "2px solid #666",
    fontSize: 42,
    textAlign: "center",
    height: "48px",
    width: "50%",
    padding: "8px",
    margin: "8px",
    color: "#333",
    borderRadius: 3,
  },
});
