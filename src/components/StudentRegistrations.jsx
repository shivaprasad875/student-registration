import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const StudentRegistrations = () => {
  const {
    courseTypes,
    courses,
    courseOfferings,
    students,
    registerStudent
  } = useAppContext();

  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    courseOfferingId: '',
    selectedCourseType: ''
  });

  const [filteredOfferings, setFilteredOfferings] = useState(courseOfferings);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.email && newStudent.courseOfferingId) {
      registerStudent({
        name: newStudent.name.trim(),
        email: newStudent.email.trim(),
        courseOfferingId: newStudent.courseOfferingId
      });
      setNewStudent({
        name: '',
        email: '',
        courseOfferingId: '',
        selectedCourseType: ''
      });
    }
  };

  const handleCourseTypeFilter = (courseTypeId) => {
    setNewStudent(prev => ({ ...prev, selectedCourseType: courseTypeId }));
    if (courseTypeId) {
      setFilteredOfferings(courseOfferings.filter(
        offering => offering.courseTypeId === courseTypeId
      ));
    } else {
      setFilteredOfferings(courseOfferings);
    }
  };

  const getCourseOfferingDetails = (offeringId) => {
    const offering = courseOfferings.find(o => o.id === offeringId);
    if (!offering) return 'Unknown Offering';
    
    const course = courses.find(c => c.id === offering.courseId);
    const courseType = courseTypes.find(ct => ct.id === offering.courseTypeId);
    
    return `${courseType?.name || 'Unknown Type'} - ${course?.name || 'Unknown Course'}`;
  };

  return (
    <div>
      <h2>Student Registrations</h2>
      
      <div className="card">
        <h3>Register New Student</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentEmail">Student Email:</label>
            <input
              type="email"
              id="studentEmail"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseType">Filter by Course Type:</label>
            <select
              id="courseType"
              value={newStudent.selectedCourseType}
              onChange={(e) => handleCourseTypeFilter(e.target.value)}
            >
              <option value="">All Course Types</option>
              {courseTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="courseOffering">Course Offering:</label>
            <select
              id="courseOffering"
              value={newStudent.courseOfferingId}
              onChange={(e) => setNewStudent({ ...newStudent, courseOfferingId: e.target.value })}
              required
            >
              <option value="">Select a Course Offering</option>
              {filteredOfferings.map(offering => (
                <option key={offering.id} value={offering.id}>
                  {getCourseOfferingDetails(offering.id)}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Register Student</button>
        </form>
      </div>

      <div className="card">
        <h3>Registered Students</h3>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Course Offering</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{getCourseOfferingDetails(student.courseOfferingId)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentRegistrations; 