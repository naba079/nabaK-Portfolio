import React from "react";
import allBlogs from "../Components/allBlogs";
import Tittle from "../Components/Tittle";

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Tittle
          title={"Achievement"}
          span={"Recent Achievement"}
        />
      </div>

      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>

              <div className="blog-content">
                <img src={blog.image} alt="" />
              </div>

              <div>
                <a href={blog.link} className="blog-link3">
                  {blog.rank}
                </a>
              </div>
              
              <div>
                <a href={blog.link} className="blog-link2">
                  {blog.prob}
                </a>
              </div>

              <div>
                <a href={blog.link} className="blog-link1">
                  {blog.achiev}
                </a>
              </div>

              <div>
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
