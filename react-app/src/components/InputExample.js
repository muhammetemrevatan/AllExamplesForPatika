import { useState } from 'react'

function InputExample() {
    const [form, setForm] = useState({ name: "", surname: "" });

    const setChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div>
            Name
            <br />
            <input name='name' value={form.name} onChange={setChangeForm} />
            <br />

            Surname
            <br />
            <input name='surname' value={form.surname} onChange={setChangeForm} />
            <br />
            <br />
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample
