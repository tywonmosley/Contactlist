import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
        console.log(data); // Logging fetched contact data
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display contact details here */}
      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
    </div>
  );
};

export default SelectedContact;
