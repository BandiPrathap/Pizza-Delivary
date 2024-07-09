import React, { useEffect, useState } from 'react';

function ExampleFetch() {
    const URL = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, []);

    return (
        <div>
            <ol>
                {data.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ol>
        </div>
    );
}

export default ExampleFetch;
