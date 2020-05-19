import React from "react";
import "./CollectionPreview.scss";
import CollectionPreviewItem from "./CollectionPreviewItem/CollectionPreviewItem";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div>
      <h3>{title}</h3>
      <section>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...other }) => (
            <CollectionPreviewItem key={id} {...other} />
          ))}
      </section>
    </div>
  );
};

export default CollectionPreview;
