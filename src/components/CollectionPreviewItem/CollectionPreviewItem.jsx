import React from "react";
import "./CollectionPreviewItem.scss";
import CustomButton from "../Custom-Button/Custom-Button";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import { convertToPersian } from "../../shared/utility";

const CollectionPreviewItem = ({ item, onAddItemToCart }) => {
  const { name, imageUrl, price } = item;

  const style = {
    backgroundImage: `url('${imageUrl}')`,
  };

  return (
    <div className="collection-item">
      <div className="collection-image" style={style}></div>
      <div className="collection-cutsom-button">
        <CustomButton
          inCollection
          width="80%"
          onClick={() => {
            onAddItemToCart(item);
          }}
        >
          اضافه به سبد
        </CustomButton>
      </div>
      <footer className="collection-footer">
        <p>{name}</p>
        <span>{convertToPersian(price.toString())} تومان</span>
      </footer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItemToCart: (item) => {
      dispatch(actions.addItemToCart(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CollectionPreviewItem);
