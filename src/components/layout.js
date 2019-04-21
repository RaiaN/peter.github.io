import React from "react"
import { Link } from "gatsby"
import ListLink from "./listLink"
import ExternalLink from "./externalLink"
import "./global.css"



class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="layout-container">
                    <header className="layout-header">
                        <Link to="/">
                            <h3 className="author">Peter Leontev </h3>
                        </Link>
                        <ul className="navigation">
                            <ListLink to="/"><b>About</b></ListLink>
                            <ListLink to="/projects/"><b>Projects</b></ListLink>
                            <ListLink to="/blog/"><b>Blog</b></ListLink>
                            <ExternalLink url="http://google.ru" url_name="CV"/>
                        </ul>
                    </header>
                    <div className="layout-content">
                        {this.props.children}
                    </div>
                    <footer>
                        <i>© 2019 Peter Leontev</i>
                    </footer>
                </div>
                <style jsx>
                {`
                    .layout-container
                    {
                        margin: 2rem auto;
                        max-width: 900px;
                        padding: 1rem;
                    }

                    .layout-header
                    {   
                        margin-left: 0px;
                        margin-bottom: 16vm;
                        display: inline;
                    }

                    .author 
                    {
                        display: inline;
                    }

                    .navigation
                    {
                        float: right;
                        margin-bottom: 0;
                        display: inline-block;
                    }

                    .layout-content
                    {
                        margin-top: 2.5em;
                    }

                    @media (max-width: 500px) 
                    {
                        .author 
                        {
                            margin-top: 0px;
                            margin-bottom: 1px;
                            display: block;
                        }

                        .navigation
                        {
                            margin-left: 0px;
                            float: none;
                        }

                        .layout-content
                        {
                            margin-top: 0.5em;
                        }
                    }
                `}
                </style>
            </React.Fragment>
        )
    }
}

export default Layout;