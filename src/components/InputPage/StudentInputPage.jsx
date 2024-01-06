import StudentForm from '../../components/form/StudentForm';
import StudentsPage from '../../pages/StudentsPage';

const StudentInputPage = ({ studentData, admin }) => {
  return (
    <div>
      <div className='container'>
        <StudentForm />
        <StudentsPage studentData={studentData} admin={admin} />
      </div>
    </div>
  );
};

export default StudentInputPage;
