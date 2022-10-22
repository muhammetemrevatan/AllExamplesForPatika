import { useState, useEffect } from 'react'

import './styles.css'

import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Emre",
            phone_number: "123123",
        },
        {
            fullname: "Ayse",
            phone_number: "321321",
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
