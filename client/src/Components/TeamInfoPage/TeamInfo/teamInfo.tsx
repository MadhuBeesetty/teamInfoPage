import React, {useState} from 'react';
import EditPage from '../../EditPage/EditPage';
import IndividualTeamInfo from '../IndividualTeamInfo/IndividualTeamInfo';
import ListPageHeader from '../ListPageHeader/TeamInfoPageHeader';

interface individualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
};

interface TeamInfoProps {
  pageData: individualData[],
  handleShowAddPage: () => void;
}

const TeamInfo: React.FC<TeamInfoProps> = ({pageData, handleShowAddPage}) => {

  const [openEditpage, setOpenEditPage] = useState(false);
  const [tobeEditedEmployeeId, setToBeEditedEmployeeId] = useState("");

  const handleShowEditPage = (employeeId: string) => {
    setToBeEditedEmployeeId(employeeId);
    setOpenEditPage(true);
  };

  return (
    <>
      {openEditpage ?
        <>
          <EditPage individualData={pageData[1]}/>
        </> :
        <>
        <ListPageHeader onAddPageClick={handleShowAddPage}/>
        {pageData.map((individualData, index) => (
          <IndividualTeamInfo key = {index}
          onIndividualTeamInfoClick={handleShowEditPage}
          individualData={individualData}
          employeeId="id"
          />
        ))}
        </>
        }
    </>
  );
}

export default TeamInfo;
