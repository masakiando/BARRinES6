import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class BootstrapPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //
    // };
  }

  render() {
    return (
      <div>
      <h1>BootstrapPage</h1>

        <form className="hidden-sm-down">
          <div className="input-group ">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Search</button>
              </span>
          </div>
        </form>

        <h1>Nav collapse navbar-collapse navbar-nav</h1>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="modal" data-target="#messages">Messages</a>
            </li>
          </ul>
        </div>

        <h1>Nav navbar-collapse navbar-nav</h1>
        <div className="navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="modal" data-target="#messages">Messages</a>
            </li>
          </ul>
        </div>

        <h1>navbar navbar-inversev</h1>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
        <div className="navbar-header">
        <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbarEexample4"
                >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
        タイトル
        </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarEexample4">
        <ul className="nav navbar-nav">
        <li className="box-link" activeClassName="active"><a href="#">メニューＡ</a></li>
        <li className="box-link" activeClassName="active"><a href="#">メニューＢ</a></li>
        <li className="box-link" activeClassName="active"><a href="#">メニューＣ</a></li>
        </ul>
        <button type="button" className="btn btn-default navbar-btn">Sign in</button>
        </div>
        </div>
        </nav>

       <h1>button</h1>
       <p><a className="btn btn-primary" href="http://02geek.com/" target="_blank">Discover things.</a></p>
       <p><a className="btn btn-danger" href="http://02geek.com/" target="_blank">Discover things.</a></p>


         <div className="container">
           <div className="row">
             <div className="col">
               1 of 2
             </div>
             <div className="col">
               2 of 2
             </div>
           </div>
           <div className="row">
             <div className="col">
               1 of 3
             </div>
             <div className="col">
               2 of 3
             </div>
             <div className="col">
               3 of 3
             </div>
           </div>
         </div>
      </div>

    );
  }
}

export default BootstrapPage;
