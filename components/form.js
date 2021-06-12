import React from "react";
import $ from "jquery";

import TimeForm from "./time-form";

class Form extends React.Component {
  componentDidMount() {
    $("#button").on("click", function () {
      var timeOneValue = $("#timeOne").val(),
        timeTwoValue = $("#timeTwo").val(),
        hours = timeTwoValue.split(":")[0] - timeOneValue.split(":")[0],
        minutes = timeTwoValue.split(":")[1] - timeOneValue.split(":")[1];

      minutes = minutes.toString().length < 2 ? "0" + minutes : minutes;
      if (minutes < 0) {
        hours--;
        minutes = 60 + minutes;
      }
      hours = hours.toString().length < 2 ? "0" + hours : hours;
      $("#timeTotal").val(hours + ":" + minutes);
    });
  }

  render() {
    return (
      <>
        <TimeForm />
      </>
    );
  }
}

export default Form;
