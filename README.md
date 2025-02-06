# Student Management System

This is a student management system that allows users to add, view, update, and delete student, period, and course information. The system is built with React and uses Firebase Firestore as its database.

## Features

- **Student Management**: Add, update, and remove student records.
- **Period Management**: Assign periods to students and manage their details.
- **Course Management**: Assign courses to specific periods and manage assignments.
- **Bulk Data Upload**: Import student data from Excel files for batch additions.

## Technologies Used

- **React**: Library for building user interfaces.
- **Firebase**: Backend platform, using Firestore as the database.
- **XLSX**: Library for handling Excel files.

## Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```sh
   cd student-management-system
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure Firebase:
   - Create a project on [Firebase](https://firebase.google.com/).
   - Add your Firebase configuration details to the project.

5. Start the application:
   ```sh
   npm run dev
   ```

## Usage

### Student Management
Use the `StudentModule` component to add, update, or delete student records.

### Period Management
The `PeriodsManager` component allows you to assign periods to students and manage associated courses.

### Course Management
The `CoursesManager` component enables you to assign courses to specific periods and manage assignments.

### Bulk Student Upload
Use the `UploadStudents` component to import multiple students from an Excel file. Ensure the file contains the required columns (Full Name, Identification Number, Email Address).

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push your changes:
   ```sh
   git push origin feature/new-feature
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
