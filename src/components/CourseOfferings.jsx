import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const CourseOfferings = () => {
  const {
    courseTypes,
    courses,
    courseOfferings,
    addCourseOffering,
    updateCourseOffering,
    deleteCourseOffering
  } = useAppContext();

  const [newOffering, setNewOffering] = useState({
    courseId: '',
    courseTypeId: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [editOffering, setEditOffering] = useState({
    courseId: '',
    courseTypeId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newOffering.courseId && newOffering.courseTypeId) {
      addCourseOffering(newOffering);
      setNewOffering({ courseId: '', courseTypeId: '' });
    }
  };

  const handleUpdate = (id) => {
    if (editOffering.courseId && editOffering.courseTypeId) {
      updateCourseOffering(id, editOffering);
      setEditingId(null);
      setEditOffering({ courseId: '', courseTypeId: '' });
    }
  };

  const getCourseName = (courseId) => {
    const course = courses.find(c => c.id === courseId);
    return course ? course.name : 'Unknown Course';
  };

  const getCourseTypeName = (courseTypeId) => {
    const courseType = courseTypes.find(ct => ct.id === courseTypeId);
    return courseType ? courseType.name : 'Unknown Type';
  };

  return (
    <div>
      <h2>Course Offerings</h2>
      
      <div className="card">
        <h3>Add New Course Offering</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              value={newOffering.courseId}
              onChange={(e) => setNewOffering({ ...newOffering, courseId: e.target.value })}
              required
            >
              <option value="">Select a Course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="courseType">Course Type:</label>
            <select
              id="courseType"
              value={newOffering.courseTypeId}
              onChange={(e) => setNewOffering({ ...newOffering, courseTypeId: e.target.value })}
              required
            >
              <option value="">Select a Course Type</option>
              {courseTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Add Course Offering</button>
        </form>
      </div>

      <div className="card">
        <h3>Existing Course Offerings</h3>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Course Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseOfferings.map((offering) => (
              <tr key={offering.id}>
                <td>
                  {editingId === offering.id ? (
                    <select
                      value={editOffering.courseId}
                      onChange={(e) => setEditOffering({ ...editOffering, courseId: e.target.value })}
                    >
                      {courses.map(course => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    getCourseName(offering.courseId)
                  )}
                </td>
                <td>
                  {editingId === offering.id ? (
                    <select
                      value={editOffering.courseTypeId}
                      onChange={(e) => setEditOffering({ ...editOffering, courseTypeId: e.target.value })}
                    >
                      {courseTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    getCourseTypeName(offering.courseTypeId)
                  )}
                </td>
                <td>
                  {editingId === offering.id ? (
                    <>
                      <button onClick={() => handleUpdate(offering.id)}>Save</button>
                      <button onClick={() => {
                        setEditingId(null);
                        setEditOffering({ courseId: '', courseTypeId: '' });
                      }}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => {
                        setEditingId(offering.id);
                        setEditOffering({
                          courseId: offering.courseId,
                          courseTypeId: offering.courseTypeId
                        });
                      }}>Edit</button>
                      <button
                        className="danger"
                        onClick={() => deleteCourseOffering(offering.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseOfferings; 