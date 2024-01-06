import NoticeForm from '../../components/form/NoticeForm';
import GetNotice from '../../components/getDataAdmin/GetNotice';

const NoticeInputPage = ({ noticeData, admin }) => {
  return (
    <div>
      <div className='container'>
        <NoticeForm />
        <GetNotice noticeData={noticeData} admin={admin} />
      </div>
    </div>
  );
};

export default NoticeInputPage;
