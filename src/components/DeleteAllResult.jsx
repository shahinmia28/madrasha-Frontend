import API from './Api';

const DeleteAllResult = () => {
  const deleteHandler = async (e) => {
    alert('Are You sure to delete all result data from server');

    if (alert) {
      await fetch(`${API}/delete_all_result`, {
        method: 'DELETE',
      }).then(async (res) => {
        let response = await res.json();
        if (response.success) {
          alert('All Result Data is deleted');
          window.location.reload();
        }
      });
    }
  };
  return (
    <div>
      <div className='container'>
        <div className='delete-data'>
          <p>Click The Bellow Button to Delete All Result Data From Server</p>
        </div>
        <button className='btn btn-danger' onClick={() => deleteHandler()}>
          Delete All Result
        </button>
      </div>
    </div>
  );
};

export default DeleteAllResult;
