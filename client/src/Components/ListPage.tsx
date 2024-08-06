import React, {useState, useEffect } from 'react';
import TeamInfo from '../Components/TeamInfoPage/TeamInfo/teamInfo';
import AddPage from './AddPage/AddPage';

interface IndividualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
  _id: string;
}

interface listPageData {
  teamInfo : IndividualData[];
}

const intialEmptyData: listPageData = {"teamInfo" :[{
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  employeeStatus: "",
  _id: ""
}]
};

const ListPage: React.FC = () => {

  const [listPageData, updatelistPageData] = useState<listPageData>(intialEmptyData);
  const [showAddPage, setShowAddPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/fetchTeamInfoData');
      const data = await res.json();
      updatelistPageData({ teamInfo: data.teamInfo });
    } catch(error){
      console.error('Error fetching data:', error);
    }
  };

    fetchData();
  }, [])

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
            <TeamInfo handleShowAddPage={handleShowAddPage} pageData={listPageData.teamInfo}/>
        </>
      }

    </div>
  );
}

export default ListPage;
