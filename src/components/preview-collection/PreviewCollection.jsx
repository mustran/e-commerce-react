import React, { Component } from 'react';
import "./preview-collection.scss"

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((_, index) => {
                        return index < 4
                    })
                    .map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))
            }
        </div>
    </div>
)

export default PreviewCollection;