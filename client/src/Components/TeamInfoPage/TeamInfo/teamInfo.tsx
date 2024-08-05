import React, {useState} from 'react';
import EditPage from '../../EditPage/EditPage';
import IndividualTeamInfo from '../IndividualTeamInfo/IndividualTeamInfo';
import ListPageHeader from '../ListPageHeader/TeamInfoPageHeader';
import { PageData } from '../../samplaeData';

interface TeamInfoProps {
  pageData: PageData,
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
          <EditPage individualData={pageData[tobeEditedEmployeeId]}/>
        </> :
        <>
        <ListPageHeader onAddPageClick={handleShowAddPage}/>
        {Object.keys(pageData).map(key =>(
          <IndividualTeamInfo key={key}
          onIndividualTeamInfoClick={handleShowEditPage}
          individualData={pageData[key]}
          employeeId={key}
          />
        ))}
        </>
        }
    </>
  );
}

export default TeamInfo;
