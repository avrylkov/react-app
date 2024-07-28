import React, {useEffect, useState } from 'react';
interface Counter3Props {
    number: number;
}

function Counter3({number}: Counter3Props) {

    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState(number);

    useEffect(() => {
        console.log(`begin, ${count}`);
        return () => {
            console.log(`'begin, ${count}`);
        }
    });

    return (
        <div>
            <p>Вы нажали {count} paз</p>
            <button onClick={() => setCount(count => count + 1)}> +</button>
            <button onClick={() => setCount(count => count - 1)}> -</button>
            <button onClick={() => setCount(number)}> reset</button>
        </div>
    );
}
export default Counter3