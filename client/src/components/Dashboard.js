import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

// // ACTION TYPE FLOATING BUTTON
// import M from "materialize-css";
// import { options } from "materialize-css";

class Dashboard extends React.Component {
  // componentDidMount() {
  //   document.addEventListener("DOMContentLoaded", function () {
  //     var elems = document.querySelectorAll(".fixed-action-btn");
  //     var instances = M.FloatingActionButton.init(elems, options);
  //   });
  // }

  render() {
    return (
      <div>
        <SurveyList />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
