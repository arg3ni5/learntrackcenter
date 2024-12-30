// src/routes/AppRoutes.tsx

import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PrivateRoute from "../modules/userAuth/components/PrivateRoute";
import PeriodCourses from "../pages/PeriodCourses";
import Loading from "../components/loading/Loading";
import { useLoading } from "../components/loading/LoadingContext";

const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
const Courses = lazy(() => import("../pages/Courses"));
const Grades = lazy(() => import("../pages/Grades"));
const Periods = lazy(() => import("../pages/Periods"));

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Students = lazy(() => import("../pages/Students"));
const Teachers = lazy(() => import("../pages/Teachers"));

const AppRoutes: React.FC = () => {
  const { loading: authLoading } = useAuth();
  const { setIsLoading } = useLoading();
  const [initialLoadingComplete, setInitialLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (authLoading) {
      setIsLoading(true);
    } else {
      timer = setTimeout(() => {
        setIsLoading(false);
        setInitialLoadingComplete(true);
        setShowContent(true)
      }, 2000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [authLoading, setIsLoading]);

  if (!initialLoadingComplete) {
    return null;
  }

  const routes = (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/students" element={<PrivateRoute element={<Students />} />} />
        <Route path="/teachers" element={<PrivateRoute element={<Teachers />} />} />
        <Route path="/courses" element={<PrivateRoute element={<Courses />} />} />
        <Route path="/grades" element={<PrivateRoute element={<Grades />} />} />
        <Route path="/periods" element={<PrivateRoute element={<Periods />} />} />
        <Route path="/periods/courses" element={<PrivateRoute element={<Periods />} />} />
        <Route path="/periods/:id/courses" element={<PrivateRoute element={<PeriodCourses />} />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirigir a la página de inicio */}
      </Routes>
  );

  return (
    <Suspense fallback={<Loading>Cargando componente...</Loading>}>
      {showContent ? routes : null}
    </Suspense>
  );
};

export default AppRoutes;

