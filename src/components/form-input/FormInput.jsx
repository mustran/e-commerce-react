import React from "react";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                name={otherProps.name}
                className="form-input"
                onChange={handleChange}
                required={otherProps.required ? true : false}
            />
            {label ? (
                <label
                    className={`${
                        otherProps.value.length ? "shrink" : ""
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default FormInput;
