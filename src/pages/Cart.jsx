import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [cartProducts, setCartProducts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://tech-shop-server-ecru.vercel.app/cart_products?email=${userEmail}`;
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setCartProducts(data);
                setIsLoading(false);
            })
    }, [])


    return (
        <div className="container mx-auto mt-2 mb-20">
            <div className="bg-gradient-to-r from-[#0078FF] to-[#002B44] rounded-md h-[40vh] flex items-center justify-center">
                <h1 className="text-white font-bold text-4xl">Shop and Save!</h1>
            </div>
            {
                isLoading ? (<p className="h-10 flex justify-center items-center">Loading...</p>) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-10 lg:px-0 mt-8'>
                        {
                            cartProducts ? cartProducts.map(product => <CartCard key={product._id} product={product}></CartCard>) : <div className='min-h-screen flex items-center justify-center'><p>Your Cart is Waiting for Awesome Products</p></div>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Cart;