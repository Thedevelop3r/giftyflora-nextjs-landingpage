import React from "react";

const ImageGallery = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "300px 0",
        backgroundColor: "#2DCEFF",
        fontSize: "24px",
      }}
    >
      <p>
        two columns column 1 has one big image <br /> colum 2 has 2 rows <br />
        row 1 has two equal size childs <br /> row 2 has 1 auto and 2 flexgrow
        max Images
      </p>
    </div>
  );
};

export default ImageGallery;
