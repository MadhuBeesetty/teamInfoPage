import React, {useState} from 'react';
import TeamInfo from '../Components/TeamInfoPage/TeamInfo/teamInfo';
import AddPage from './AddPage/AddPage';
import { pageData } from './samplaeData';

const ListPage = () => {

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
