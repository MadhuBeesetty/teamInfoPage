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
  _id: string;
};

interface TeamInfoProps {
  pageData: individualData[],
  handleShowAddPage: () => void;
}

const TeamInfo: React.FC<TeamInfoProps> = ({pageData, handleShowAddPage}) => {

  const [openEditpage, setOpenEditPage] = useState(false);
  const [tobeEditedEmployeeId, setToBeEditedEmployeeId] = useState<string | null>(null);

  const handleShowEditPage = (employeeId: string) => {
    setToBeEditedEmployeeId(employeeId);
    setOpenEditPage(true);
  };

  const employeeToEdit = pageData.find(employee => employee._id === tobeEditedEmployeeId);

  return (
    <>
      {openEditpage && employeeToEdit ?
          <EditPage individualData={employeeToEdit}/> :
        <>
        <ListPageHeader onAddPageClick={handleShowAddPage}/>
        {pageData.map((individualData) => (
          <IndividualTeamInfo key = {individualData._id}
          onIndividualTeamInfoClick={handleShowEditPage}
          individualData={individualData}
          employeeId={individualData._id}
          />
        ))}
        </>
        }
    </>
  );
}

export default TeamInfo;
