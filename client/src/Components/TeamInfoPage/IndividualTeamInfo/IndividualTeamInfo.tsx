import React from 'react';
import {StyledDiv} from './styled';

interface individualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
}

interface IndividualTeamInfoHeaderProps {
  onIndividualTeamInfoClick: (employeeId: string) => void;
  individualData: individualData;
  employeeId: string;
}

const IndividualTeamInfo: React.FC<IndividualTeamInfoHeaderProps>  = ({onIndividualTeamInfoClick, individualData, employeeId}) => {

  return (
    <div>
          <StyledDiv onClick={() => onIndividualTeamInfoClick(employeeId)}>
            <p>
              {individualData.firstName}
            </p>
            <p>
              {individualData.lastName}
            </p>
            <p>
              {individualData.phoneNumber}
            </p>
            <p>
              {individualData.email}
            </p>
          </StyledDiv>
    </div>
  );
}

export default IndividualTeamInfo;
