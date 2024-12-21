import  { useState, useEffect } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
}

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setContacts([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-5">
      {contacts.map(contact => (
        <div key={contact.id} className="mb-4">
          <h2 className="text-xl font-bold">{contact.name}</h2>
          <p className="text-gray-600">{contact.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;