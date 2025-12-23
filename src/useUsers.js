import { useState, useEffect } from "react";

const useUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Something is wrong");
        }
        const data = await response.json();
        setUsers(data);
      } catch {
        setError("something is wrong , please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useUsers;
