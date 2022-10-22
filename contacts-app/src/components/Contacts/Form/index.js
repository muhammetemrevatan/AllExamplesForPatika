import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }

function Form({ addContacts, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }

        addContacts([...contacts, form]);
        console.log(form);
        setForm({ fullname: "", phone_number: "" });
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name='fullname' placeholder='Full Name' onChange={onChangeInput} />
            </div>

            <div>
                <input name='phone_number' placeholder='Phone Number' onChange={onChangeInput} />
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
