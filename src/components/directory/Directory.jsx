import React from "react";
import sections from "./sections-data.json";
import MenuItem from "../menu-item/MenuItem.jsx";
import "./directory.scss";

const Directory = () => {
    return (
        <div className="directory-menu">
            {sections.map(({ title, imageUrl, id, size }) => {
                return (
                    <MenuItem
                        key={id}
                        title={title.toUpperCase()}
                        imageUrl={imageUrl}
                        size={size}
                    />
                );
            })}
        </div>
    );
};

export default Directory;
