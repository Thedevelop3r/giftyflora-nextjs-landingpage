import { height } from '@mui/system'
import React from 'react'

const BlogCard = () => {
  return (
    <div style={{
        width: "100%",
        // height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#eaeaea",
        padding: "8px 15px"
    }} >
        <h2>Image</h2>
        <h2>Title</h2>
        <p>date/time</p>
        <p>details</p>
        <button>read more...</button>



    </div>
  )
}

export default BlogCard