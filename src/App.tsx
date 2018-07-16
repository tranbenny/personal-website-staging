import * as React from 'react';
import About from 'src/About';
import Blog from 'src/Blog';

import './App.css';

const mainPanelId: string = "home-panel";
const taglineId: string = "tagline";

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <div id={mainPanelId}>
          <h2>Benny Tran</h2>
          <div className={"row"} id={taglineId}> 
            <h6>Software Engineer at Amazon. Based in Seattle, WA.</h6>
            <a href="https://www.linkedin.com/in/tranbenny/">
              <i className="fab fa-linkedin fa-lg" />
            </a>
            <a href="https://github.com/tranbenny">
              <i className="fab fa-github fa-lg" />
            </a>
          </div> 
          <About />
          <hr />
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
