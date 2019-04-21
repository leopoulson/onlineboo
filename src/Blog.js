import React, {Component} from 'react';
import BlogPost from './BlogPost.js';
import blogPosts from "./data/blogposts.json";
import './Blog.css';


class Blog extends Component {


    renderPost (props) {
        return <BlogPost data={props}/>;
    }

    render () {
        console.log(blogPosts);
        return (
                <div className="BlogTitle">
                  <p className="BlogTitleText">
                      Blog
                  </p>
                  <div>
                    {blogPosts.map((post) => this.renderPost(post))}
                  </div>
                </div>

        );
    }
}

export default Blog;
