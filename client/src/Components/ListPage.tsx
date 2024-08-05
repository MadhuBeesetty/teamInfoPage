import React, {useState, useEffect} from 'react';
import TeamInfo from '../Components/TeamInfoPage/TeamInfo/teamInfo';
import AddPage from './AddPage/AddPage';
import { pageData } from './samplaeData';

const ListPage = () => {

  useEffect(() => {
    const fetchData = async () => {
    const res = await fetch('http://localhost:3000');
    console.log(res.json(), 'this is mongodb data');
    }
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
