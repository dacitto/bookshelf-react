// import { useEffect, useState } from "react";
// import * as API from "../API";

// const initialState = {
//   results: [],
// };

// export const useBooksFetch = () => {
//   /** */
//   const [state, setState] = useState(initialState);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   //** Fetching */

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         setError(false);
//         setLoading(true);
//         const results = await API.getAll();
//         setState({
//           ...state,
//           results,
//         });
//         console.log("----");
//         console.log(state);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//       }
//     };
//     fetchBooks();
//   }, []);

//   return { state, loading, error };
// };
