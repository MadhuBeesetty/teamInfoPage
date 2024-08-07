import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 200px;
  width: 350px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface IndividualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
}

const inputData: IndividualData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  employeeStatus: "regular"
};

const AddPage = () => {
  const [addPageData, setAddPageData] = useState<IndividualData>(inputData);

  const addData = async (pageData: IndividualData) => {
    try {
      const res = await fetch('http://localhost:3000/saveTeamInfoData', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pageData)
      });
      const data = await res.json();
      console.log(data, 'this is new added data');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddPageData({
      ...addPageData,
      [name]: value
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addData(addPageData);
  };

  const fields = [
    { label: "First name:", id: "fname", name: "firstName" },
    { label: "Last name:", id: "lname", name: "lastName" },
    { label: "Email:", id: "email", name: "email" },
    { label: "Phone:", id: "phone", name: "phoneNumber" }
  ];

  return (
    <div>
      <h2>Add a team member</h2>
      <p>Set email, location and role.</p>
      <>Info</>
      <StyledDiv>
        <form onSubmit={onSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type="text"
                id={field.id}
                name={field.name}
                value={addPageData[field.name as keyof IndividualData]}
                onChange={handleChange}
              />
              <br />
            </div>
          ))}
          <>Role</>
          <br />
          <input
            type="radio"
            id="regular"
            name="employeeStatus"
            value="regular"
            checked={addPageData.employeeStatus === "regular"}
            onChange={handleChange}
          />
          <label htmlFor="regular">Regular - Can't delete members</label>
          <br />
          <input
            type="radio"
            id="admin"
            name="employeeStatus"
            value="admin"
            checked={addPageData.employeeStatus === "admin"}
            onChange={handleChange}
          />
          <label htmlFor="admin">Admin - Can delete members</label>
          <br />
          <button type="submit">Save</button>
        </form>
      </StyledDiv>
    </div>
  );
}

export default AddPage;
