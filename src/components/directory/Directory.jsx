import React from "react";
import sections from "./sections-data.json";
import MenuItem from "../menu-item/MenuItem.jsx";
import "./directory.scss";

const Directory = () => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => {
                return (
                    <MenuItem
                        key={id}
                        {...otherSectionProps}
                    />
                );
            })}
        </div>
    );
};

export default Directory;
