import React from "react";
import "./SearchListItem.css";

const SearchListItem = props => {
  return (
    <li className={props.toggleKey === true ? "sL-li" : "sL-li sL-hidden"}>
      {props.name}
    </li>
  );
};
