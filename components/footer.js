import React from "react";

import { View, Image } from "react-native";

import tailwind from "tailwind-rn";

function Footer() {
  return (
    <>
      <View
        style={tailwind(
          "w-full flex flex-wrap font-sans justify-center content-center items-center"
        )}
      >
        <View style={tailwind("w-full flex-auto")}>
          <View style={tailwind("flex-1 m-auto text-center mt-10")}>
            <a target="_blank" href="https://collectedview.io/">
              <Image
                source={{
                  uri: "../collectedview-software-studio.png",
                }}
              />
            </a>
          </View>
        </View>
      </View>
    </>
  );
}

export default Footer;
