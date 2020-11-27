import React from "react";
import Sidebar from "react-sidebar";
import { BrowserRouter, Route, Link } from "react-router-dom";
const defaultStyles = {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  sidebar: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out",
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)",
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0,
  },
};

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <b>
            Portrait Circle in square div
            <img src="0.jpeg" alt="" />
            <div className="navigation">
              <div className="navigation-sub">
                <ul>
                  <li>
                    {" "}
                    <Link to="/" className="item">
                      Home
                    </Link>{" "}
                  </li>
                  <br />
                  <li>
                    {" "}
                    <Link to="/projects" className="item">
                      Projects
                    </Link>{" "}
                  </li>
                  <br />
                  <li>
                    {" "}
                    <Link to="/tech" className="item">
                      Tech
                    </Link>{" "}
                  </li>
                  <br />
                  <li>
                    {" "}
                    <Link to="/about" className="item">
                      About
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </b>
        }
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        <b>Jeffrey Brown 2020</b>
      </Sidebar>
    );
  }
}

export default App;
