import React, { Component } from 'react';
import "./preview-collection.scss"
import CollectionItem from '../collection-item/CollectionItem';

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((_, index) => {
                        return index < 4
                    })
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
            }
        </div>
    </div>
)

export default PreviewCollection;