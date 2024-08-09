// src/component/ItemSkeleton.js
import React from "react";
import ContentLoader from "react-content-loader";

function ItemSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="0" rx="4" ry="4" width="100" height="100"/>
      <rect x="140" y="10" rx="4" ry="4" width="250" height="20"/>
      <rect x="140" y="40" rx="4" ry="4" width="150" height="20" />
      <rect x="140" y="70" rx="4" ry="4" width="200" height="20" />
      <rect x="140" y="100" rx="4" ry="4" width="100" height="20" />
    </ContentLoader>
  );
}

export default ItemSkeleton;
