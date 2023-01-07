import React from "react";
import WithHeader from "./WithHeader";

const AboutUs = () => {
  return (
    <div>
      <h1>This is us!</h1>
      <p>We are cool</p>
      <p>We are hip</p>
      <p>We are happening</p>
      <p>We are Remindyo!</p>
    </div>
  );
};

export default WithHeader(AboutUs);
