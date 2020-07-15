import React from "react";

import { useQuery } from "react-query";
import { getUsers } from "../../service/http";

interface User {
  id: number;
  name: string;
}

const Users: React.FC = () => {
  const { isLoading, data } = useQuery<User[], "users">("users", getUsers);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data?.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </>
  );
};

export default Users;
