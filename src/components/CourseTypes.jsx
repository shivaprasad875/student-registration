import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const CourseTypes = () => {
  const { courseTypes, addCourseType, updateCourseType, deleteCourseType } = useAppContext();
  const [newCourseType, setNewCourseType] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCourseType.trim()) {
      addCourseType({ name: newCourseType.trim() });
      setNewCourseType('');
    }
  };

  const handleUpdate = (id) => {
    if (editName.trim()) {
      updateCourseType(id, { name: editName.trim() });
      setEditingId(null);
      setEditName('');
    }
  };

  return (
    <div>
      <h2>Course Types</h2>
      
      <div className="card">
        <h3>Add New Course Type</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseType">Course Type Name:</label>
            <input
              type="text"
              id="courseType"
              value={newCourseType}
              onChange={(e) => setNewCourseType(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Course Type</button>
        </form>
      </div>

      <div className="card">
        <h3>Existing Course Types</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseTypes.map((type) => (
              <tr key={type.id}>
                <td>
                  {editingId === type.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    type.name
                  )}
                </td>
                <td>
                  {editingId === type.id ? (
                    <>
                      <button onClick={() => handleUpdate(type.id)}>Save</button>
                      <button onClick={() => {
                        setEditingId(null);
                        setEditName('');
                      }}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => {
                        setEditingId(type.id);
                        setEditName(type.name);
                      }}>Edit</button>
                      <button
                        className="danger"
                        onClick={() => deleteCourseType(type.id)}
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

export default CourseTypes; 