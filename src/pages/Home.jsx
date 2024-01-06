import HeadTeachersSpeech from '../components/HeadTeachersSpeech';
import Hero from '../components/Hero';
import History from '../components/History';
import News from '../components/News';
import Notice from '../components/Notice';
import Students from '../components/Students';

const Home = ({ noticeData, studentData }) => {
  return (
    <div>
      <Hero />
      <News noticeData={noticeData} />
      <History />
      <HeadTeachersSpeech />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <Students studentData={studentData} />
          </div>
          <div className='col-12 col-lg-6'>
            <Notice noticeData={noticeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
