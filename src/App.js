import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import Shows from './Shows.js';
import Blog from './Blog.js';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showsShown: true,
            blogShown: false
        };

        this.showBlog = this.showBlog.bind(this);
        this.showShows = this.showShows.bind(this);
    }

    showBlog() {
        this.setState({
            showsShown: false,
            blogShown : true
        });
    }

    showShows() {
        this.setState({
            showsShown: true,
            blogShown: false
        });
    }

    render() {
        let showContent;


        if (this.state.showsShown) showContent = <Shows/>;
        else if (this.state.blogShown) showContent = <Blog/>;

        return (
            <div className="App">
                <div className="Content">
                    <div className="SideBar">
                        <img src={boopic} className="LogoStyle" alt="boo"/>
                      <Buttons showBlog={this.showBlog} showShows={this.showShows}/>
                    </div>
                  <div className="ShowBar">
                       {showContent}
                    </div>
                </div>
            </div>
            );
        }
    }

export default App;
