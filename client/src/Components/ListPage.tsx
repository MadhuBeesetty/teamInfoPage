import React, {useState, useEffect} from 'react';
import TeamInfo from '../Components/TeamInfoPage/TeamInfo/teamInfo';
import AddPage from './AddPage/AddPage';
import { pageData } from './samplaeData';

const ListPage = () => {

  useEffect(() => {
    const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/mongocall');
      const data = await res.json();
      console.log(data, 'this is mongodb data');
    } catch(error){
      console.error('Error fetching data:', error);
    }
  };

    fetchData();
  }, [])

  const [showAddPage, setShowAddPage] = useState(false)
  const handleShowAddPage = () => {
    setShowAddPage(true);
  };

  return (
    <div>
      {showAddPage ?
      <>
      <AddPage />
      </> :
        <>
            <TeamInfo handleShowAddPage={handleShowAddPage} pageData={pageData}/>
        </>
      }

    </div>
  );
}

export default ListPage;
