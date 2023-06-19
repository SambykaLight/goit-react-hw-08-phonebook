import { ContactForm } from '../components/ContactForm/ContactForm';
// import React, { useEffect, useState } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactFilter } from '../components/ContactFilter/ContactFilter';

export function ContactsView() {
  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
}
