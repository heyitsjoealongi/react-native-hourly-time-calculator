import React from "react";
import { View } from "react-native";

import { useFormik } from "formik";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      timeOne: "",
      timeTwo: "",
    },

    onSubmit: () => {},
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-wrap font-sans justify-center content-center items-center"
    >
      <View className="w-full flex-auto">
        <View className="flex-1 m-auto text-center mt-4">
          <input
            onChange={formik.handleChange}
            value={formik.values.timeTotal}
            id="timeTotal"
            name="timeTotal"
            placeholder="0"
            type="text"
            disabled
            className="h-20 w-full p-3 m-auto subpixel-antialiased text-center text-5xl text-cyan-400 border-2 border-gray-100 rounded-lg"
          />
        </View>
      </View>
      <View className="flex-1 m-auto text-center my-10 mr-4">
        <label
          htmlFor="timeOne"
          className="h-10 w-full mb-8 subpixel-antialiased  text-center text-gray-700 font-semibold uppercase"
        >
          Time One
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.timeOne}
          id="timeOne"
          name="timeOne"
          placeholder="10:00 AM"
          type="time"
          required
          className="h-20 w-full p-3 m-auto text-center text-3xl text-cyan-400 border-2 border-gray-300 rounded-lg"
        />
      </View>
      <View className="flex-1 m-auto text-center my-10">
        <label
          htmlFor="timeTwo"
          className="h-10 w-full mb-8 subpixel-antialiased text-center text-gray-700 font-semibold uppercase"
        >
          Time Two
        </label>
        <input
          onChange={formik.handleChange}
          value={formik.values.timeTwo}
          id="timeTwo"
          name="timeTwo"
          placeholder="04:00 PM"
          type="time"
          required
          className="h-20 w-full p-3 m-auto text-center text-3xl text-cyan-400 border-2 border-gray-300 rounded-lg"
        />
      </View>
      <View className="w-full flex-auto">
        <button
          id="button"
          type="submit"
          className="w-full text-base p-3 m-auto subpixel-antialiased font-bold text-white text-center uppercase bg-gray-600 border-2 border-gray-300 rounded-lg shadow-2xl hover:bg-cyan-400 hover:border-white hover:shadow-none transition duration-500 ease-in-out"
        >
          Calculate
        </button>
      </View>
    </form>
  );
};

export default FormikForm;
