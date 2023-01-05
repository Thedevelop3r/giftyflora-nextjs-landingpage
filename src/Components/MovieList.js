// code not for use...
// const Movies = [
//   { name: "alpha", rating: 12, duration: "2h" },
//   { name: "beta", rating: 12, duration: "2h" },
//   { name: "gama", rating: 12, duration: "2h" },
//   { name: "array", rating: 12, duration: "2h" },
//   { name: "ludan", rating: 12, duration: "2h" },
//   { name: "promitheis", rating: 12, duration: "2h" },
//   { name: "matrix", rating: 12, duration: "2h" },
// ];

// import React, { useState } from "react";

// const MovieList = ({ Movies, SearchMovie }) => {
//   // const [movies, setMovies] = useState([]);
//   const [Search, setSearch] = useState("");

//   function handeSearchParamChange(e) {
//     setSearch(e.target.value);
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         backgroundColor: "#eaeaea",
//         // color: "white"
//       }}
//     >
//       {/* Search */}
//       <div>
//         <input
//           aria-label="search"
//           style={{}}
//           placeholder="Search a movie..."
//           value={Search}
//           onChange={handeSearchParamChange}
//         />
//       </div>

//       {Search === ""
//         ? Movies.map((movie) => (
//             <ul
//               key={movie.name}
//               style={{
//                 gap: "20px",
//                 fontSize: "20px",
//                 listStyle: "none",
//                 padding: "10px 15px",
//                 backgroundColor: "white",
//               }}
//             >
//               <li>{movie.name}</li>
//               <li>{movie.rating}</li>
//               <li>{movie.duration}</li>
//             </ul>
//           ))
//         : Movies.filter((movie) => movie.name.includes(Search)).map((movie) => (
//             <ul
//               key={movie.name}
//               style={{
//                 gap: "20px",
//                 fontSize: "20px",
//                 listStyle: "none",
//                 padding: "10px 15px",
//                 backgroundColor: "white",
//               }}
//             >
//               <li>{movie.name}</li>
//               <li>{movie.rating}</li>
//               <li>{movie.duration}</li>
//             </ul>
//           ))}
//     </div>
//   );
// };

// export default MovieList;
