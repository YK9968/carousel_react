import User from "../../User/User";

export default function UsersList({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
