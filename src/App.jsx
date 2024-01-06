import React, { useCallback, useEffect, useState } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-custom-alert/dist/index.css';
import { ToastContainer } from 'react-custom-alert';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';
import GoTop from './components/GoTop';

import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';

import API from './components/Api';
import NoticeUpdateForm from './components/updateForm/NoticeUpdateForm';
import ResultPage from './pages/ResultPage';
import ResultUpdateForm from './components/updateForm/ResultUpdateForm';
import StaffPage from './pages/StaffPage';
import StaffUpdateForm from './components/updateForm/StaffUpdateForm';
import StudentsPage from './pages/StudentsPage';
import StudentUpdateForm from './components/updateForm/StudentUpdateForm';
import NoticePage from './pages/NoticePage';

import jwt_decode from 'jwt-decode';

function App() {
  // Notice data get start
  const [noticeData, setNoticeData] = useState();

  const fetchNotice = async () => {
    await fetch(`${API}/get_notice`, {
      method: 'GET',
    }).then(async (res) => {
      let response = await res.json();
      await setNoticeData(response.data);
    });
  };
  // Notice data get end

  // Notice data get start
  const [resultData, setResultData] = useState();

  const fetchResult = async () => {
    await fetch(`${API}/get_result`, {
      method: 'GET',
    }).then(async (res) => {
      let response = await res.json();
      await setResultData(response.data);
    });
  };
  // Notice data get end

  //  Student data get start
  const [studentData, setStudentData] = useState();

  const fetchStudent = async () => {
    await fetch(`${API}/get_student`, {
      method: 'GET',
    }).then(async (res) => {
      let response = await res.json();
      await setStudentData(response.data);
    });
  };
  //  Student data get end
  //  Staff data get start
  const [staffData, setStaffData] = useState();

  const fetchStaff = async () => {
    await fetch(`${API}/get_staff`, {
      method: 'GET',
    }).then(async (res) => {
      let response = await res.json();
      await setStaffData(response.data);
    });
  };
  //  Staff data get end

  useEffect(() => {
    fetchNotice();
    fetchStudent();
    fetchResult();
    fetchStaff();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let accessToken;
  let admin;
  if (localStorage.getItem('authToken')) {
    accessToken = jwt_decode(localStorage.getItem('authToken'));
    admin = accessToken.user.isAdmin;
  }
  return (
    <Router>
      <Header admin={admin} />
      <Routes>
        <Route
          path='/'
          exact
          element={<Home noticeData={noticeData} studentData={studentData} />}
        />
        <Route
          path='/staff'
          element={<StaffPage staffData={staffData} admin={admin} />}
        />
        <Route
          path='/studentpage'
          element={<StudentsPage studentData={studentData} admin={admin} />}
        />
        <Route
          path='/notice'
          element={<NoticePage noticeData={noticeData} />}
        />

        <Route
          path='/result'
          element={<ResultPage resultData={resultData} />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        {admin === true ? (
          <>
            <Route
              path='/admin'
              element={
                <Admin
                  studentData={studentData}
                  staffData={staffData}
                  resultData={resultData}
                  noticeData={noticeData}
                  admin={admin}
                />
              }
            />
            {/* update form */}
            <Route path='/noticeupdate' element={<NoticeUpdateForm />} />
            <Route path='/resultupdate' element={<ResultUpdateForm />} />
            <Route path='/staffupdate' element={<StaffUpdateForm />} />
            <Route path='/studentupdate' element={<StudentUpdateForm />} />
          </>
        ) : (
          ''
        )}
      </Routes>
      <Footer />
      <CopyRight />
      <GoTop />
      <ToastContainer floatingTime={5000} />
    </Router>
  );
}

export default App;
