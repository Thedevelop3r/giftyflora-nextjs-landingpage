import React from "react";

const CourselCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 10px",
        backgroundColor: "#eaeaea",
      }}
    >
      <h1>Image File</h1>
      <h2>Image title</h2>
      <h3>Image Price</h3>
    </div>
  );
};

const Couresal = ({bgcolorgrey}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-evenly",
        padding: "100px 0",
        backgroundColor: bgcolorgrey? "#EAEAEA82" :"white",
        width: "100%"
      }}
    >
        <h1>Title</h1>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          padding: "10px 0",
          backgroundColor: "transparent",
          width: "100%",
        //   gap: "20px"
        }}
      >
        <CourselCard />
        <CourselCard />
        <CourselCard />
        <CourselCard />
      </div>
    </div>
  );
};

export default Couresal;
