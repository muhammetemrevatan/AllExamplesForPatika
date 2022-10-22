import { useEffect, useState } from 'react'

function Counter() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Compenet yani bu sayfa bu component comple mount edildi!(sayfaya oturtuldu.)");

        const interval = setInterval(() => {
            setNumber(number + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("age state artti. ve bu effect yakalandi.");
    }, [number]);

    return (
        <div>
            <hr />
            <label>{number}</label>
            <button onClick={() => setNumber(number + 1)}>Click!</button>
        </div>
    )
}

export default Counter
