import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await axios.get('http://api:8000/api');

      setUsers(data.data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.id}
            {user.name}
            {user.age}
          </div>
        );
      })}
    </>
  );
}

export default App;
