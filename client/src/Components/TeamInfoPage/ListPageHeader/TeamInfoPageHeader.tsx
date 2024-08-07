import React from 'react';
import styled from 'styled-components';

interface ListPageHeaderProps {
  onAddPageClick: () => void;
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 365px;
  height: 100px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const AddButton = styled.button`
  font-size: 15px;
  padding: 10px;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
`;

const ListPageHeader: React.FC<ListPageHeaderProps> = ({ onAddPageClick }) => {
  return (
    <HeaderContainer>
      <AddButton type="button" onClick={onAddPageClick}>+</AddButton>
      <Header>Team Members</Header>
      <Description>You have 3 team members</Description>
    </HeaderContainer>
  );
}

export default ListPageHeader;
