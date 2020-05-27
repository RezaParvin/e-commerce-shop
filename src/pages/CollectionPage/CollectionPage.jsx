import React, { Component } from "react";
import "./CollectionPage.scss";
import { connect } from "react-redux";
import CollectionPreviewItem from "../../components/CollectionPreview/CollectionPreviewItem/CollectionPreviewItem";
import { selectShopCategory } from "../../redux/selectors/shop";

class CollectionPage extends Component {
  render() {
    const { collections } = this.props;

    return (
      <div className="category-page">
        <h1>{collections.title}</h1>
        <div className="container-category">
          {collections.items.map((collection) => (
            <CollectionPreviewItem key={collection.id} item={collection} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectShopCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
