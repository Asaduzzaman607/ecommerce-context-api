import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const allProducts = [
    {name: 'Lenevo', category: 'laptop'},{name: 'Asus', category: 'laptop'},{name: 'Hp', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'},{name: 'Nokia', category: 'mobile'},{name: 'Apple', category: 'mobile'},
    {name: 'Canon', category: 'camera'},{name: 'Nikon', category: 'camera'},{name: 'Sony', category: 'camera'},
]

const Categories = () => {

    const [category] = useContext(CategoryContext );
    const [products, setproducts] = useState([]);

    useEffect(()=>{

        const matchedProducts= allProducts.filter(pd=> pd.category.toLowerCase() === category.toLowerCase())
        setproducts(matchedProducts);

    },[category])// when category will be called it will worl


    
    return (
        <div>
            <h2>Select your Category: {category}</h2>
            {
                products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;