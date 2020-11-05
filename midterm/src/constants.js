export const USER_SESSION_TOKEN_KEY = "USER_SESSION_TOKEN";
export const BASE_API_URL = "https://jsonplaceholder.typicode.com/users";





// import React, { useState, useEffect } from 'react';
// import { BASE_API_URL } from "../constants";
// import axios from "axios";


// function Usernames() {
//   const [users, setUsers] = useState({ hits: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await axios(
//         BASE_API_URL
//       );
//       setUsers({ hits: data });
//     };
//     fetchData();
//   }, [setUsers]);

//   return (
//     <div>
//       <ul>
//         {users.hits &&
//           users.hits.map(item => (
//             <li key={item.id}>
//               <span>{item.name}</span>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default Usernames;

