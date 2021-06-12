import React, { useState } from "react";
import { Text, View } from "react-native";

import TimePicker from "react-native-simple-time-picker";

const FormikForm = () => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);

  const [selectedHoursTwo, setSelectedHoursTwo] = useState(0);
  const [selectedMinutesTwo, setSelectedMinutesTwo] = useState(0);

  return (
    <View style={styles.container}>
      <Text>
        Selected Time: {selectedHours}:{selectedMinutes}
      </Text>
      <TimePicker
        id="timeOne"
        name="timeOne"
        selectedHours={selectedHours}
        selectedMinutes={selectedMinutes}
        onChange={(hours, minutes) => {
          setSelectedHours(hours);
          setSelectedMinutes(minutes);
        }}
      />
      <Text>
        Selected Time: {selectedHoursTwo}:{selectedMinutesTwo}
      </Text>
      <TimePicker
        id="timeTwo"
        name="timeTwo"
        selectedHours={selectedHoursTwo}
        selectedMinutes={selectedMinutesTwo}
        onChange={(hours, minutes) => {
          setSelectedHours(hours);
          setSelectedMinutes(minutes);
        }}
      />
    </View>
  );
};

export default FormikForm;
