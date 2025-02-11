import React from "react";
import "./homecard.css";
import { Link } from "react-router-dom";
const HomeCard = () => {
  return (
    <div className="card-container">
      <div className="card1">
        <h2>For Developers</h2>
        <p>Browse our React jobs and start your career today</p>
        <button className="card1-btn">
          <Link className="card-btn" to="/jobs">
            Browse
          </Link>
        </button>
      </div>
      <div className="card2">
        <h2>For Employers</h2>
        <p>List your job to find the perfect developer for the role</p>
        <button className="card2-btn">
          <Link className="card-btn" to="/job/addJob">
            Add job
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
