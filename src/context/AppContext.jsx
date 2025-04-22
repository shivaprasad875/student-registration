import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [students, setStudents] = useState([]);

  const addCourseType = (courseType) => {
    setCourseTypes([...courseTypes, { id: Date.now(), ...courseType }]);
  };

  const updateCourseType = (id, updatedCourseType) => {
    setCourseTypes(courseTypes.map(type => 
      type.id === id ? { ...type, ...updatedCourseType } : type
    ));
  };

  const deleteCourseType = (id) => {
    setCourseTypes(courseTypes.filter(type => type.id !== id));
  };

  const addCourse = (course) => {
    setCourses([...courses, { id: Date.now(), ...course }]);
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, ...updatedCourse } : course
    ));
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const addCourseOffering = (offering) => {
    setCourseOfferings([...courseOfferings, { id: Date.now(), ...offering }]);
  };

  const updateCourseOffering = (id, updatedOffering) => {
    setCourseOfferings(courseOfferings.map(offering => 
      offering.id === id ? { ...offering, ...updatedOffering } : offering
    ));
  };

  const deleteCourseOffering = (id) => {
    setCourseOfferings(courseOfferings.filter(offering => offering.id !== id));
  };

  const registerStudent = (registration) => {
    setStudents([...students, { id: Date.now(), ...registration }]);
  };

  return (
    <AppContext.Provider value={{
      courseTypes,
      courses,
      courseOfferings,
      students,
      addCourseType,
      updateCourseType,
      deleteCourseType,
      addCourse,
      updateCourse,
      deleteCourse,
      addCourseOffering,
      updateCourseOffering,
      deleteCourseOffering,
      registerStudent
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 