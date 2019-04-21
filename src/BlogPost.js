import React, {Component} from 'react';
import './Blog.css';


class BlogPost extends Component {
    constructor(props) {
        super(props);


    }

    render () {
        return (
            <div className="post">
              <p> {this.props.data.body}</p></div>
        );
    }
}

export default BlogPost;
