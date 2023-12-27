// import React from 'react'
import React, { useState } from 'react';
import ContactList from './components/Contactlist'
import SelectedContact from './components/SelectedContact';
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;