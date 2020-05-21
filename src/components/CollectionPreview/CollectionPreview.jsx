import React from "react";
import "./CollectionPreview.scss";
import CollectionPreviewItem from "./CollectionPreviewItem/CollectionPreviewItem";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h2>{title}</h2>
      <section className="collection-items">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionPreviewItem key={item.id} item={item} />
          ))}
      </section>
    </div>
  );
};

export default CollectionPreview;
