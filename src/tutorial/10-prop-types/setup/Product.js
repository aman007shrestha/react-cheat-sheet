import React, { useState } from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = (props) => {
  console.log(props);
  const { name, price, image } = props;
  if (image) {
    console.log(image);
  }

  return (
    <article className="product">
      {image ? (
        <img src={image.url} alt={name} />
      ) : (
        <img src={defaultImage} alt={name} />
        /* <div style= height: "240px", background: "#b5c7ba" ></div> */
      )}
      {/* {!image && <div style={{ height: "240px", background: "#b5c7ba" }}></div>} */}
      <h4>{name}</h4>
      {<p>${price || "contact us"}</p>}
      {/* {!price && <p>Contact Us</p>} */}
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultPros = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
