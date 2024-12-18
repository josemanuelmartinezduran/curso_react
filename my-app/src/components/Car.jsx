import React from "react";

class Car extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">My Jumbotron</h1>
            <p className="lead">Bienvenidos</p>
            <hr className="my-2" />
            <p>More info</p>
            <p className="lead">
              <a
                className="btn btn-primary btn-lg"
                href="Jumbo action link"
                role="button"
              >
                Jumbo action name
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Car;
