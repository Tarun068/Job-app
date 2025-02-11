import React, { useState } from "react";
import "./jobpage.css";
import allData from "../../jobs.json";
import { useNavigate } from "react-router-dom";
const JobPage = ({ isHome = false }) => {
  const [jobDesc, setJobDesc] = useState(false);
  const navigate = useNavigate();
  function handleMore(id) {
    setJobDesc((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }
  function handleRead(id) {
    navigate(`/job/${id}`);
  }
  return (
    <div className="job-container">
      <h2>{isHome == true ? "Recent Jobs" : "Browse Jobs"}</h2>
      <div className="job-card-container">
        {allData.map((data) => (
          <div key={data.id} className="job-card">
            <p className="job-type">{data.type}</p>
            <h3 className="heading">{data.title}</h3>
            <p className="desc">
              {jobDesc[data.id]
                ? data.description
                : data.description?.slice(0, 100)}
            </p>
            <span className="more-btn" onClick={() => handleMore(data.id)}>
              {jobDesc[data.id] ? "Less" : "More"}
            </span>
            <p className="salary">{data.salary} / Year</p>
            <div className="card-bottom">
              <span>{data.location}</span>
              <button className="btn-read" onClick={() => handleRead(data.id)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;
