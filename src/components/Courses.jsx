import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Courses = () => {
  const { courses, addCourse, updateCourse, deleteCourse } = useAppContext();
  const [newCourse, setNewCourse] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCourse.trim()) {
      addCourse({ name: newCourse.trim() });
      setNewCourse('');
    }
  };

  const handleUpdate = (id) => {
    if (editName.trim()) {
      updateCourse(id, { name: editName.trim() });
      setEditingId(null);
      setEditName('');
    }
  };

  return (
    <div>
      <h2>Courses</h2>
      
      <div className="card">
        <h3>Add New Course</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="course">Course Name:</label>
            <input
              type="text"
              id="course"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Course</button>
        </form>
      </div>

      <div className="card">
        <h3>Existing Courses</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>
                  {editingId === course.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    course.name
                  )}
                </td>
                <td>
                  {editingId === course.id ? (
                    <>
                      <button onClick={() => handleUpdate(course.id)}>Save</button>
                      <button onClick={() => {
                        setEditingId(null);
                        setEditName('');
                      }}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => {
                        setEditingId(course.id);
                        setEditName(course.name);
                      }}>Edit</button>
                      <button
                        className="danger"
                        onClick={() => deleteCourse(course.id)}
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

export default Courses; 