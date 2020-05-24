import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectonsArray } from "../../redux/selectors/shop";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      <h1>کالکشن</h1>
      {collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectonsArray,
});
export default connect(mapStateToProps)(CollectionOverview);
