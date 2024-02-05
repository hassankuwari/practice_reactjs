import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const AllProducts = () => {

	const [productData, setProductData] = useState([]);

	const getProduct = () => {
		axios.get(`https://dummyjson.com/products`).then((response) => {
			console.log("fetch all products", response.data.products);
			setProductData(response.data.products);
		})
	}

	useEffect(() => {
		getProduct()
	}, [])

	return (
		<div className='container'>
			{
				productData.map((item, i) => {
					return (
						<NavLink key={i} className='productNav' to={`/product-details/${item.id}`}>
							<div className='product-card'>
								<div className='img-container'>
									<img src={item.thumbnail} alt="" />
								</div>
								<div>
                  Product Brand : {item.brand}
                </div>
                <div>
                  Product Title : {item.title}
                </div>
                <div>
                  Product Price : {item.price}
                </div>
							</div>

						</NavLink>
					)
				})
			}
		</div>
	)
}

export default AllProducts
