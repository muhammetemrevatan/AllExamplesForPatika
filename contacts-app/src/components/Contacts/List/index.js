import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()))
    });

    console.log(filtered);

    return (
        <div>
            <input placeholder='Filter Contact' onChange={(e) => setFilterText(e.target.value)} />

            <ul className='list'>
                {filtered.map((contact, index) => (
                    <li key={index}>{contact.fullname}</li>
                ))}
            </ul>

            <p>
                Total contacts : ({filtered.length})
            </p>
        </div>
    )
}

export default List;
