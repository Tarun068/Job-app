import React from "react";
import { Link } from "react-router-dom";
import "./viewmore.css";
const ViewMore = () => {
  return (
    <div className="view-btn">
      <button className="view-more">
        <Link to="/jobs">View More</Link>
      </button>
    </div>
  );
};

export default ViewMore;
