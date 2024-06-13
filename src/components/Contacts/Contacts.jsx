export default function Contacts({
  contact: { createdAt, email, name, phoneNumber },
}) {
  return (
    <div>
      <p>
        Name: <b>{name}</b>
      </p>
      <p>
        Phone: <b>{phoneNumber}</b>
      </p>
      <p>
        Email: <b>{email}</b>
      </p>
      <p>
        Create contact: <b>{createdAt}</b>
      </p>
    </div>
  );
}
