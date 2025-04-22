import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './App.css';

// Import components (we'll create these next)
import CourseTypes from './components/CourseTypes';
import Courses from './components/Courses';
import CourseOfferings from './components/CourseOfferings';
import StudentRegistrations from './components/StudentRegistrations';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <ul>
              <li><Link to="/course-types">Course Types</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/course-offerings">Course Offerings</Link></li>
              <li><Link to="/student-registrations">Student Registrations</Link></li>
            </ul>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/course-types" element={<CourseTypes />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course-offerings" element={<CourseOfferings />} />
              <Route path="/student-registrations" element={<StudentRegistrations />} />
              <Route path="/" element={<CourseTypes />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App; 