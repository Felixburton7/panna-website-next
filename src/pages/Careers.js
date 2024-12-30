import React, { useState } from "react";

function Careers() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  const jobListings = [
    {
      title: "Backend Developer",
      description:
        "Good fit for the team, a recent graduate or in the final year of university is ideal, but open to all ages and experience levels. Proficiency in SQL is required, and Flutter experience is a bonus. Candidates must have projects to showcase. Email: info@pannaapp.uk",
      position: "Software",
      location: "Remote",
      team: "Backend",
    },
  ];

  const filteredJobs = jobListings.filter(
    (job) =>
      (selectedPosition === "" || job.position === selectedPosition) &&
      (selectedLocation === "" || job.location === selectedLocation) &&
      (selectedTeam === "" || job.team === selectedTeam)
  );

  return (
    <div className="careers-page">
      <h1 className="careers-title">Join the Panna Team</h1>
      <p className="careers-description">
        We're always looking for talented individuals to join our team. Filter
        by position, location, or team to find the right opportunity for you.
      </p>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-dropdown">
          <label htmlFor="position">Position:</label>
          <select
            id="position"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="dropdown"
          >
            <option value="">All Positions</option>
            <option value="Software">Software</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div className="filter-dropdown">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="dropdown"
          >
            <option value="">All Locations</option>
            <option value="In-person">In-person</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="filter-dropdown">
          <label htmlFor="team">Team:</label>
          <select
            id="team"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="dropdown"
          >
            <option value="">All Teams</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Full-stack Developer">Full-stack Developer</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-description">{job.description}</p>
              <p className="job-details">
                <strong>Position:</strong> {job.position} | <strong>Location:</strong>{" "}
                {job.location} | <strong>Team:</strong> {job.team}
              </p>
            </div>
          ))
        ) : (
          <p className="no-jobs">No jobs match your filters. Try adjusting them!</p>
        )}
      </div>
    </div>
  );
}

export default Careers;
