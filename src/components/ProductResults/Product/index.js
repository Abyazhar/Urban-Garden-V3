import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './../../forms/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from './../../../redux/Cart/cart.actions';

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productCategory,
    productThumbnail,
    productName,
    productPrice
  } = product;
  if (!documentID || !productCategory || !productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  };

  return (
    <div className="product">
      <div className='cards__item__link'>
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
        <figure className='cards__item__pic-wrap' 
                data-category={productCategory}>
          <img src={productThumbnail} alt={productName} 
          className='card__item__img' />
          </figure>
        </Link>
      </div>

      <div className='cards__item__info'>
              <Link to={`/product/${documentID}`} >
               <h5 className='cards__item__text'>{productName}</h5> 
              </Link>
      </div>
          
      <div className='cards__item__info'>
                     <span className='cards__item__text'>
                         RM{productPrice}
                     </span>
                </div>
       <div className='cards__button'>
              <Button buttonStyle='btn--cart' buttonSize='btn--medium' {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>
          
      </div>
    

    </div>
  );
};

export default Product;