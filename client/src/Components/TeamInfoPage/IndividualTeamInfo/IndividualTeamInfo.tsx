import React from 'react';
import styled from 'styled-components';

interface IndividualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
}

interface IndividualTeamInfoHeaderProps {
  onIndividualTeamInfoClick: (employeeId: string) => void;
  individualData: IndividualData;
  employeeId: string;
}

const StyledDiv = styled.div`
  height: auto;
  width: 350px;
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e9e9e9;
    transform: translateY(-2px);
  }
`;

const InfoParagraph = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #333;
`;

const IndividualTeamInfo: React.FC<IndividualTeamInfoHeaderProps> = ({ onIndividualTeamInfoClick, individualData, employeeId }) => {
  return (
    <StyledDiv onClick={() => onIndividualTeamInfoClick(employeeId)}>
      <InfoParagraph>{individualData.firstName}</InfoParagraph>
      <InfoParagraph>{individualData.lastName}</InfoParagraph>
      <InfoParagraph>{individualData.phoneNumber}</InfoParagraph>
      <InfoParagraph>{individualData.email}</InfoParagraph>
    </StyledDiv>
  );
}

export default IndividualTeamInfo;
