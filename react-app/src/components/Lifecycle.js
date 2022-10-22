import { useEffect, useState } from 'react'

function Lifecycle() {

    const [name, setName] = useState("emre");
    const [age, setAge] = useState(0);

    const setChangeAge = () => {
        setAge(age + 1)
    }

    useEffect(() => {
        console.log("Compenet yani bu sayfa bu component comple mount edildi!(sayfaya oturtuldu.)");
    }, []);

    useEffect(() => {
        console.log("age artti. ve bu effect yakalandi.");
    }, [age]);

    return (
        <div className='Lifecycle'>
            <h2>Name</h2>
            <label>{name}</label>

            <hr />
            <h2>Surname</h2>
            <label>{age}</label>
            <button onClick={setChangeAge}>Click!</button>

        </div>
    )
}

export default Lifecycle
