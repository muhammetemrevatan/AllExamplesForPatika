import { useState } from "react";

function State() {

    const [name, setName] = useState("Emre");
    const [age, setAge] = useState(21);
    const [students, setStudents] = useState(["emre", "ali"]);
    const [address, setAddress] = useState({ title: "Istanbul", zip: 22500 });
    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h3>Name : {name}</h3>
            <button onClick={() => setName("Ali")}> Click! </button>

            <h3>Age : {age}</h3>
            <button onClick={() => setAge(15)}> Click! </button>

            <hr />

            <h3>Students</h3>
            {students.map((student, index) => (
                <div key={index}>
                    {student}
                </div>
            ))}
            <br />
            <button onClick={() => setStudents([...students, "Ayse"])}> Add new student!</button>

            <hr />

            <h3>Address</h3>
            <div>
                {address.title} {address.zip}
            </div>

            <button onClick={() => setAddress({ ...address, title: "Edirne" })}> Change the address!</button>

            <h3>Counter</h3>
            <div>
                <h4>{count}</h4>
                <button onClick={decrease}>Decrease</button>
                <button onClick={increase}>Increase</button>
            </div>

        </div >
    );
}

export default State;