import React, { useEffect } from "react";

const BlogArticle = () => {
  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > Article";
  }, []);
  return <div>BlogArticle</div>;
};

export default BlogArticle;
