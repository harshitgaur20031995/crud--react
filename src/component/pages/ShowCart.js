import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import ProductImage from '../Products/ProductImage';

function ShowCart() {
    const { id } = useParams();

    const [cart, setcart] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        const result = await axios.get('http://localhost:8080/cart');
        setcart(result.data.cart);
        console.log(result.data);

    }
    return (
        <div className="columns is-multiline">


            {
                cart.map(res =>
                    <div className="column is-3"
                        key={res.product._id}>

                        <div className="ml-4 mt-5" >
                            <ProductImage
                                productImage={res.product.productImage}
                                alt={res.product.name}>

                            </ProductImage>
                            
                        </div>
                        <br></br>
                        <div className="columns">
                                <div className="column is-6">
                                    <button className="button is-info">
                                        Next
                                    </button>
                                </div>
                                <div className="column is-6">
                                    <h1>Quantiy</h1>
                                        </div>

                            </div>




                    </div>)
            }

        </div>
    )
}

export default ShowCart

