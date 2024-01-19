import React from "react";
import Navbar from "../Navbar";

const SaveJobs = () => {
  const savedJob = JSON.parse(localStorage.getItem("Job"));

  if (!savedJob) {
    // Handle the case when there is no saved job
    return (
      <div>
        <Navbar />
        <div className="jobs-for-you">
          <div className="job-background">
            <div className="title">
              <h2>Saved Jobs</h2>
            </div>
          </div>
          <div className="job-section">
            <div className="job-page">
              <p>No saved jobs found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Check if logo is available before destructure
  const { logo, company, position, location, role } = savedJob;

  return (
    <div>
      <Navbar />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Saved Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            <div className="job-list">
              <div className="job-card">
                <div className="job-name">
                  {logo && (
                    <img
                      src={require(`../../Assets/images/${logo}`)}
                      alt="logo"
                      className="job-profile"
                    />
                  )}
                  <div className="job-detail">
                    <h4>{company}</h4>
                    <h3>{position}</h3>
                    <div className="category">
                      <p>{location}</p>
                      <p>{role}</p>
                    </div>
                  </div>
                </div>
                <div className="job-posting">
                  {/* Additional content for job posting if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveJobs;
