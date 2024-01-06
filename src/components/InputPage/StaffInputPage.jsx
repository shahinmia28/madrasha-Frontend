import StaffForm from '../../components/form/StaffForm';
import GetStaff from '../../components/getDataAdmin/GetStaff';

const StaffInputPage = ({ staffData, admin }) => {
  return (
    <div>
      <div className='container'>
        <StaffForm />
        <GetStaff staffData={staffData} admin={admin} />
      </div>
    </div>
  );
};

export default StaffInputPage;
