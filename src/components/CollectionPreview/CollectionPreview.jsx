import React from "react";
import "./CollectionPreview.scss";
import CollectionPreviewItem from "./CollectionPreviewItem/CollectionPreviewItem";
import { Link } from "react-router-dom";
import {title_map_routeName} from "../../firebase/firebase.utils";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${title_map_routeName[title]}`}>
        <h2>{title}</h2>
      </Link>
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
