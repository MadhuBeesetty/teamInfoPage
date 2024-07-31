import React, {useState} from 'react';
import TeamInfo from './TeamInfo/teamInfo';
import ListPageHeader from './ListPageHeader/ListPageHeader';
import AddPage from '../AddPage/AddPage';

interface individualData {
  name: string;
  phoneNumber: string;
  email: string;
}

const data: individualData =
  {
    name: "employee1",
    phoneNumber: "1234",
    email: "employee1@email.com"
  };

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
      <ListPageHeader onAddPageClick={handleShowAddPage}/>
      <header>
        <TeamInfo {...data}/>
      </header>
      </>
      }

    </div>
  );
}

export default ListPage;
