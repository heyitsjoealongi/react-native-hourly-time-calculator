import React from "react";
import { View, Text } from "react-native";

import "./styles/style.css";
import tailwind from "tailwind-rn";

import Form from "./components/form";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <View
        style={tailwind(
          "min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
        )}
      >
        <View style={tailwind("relative py-3 sm:max-w-xl sm:mx-auto")}>
          <View
            style={tailwind(
              "absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
            )}
          ></View>
          <View
            style={tailwind(
              "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
            )}
          >
            <View style={tailwind("max-w-md mx-auto")}>
              <View style={tailwind("my-6 text-gray-600 font-bold")}>
                <Text>
                  <h1 style={tailwind("text-3xl text-center")}>
                    Calculate Your Hours
                  </h1>
                </Text>
              </View>
              <View style={tailwind("max-w-md mx-auto")}>
                <Form />
                <Footer />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
