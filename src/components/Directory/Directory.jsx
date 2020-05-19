import React, { Component } from "react";
import MenuItem from "./Menu-Item/Menu-Item";
import "./Directory.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "کلاه",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        routeName: "hats",
      },
      {
        title: "کت",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
      },
      {
        title: "کفش اسپورت",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
      },
      {
        title: "بانوان",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
      },
      {
        title: "آقایان",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
      },
    ],
  };

  render() {
    const { sections } = this.state;

    return (
      <div className="Directory">
        {sections.map(({ id, ...sections }) => (
          <MenuItem key={id} {...sections} />
        ))}
      </div>
    );
  }
}

export default Directory;
