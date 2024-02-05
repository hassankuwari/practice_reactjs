import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'

const ProductDetails = () => {

	const { id } = useParams();

	const [clickedProduct, setClickedProduct] = useState([]);
	const [clickedProductImg, setClickedProductImg] = useState([]);

	const getClickedProductDetails = () => {
		axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
			console.log("clicked product is", response.data);
			console.log("clicked product is", response.data.images);
			setClickedProduct(response.data);
			setClickedProductImg(response.data.images);
		})
	}

	useEffect(() => {
		getClickedProductDetails()
	}, [])

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	};

	return (
		<div>

			<Row>
				<Col md={4}>
					<div>
						<Slider{...settings}>
							{
								clickedProductImg.map((item, i) => {
									return (
										<div key={i}>
											<img src={item} alt="" />
										</div>
									)
								})
							}
						</Slider>
					</div>
				</Col>

				<Col md={8}>
					<div>
						<div> <img src={clickedProduct.thumbnail} alt="product thumbnail" /></div>
						<div>Id : {clickedProduct.id}</div>
						<div>Brand : {clickedProduct.brand}</div>
						<div>Category : {clickedProduct.category}</div>
						<div>Description : {clickedProduct.description}</div>
						<div>DiscountPercentage : {clickedProduct.discountPercentage}</div>
						<div>Price : {clickedProduct.price}</div>
						<div>Rating : {clickedProduct.rating}</div>
						<div>Stock : {clickedProduct.stock}</div>
						<div>Title : {clickedProduct.title}</div>
					</div>
				</Col>
			</Row>

		</div>
	)
}

export default ProductDetails
