// src/routes/AppRoutes.tsx

import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../components/loading/LoadingContext";
import PrivateRoute from "../modules/userAuth/components/PrivateRoute";

const Register = lazy(() => import("../components/Register"));
const Home = lazy(() => import("../pages/Home"));
const Courses = lazy(() => import("../pages/Courses"));
const Grades = lazy(() => import("../pages/Grades"));
const Periods = lazy(() => import("../pages/Periods"));
const PeriodCourses = lazy(() => import("../pages/PeriodCourses"));

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Students = lazy(() => import("../pages/Students"));
const Teachers = lazy(() => import("../pages/Teachers"));

const StudentsCourses = lazy(() => import("../pages/StudentsCourses"));
const CourseStudents = lazy(() => import("../pages/CourseStudents"));
const PeriodStudents = lazy(() => import("../pages/PeriodStudents"));

const AppRoutes: React.FC = () => {
  const { loading: authLoading } = useAuth();
  const { setIsLoading, setLoadingText } = useLoading();
  const [initialLoadingComplete, setInitialLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setLoadingText("Cargando pagina");
    setIsLoading(authLoading);
    setInitialLoadingComplete(!authLoading);
    setShowContent(!authLoading);
  }, [authLoading, setIsLoading, setLoadingText]);

  if (!initialLoadingComplete) {
    return null;
  }

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="/students" element={<PrivateRoute element={<Students />} />} />
      <Route path="/students/:id/periods" element={<PrivateRoute element={<StudentsCourses />} />} />
      <Route path="/students/:id/courses" element={<PrivateRoute element={<StudentsCourses />} />} />
      <Route path="/teachers" element={<PrivateRoute element={<Teachers />} />} />
      <Route path="/courses" element={<PrivateRoute element={<Courses />} />} />
      <Route path="/grades" element={<PrivateRoute element={<Grades />} />} />
      <Route path="/periods" element={<PrivateRoute element={<Periods />} />} />
      <Route path="/periods/courses" element={<PrivateRoute element={<Periods />} />} />
      <Route path="/period/:id/courses" element={<PrivateRoute element={<PeriodCourses />} />} />
      <Route path="/period/:id/students" element={<PrivateRoute element={<PeriodStudents />} />} />
      <Route path="/period/:periodId/course/:courseId" element={<PrivateRoute element={<CourseStudents />} />} />
      <Route path="grades/period/:periodId/course/:courseId" element={<PrivateRoute element={<Grades />} />} />
      <Route path="/course/:id/students" element={<PrivateRoute element={<CourseStudents />} />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirigir a la página de inicio */}
    </Routes>
  );

  return <Suspense>{showContent ? routes : null}</Suspense>;
};

export default AppRoutes;
