import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import TimeField from "react-simple-timefield";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timeTotal: "00:00",
      timeTotalSeconds: "00:00:00",
      timeTotalSecondsCustomColon: "01-01-01",
      timeOne: "00:00",
      timeOneSeconds: "00:00:00",
      timeOneSecondsCustomColon: "01-01-01",
      timeTwo: "00:00",
      timeTwoSeconds: "00:00:00",
      timeTwoSecondsCustomColon: "01-01-01",
    };
    this.onTotalChange = this.onTotalChange.bind(this);
    this.onTimeOneChange = this.onTimeOneChange.bind(this);
    this.onTimeTwoChange = this.onTimeTwoChange.bind(this);
  }

  onTotalChange(event, value) {
    const newTimeTotal = value.replace(/-/g, ":");
    const timeTotal = newTimeTotal.substr(0, 5);
    const timeTotalSeconds = newTimeTotal.padEnd(
      8,
      this.state.timeTotalSeconds.substr(5, 3)
    );
    const timeTotalSecondsCustomColon = timeTotalSeconds.replace(/:/g, "-");

    this.setState({ timeTotal, timeTotalSeconds, timeTotalSecondsCustomColon });
  }

  onTimeOneChange(event, value) {
    const newTimeOne = value.replace(/-/g, ":");
    const timeOne = newTimeOne.substr(0, 5);
    const timeOneSeconds = newTimeOne.padEnd(
      8,
      this.state.timeOneSeconds.substr(5, 3)
    );
    const timeOneSecondsCustomColon = timeOneSeconds.replace(/:/g, "-");

    this.setState({ timeOne, timeOneSeconds, timeOneSecondsCustomColon });
  }

  onTimeTwoChange(event, value) {
    const newTimeTwo = value.replace(/-/g, ":");
    const timeTwo = newTimeTwo.substr(0, 5);
    const timeTwoSeconds = newTimeTwo.padEnd(
      8,
      this.state.timeTwoSeconds.substr(5, 3)
    );
    const timeTwoSecondsCustomColon = timeTwoSeconds.replace(/:/g, "-");

    this.setState({ timeTwo, timeTwoSeconds, timeTwoSecondsCustomColon });
  }

  render() {
    const { timeTotal, timeTotalSeconds, timeTotalSecondsCustomColon } =
      this.state;
    const { timeOne, timeOneSeconds, timeOneSecondsCustomColon } = this.state;
    const { timeTwo, timeTwoSeconds, timeTwoSecondsCustomColon } = this.state;

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
            <TextInput
              value={timeTotal}
              onChange={this.onTimeTotalChange}
              style={{
                border: "2px solid #666",
                fontSize: 42,
                textAlign: "center",
                width: "100%",
                padding: "8px",
                margin: "0 0 8px 0",
                color: "#333",
                borderRadius: 3,
              }}
              disabled
            />
          </View>
          <View style={styles.inputGroup}>
            <TimeField
              value={timeOne}
              onChange={this.onTimeOneChange}
              style={{
                border: "2px solid #666",
                fontSize: 42,
                textAlign: "center",
                height: "48px",
                width: "50%",
                padding: "8px",
                margin: "8px 0 8px 0",
                color: "#333",
                borderRadius: 3,
              }}
            />
            <TimeField
              value={timeTwo}
              onChange={this.onTimeTwoChange}
              style={{
                border: "2px solid #666",
                fontSize: 42,
                textAlign: "center",
                height: "48px",
                width: "50%",
                padding: "8px",
                margin: "8px 0 8px 8px",
                color: "#333",
                borderRadius: 3,
              }}
            />
          </View>
          <View style={styles.buttonGroup}>
            <Button title="Calculate" />
          </View>
        </View>
      </View>
    );
  }
}
export default App;

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
});
