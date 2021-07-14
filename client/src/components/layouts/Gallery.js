import React from "react";
import Gallery from "react-grid-gallery";

import "../../assets/css/gallery.css";

const PhotoGallery = (props) => {
  return <Gallery images={props.images} />;
};

export default PhotoGallery;
