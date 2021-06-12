import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Form from "./components/form";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Calculate Your Hours</Text>
          <Form />
        </View>
      </SafeAreaView>
    </>
  );
}
