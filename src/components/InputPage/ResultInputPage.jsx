import DeleteAllResult from '../../components/DeleteAllResult';
import ResultForm from '../../components/form/ResultForm';
import GetResult from '../../components/getDataAdmin/GetResult';

const ResultInputPage = ({ resultData, admin }) => {
  return (
    <div>
      <div className='container'>
        <ResultForm />
        <GetResult resultData={resultData} admin={admin} />
        <DeleteAllResult />
      </div>
    </div>
  );
};

export default ResultInputPage;
