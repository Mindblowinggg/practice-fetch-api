import Loader from "./Loader";
import UserDataUi from "./UserDataUi";
import ErrorMsg from "./ErrorMsg";
import useUsers from "./useUsers";

const Users = () => {
  const { users, loading, error } = useUsers();

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg message={error} />
      ) : (
        <UserDataUi users={users} />
      )}
    </div>
  );
};

export default Users;
