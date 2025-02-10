import React from "react";
import "./jobpage.css";
import allData from "../jobs.json";
import { Link } from "react-router-dom";
const JobPage = ({ isHome = false }) => {
  return (
    <div className="job-container">
      <h2>{isHome == true ? "Recent Jobs" : "Browse Jobs"}</h2>
      <div className="job-card-container">
        {allData.map((data) => (
          <div key={data.id} className="job-card">
            <p className="job-type">{data.type}</p>
            <h3 className="heading">{data.title}</h3>
            <p className="desc">{data.description.slice(0, 100)}</p>
            <span className="more-btn">More</span>
            <p className="salary">{data.salary} / Year</p>
            <div className="card-bottom">
              <span>{data.location}</span>
              <button className="btn-read">
                <Link to="/job/desc">Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;
