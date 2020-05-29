import React from "react";
import ReactDOM from "react-dom";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import FilterSliderYear from "./FilterSliderYear";

export default function SideBar() {
  let [value, setValue] = React.useState({ min: 2, max: 10 });

  return (
    <div className="sidebar">
      <div className="year-filter">
        <FilterSliderYear></FilterSliderYear>
        <FilterSliderYear></FilterSliderYear>
      </div>
    </div>
  );
}
