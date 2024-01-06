import Notice from '../components/Notice';

const NoticePage = ({ noticeData }) => {
  return (
    <div>
      <div className='container'>
        <Notice noticeData={noticeData} />
      </div>
    </div>
  );
};

export default NoticePage;
