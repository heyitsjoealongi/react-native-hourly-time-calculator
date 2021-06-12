import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div className="my-6 text-gray-600 font-bold">
                  <h1 className="text-3xl text-center">Calculate Your Hours</h1>
                </div>
                <div className="max-w-md mx-auto">
                  <Form />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
