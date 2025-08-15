import {useEffect, useState} from 'react'

export default function ProductList(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/products/')
        .then(r=>r.json())
        .then(data=>setProducts(data))
    }, [])

    return (
        <div>
            {products.map(p => (
                <div key={p.id}>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p> 
                    <b>NGN {p.price}</b>
                    </div>

            ))}
        </div>
    )
}