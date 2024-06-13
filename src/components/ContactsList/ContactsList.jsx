import Contacts from "../Contacts/Contacts";

export default function ContactsList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>{<Contacts contact={contact} />}</li>
        ))}
      </ul>
    </div>
  );
}
