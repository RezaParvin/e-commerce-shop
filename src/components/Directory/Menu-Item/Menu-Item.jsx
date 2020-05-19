import React from "react";
import "./Menu-Item.scss";
import { withRouter } from "react-router-dom";

const MenuItem = (props) => {
  const { title, imageUrl, size, routeName } = props;

  return (
    <div
      className={`Menu-item ${size}`}
      onClick={() => {
        props.history.push(`/${routeName}`);
      }}
    >
      <img src={imageUrl} alt={title} className="backgroundImage" />
      <div className="Menu-title">
        <h2>{title}</h2>
        <span>الان خرید بکنید</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
