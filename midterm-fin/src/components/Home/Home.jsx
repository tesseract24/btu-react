import React, { useState, useEffect } from 'react';
import { BASE_API_URL } from "../../constants";
import axios from "axios";


function Home() {
  const [users, setUsers] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        BASE_API_URL
      );
      setUsers({ hits: data });
    };
    fetchData();
  }, [setUsers]);

  const userNames = users.hits && users.hits.map(item =>item.name)
  // console.log(userNames)

  return (
    <div>
      <h1>Usernames in which you can log in</h1>
      <ul>
        {users.hits &&
          users.hits.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;

