import React, { Component } from "react";
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem";
import {
  CollectionPreviewContainer,
  CollectionItemsContainer,
  NextCollectionContainer,
  PrevCollectionContainer,
  PageControllerBtn,
  CollectionItemsView,
  DotPageControllerContainer,
  DotPageController,
} from "./CollectionPreviewItems.styles";
import { calcNextPageCollection } from "../../shared/utility";

class CollectionPreviewItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { resultPosition, maxMargin } = calcNextPageCollection(
        this.state.position,
        this.props.items
      );
      const finalPosition = Math.max(resultPosition, maxMargin);
      if (finalPosition === this.state.position) {
        this.setState({ position: 0 });
      } else {
        this.setState({ position: finalPosition });
      }
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  nextPageHandler = () => {
    const { resultPosition, maxMargin } = calcNextPageCollection(
      this.state.position,
      this.props.items
    );

    this.setState({
      position: Math.max(resultPosition, maxMargin),
    });
  };

  prevPageHandler = () => {
    const viewPosition = 1100;
    const resultPosition = this.state.position + viewPosition;
    this.setState({ position: Math.min(resultPosition, 0) });
  };

  dotPageHandler = (selectPosition) => {
    this.setState({ position: selectPosition });
  };

  render() {
    const { items } = this.props;
    const pageCount = Math.ceil(items.length / 4);
    const maxMargin = items.length * 275 - 1100;

    const dotPageControllers = [];
    for (let i = 0; i < pageCount; i++) {
      const finalPosition = Math.max(-(i * 1100), -maxMargin);
      dotPageControllers.push(
        <DotPageController
          key={i}
          active={finalPosition === this.state.position}
          onClick={() => {
            this.dotPageHandler(finalPosition);
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <CollectionPreviewContainer>
          <PrevCollectionContainer>
            <PageControllerBtn onClick={this.prevPageHandler}>
              &#10094;
            </PageControllerBtn>
          </PrevCollectionContainer>
          <CollectionItemsView>
            <CollectionItemsContainer position={this.state.position}>
              {items.map((item) => (
                <CollectionPreviewItem key={item.id} item={item} />
              ))}
            </CollectionItemsContainer>
          </CollectionItemsView>
          <NextCollectionContainer>
            <PageControllerBtn onClick={this.nextPageHandler}>
              &#10095;
            </PageControllerBtn>
          </NextCollectionContainer>
        </CollectionPreviewContainer>
        <DotPageControllerContainer>
          {dotPageControllers}
        </DotPageControllerContainer>
      </React.Fragment>
    );
  }
}

export default CollectionPreviewItems;
