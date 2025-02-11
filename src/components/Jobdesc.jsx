import React from "react";
import "./jobdesc.css";
import pageData from "../../jobs.json";
import { useParams } from "react-router-dom";
const JobDesc = () => {
  const { id } = useParams();
  let job = pageData.find((job) => job.id == id);
  if (!job) {
    return <h2>Job not found</h2>;
  }
  return (
    <div className="job-desc-container">
      <div className="job-desc-details">
        <div className="job-heading">
          <p className="type">{job.type}</p>
          <h2 className="job-desc-heading">{job.title}</h2>
          <p className="job-desc-loc">{job.location}</p>
        </div>
        <div className="job-description">
          <p className="job-desc-title">Job Description</p>
          <p className="job-desc-main">{job.description}</p>
          <p className="job-desc-salary">Salary</p>
          <p className="job-desc-salary-info">{job.salary}/Year</p>
        </div>
      </div>
      <div className="job-company-info">
        <div className="company">
          <h2>Company info</h2>
          <h2 className="company-name">{job.company.name}</h2>
          <p className="company-desc">{job.company.description}</p>
          <hr />
          <h2 className="company-email">Contact Email</h2>
          <p className="company-email-id">{job.company.contactEmail}</p>
          <h2 className="company-phone">Contact Phone</h2>
          <p className="company-phone-number">{job.company.contactPhone}</p>
        </div>
        <div className="apply-btn">
          <button className="apply">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
