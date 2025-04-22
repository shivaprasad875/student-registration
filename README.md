# Student Registration System

A React-based student registration system that allows for the management of course types, courses, course offerings, and student registrations.

## Features

- **Course Types Management**
  - Create, read, update, and delete course types
  - Examples: Individual, Group, Special

- **Courses Management**
  - Create, read, update, and delete courses
  - Examples: Hindi, English, Urdu

- **Course Offerings Management**
  - Create course offerings by associating courses with course types
  - List and manage existing course offerings
  - Update and delete course offerings

- **Student Registrations**
  - Register students for available course offerings
  - View all registered students
  - Filter course offerings by course type

## Technologies Used

- React
- React Router
- Context API for state management
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/student-registration.git
cd student-registration
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
student-registration/
├── src/
│   ├── components/
│   │   ├── CourseTypes.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseOfferings.jsx
│   │   └── StudentRegistrations.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── public/
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
