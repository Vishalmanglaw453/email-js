import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Task = () => {
  const [inputvalue, setValue] = useState({
    first: "",
    second: "",
    third: "",
    four: "",
    five: "",
  });

  const addvalue = (e) => {
    setValue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  function fromsubmit(e) {
    e.preventDefault();
    setValue(
    {first: "",
    second: "",
    third: "",
    four: "",
    five: "",})
    Swal.fire({
      title: "Good job!",
      text: "Your task has been added !",
      icon: "success",
    });

    const serviceID = "service_cown3sg";
    const templateID = "template_ww98bbd";
    const userID = "_1XTPe6CahrlkVPya";
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
      },
      (error) => {
        console.error("Email failed to send!", error.text);
      }
    );
   
  }
  
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="heaving_card">
          <h2 className=" text-center">Email js</h2>

          <form onSubmit={fromsubmit}>
            <div className="  d-flex gap-3">
              <div className=" input_parent">
                <label htmlFor="" className=" text-black  ">
                  Name*
                </label>
                <input
                  required
                  type="text"
                  value={inputvalue.first}
                  name="first"
                  onChange={addvalue}
                />
              </div>
              <div className=" input_parent">
                <label htmlFor="" className=" text-black  ">
                  Email address*
                </label>
                <input
                  required
                  type="email"
                  value={inputvalue.second}
                  name="second"
                  onChange={addvalue}
                />
              </div>
            </div>
            <div className="  d-flex gap-3">
              <div className=" input_parent">
                <label htmlFor="" className=" text-black  ">
                  Phone number
                </label>
                <input
                  required
                  type="number"
                  value={inputvalue.third}
                  name="third"
                  onChange={addvalue}
                />
              </div>{" "}
              <div className=" input_parent">
                <label htmlFor="" className=" text-black  ">
                  Company*
                </label>
                <input
                  required
                  type="text"
                  value={inputvalue.four}
                  name="four"
                  onChange={addvalue}
                />
              </div>
            </div>
            <div className="  d-flex gap-3"></div>
            <div className="  d-flex gap-3">
              <div className=" input_parent">
                <label htmlFor="" className=" text-black  ">
                  Message*
                </label>
                <input
                required
                  type="text"
                  value={inputvalue.five}
                  name="five"
                  onChange={addvalue}
                />
              </div>
            </div>
            <button className="touch_btn mt-4">GET IN TOUCH</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Task;
