import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px 0"
      }}
    >
      <h2>Recent Blogs</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "90%",
          gap: "50px"
        }}
      >
        <BlogCard />
        <BlogCard />
        {/* <BlogCard /> */}
      </div>
    </div>
  );
}

export default Blogs