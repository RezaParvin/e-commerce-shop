import React from "react";
import "./CollectionPreview.scss";
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem";
import { Link } from "react-router-dom";
import { title_map_routeName } from "../../firebase/firebase.utils";
import "./CollectionPreview.scss";
import CollectionPreviewItems from "../CollectionPreviewItems/CollectionPreviewItems";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <Link
        to={`/shop/${title_map_routeName[title]}`}
        className="collection-title"
      >
        <h2>{title}</h2>
      </Link>
      <CollectionPreviewItems items={items}/>
    </div>
  );
};

export default CollectionPreview;
