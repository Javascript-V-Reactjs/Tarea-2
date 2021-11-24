import "./App.css";
// import { students } from "./studentsList";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import StudentList from "./routes/StudentList";
import StudentForm from "./routes/StudentForm";
import Student from "./routes/Student";
import { Routes, Route } from "react-router-dom";
import AlertTag from "./components/AlertTag";
import useAlert from "./hooks/useAlert";

export default function App() {
  const { type, message, isOpened , position } = useAlert();

  return (
    <Layout>
      <Navbar />
      <AlertTag isOpened={isOpened} type={type} message={message} position={position}/>
      <Routes>
        <Route path="/" element={<StudentList hoverable />} />
        <Route path="/addStudent" element={<StudentForm />} />
        <Route path="/student/:StudentId" element={<Student />} />
      </Routes>

      <Footer />
    </Layout>
  );
}

