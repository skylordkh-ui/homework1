import avatarImg from "./assets/photo.jpg";

function StudentCard() {
  const student = {
    name: "MOV DANA",
    dept: "COMPUTER SCIENCE",
    id: "0023800",
    gender: "Male",
    major: "Computer Science",
    classGroup: "F2-12",
    levelYear: "Year 2 • Bachelor"
  };

  return (
    <div className="clean-profile-card">
      {/* Top Banner */}
      <div className="card-top-header">
        <div className="card-university-brand">
          <div className="card-crest">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="#3d352c" />
              <path d="M12 4.4L6 6.6v4.5c0 3.79 2.56 7.32 6 8.19 3.44-.87 6-4.4 6-8.19V6.6l-6-2.2z" fill="#8c381f" />
              <circle cx="12" cy="11" r="2.5" fill="#d4af37" />
            </svg>
          </div>
          <div className="card-header-titles">
            <h3 className="card-title">Western University</h3>
            <span className="card-subtitle">Student Card</span>
          </div>
        </div>
        <span className="student-badge">STUDENT</span>
      </div>

      {/* Main Card Body */}
      <div className="card-main-body">
        {/* Photo Container */}
        <div className="profile-photo-wrapper">
          <img src={avatarImg} alt={student.name} className="profile-photo" />
        </div>

        {/* Student Name & Department */}
        <h2 className="student-display-name">{student.name}</h2>
        <p className="student-display-dept">{student.dept}</p>

        {/* Info Grid with Basic Simple Words */}
        <div className="profile-info-grid">
          <div className="info-item">
            <span className="info-label">STUDENT ID</span>
            <span className="info-value id-code">{student.id}</span>
          </div>
          <div className="info-item">
            <span className="info-label">GENDER</span>
            <span className="info-value">{student.gender}</span>
          </div>
          <div className="info-item">
            <span className="info-label">MAJOR</span>
            <span className="info-value">{student.major}</span>
          </div>
          <div className="info-item">
            <span className="info-label">CLASS</span>
            <span className="info-value">{student.classGroup}</span>
          </div>
          <div className="info-item full-width">
            <span className="info-label">YEAR</span>
            <span className="info-value">{student.levelYear}</span>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="card-footer-strip"></div>
    </div>
  );
}

export default StudentCard;
