import React from "react";
import "./CollectionPreviewItem.scss";

const CollectionPreviewItem = ({ id, name, imageUrl, price }) => {
  const style = {
    backgroundImage: `url('${imageUrl}')`,
  };

  return (
    <div className="collection-item">
      <div className="collection-image" style={style}></div>
      <footer className="collection-footer">
        <p>{name}</p>
        <span>{price}</span>
      </footer>
    </div>
  );
};

export default CollectionPreviewItem;
