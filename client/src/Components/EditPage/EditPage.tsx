import React, {useState} from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 200px;
  width: 250px;
  border: 1px solid black;
`;

interface IndividualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
  _id: string;
}

interface EditPageProps {
  individualData: IndividualData;
}

const EditPage: React.FC<EditPageProps> = ({individualData}) => {

  const [editPageData, setEditPageData] = useState<IndividualData>(individualData);

  const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => setEditPageData({ ...editPageData, firstName: e.target.value });
  const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => setEditPageData({ ...editPageData, lastName: e.target.value });
  const updatePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => setEditPageData({ ...editPageData, phoneNumber: e.target.value });
  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEditPageData({ ...editPageData, email: e.target.value });

  const onSave = async (e: React.FormEvent)  => {
    // make an api call to add this new data to database;
    try {
      const response = await fetch(`http://localhost:3000/updateTeamInfo/${individualData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editPageData)
      });

      if (response.ok) {
        const updatedData = await response.json();
        onSave(updatedData);
      } else {
        console.error('Error updating data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onDelete = () => {
    if(individualData.employeeStatus === "admin"){
      console.log("this person can delete data");
    }
    // make an api call to add this new data to database;
    console.log(editPageData);
  };

  return (
    <div>
      <h2>
          Edit team member
        </h2>
        <p>
          Edit contact info, location and role.
        </p>
        <>Info</>
        <br></br>
        <StyledDiv>
      <form>
        <label>First name:</label>
        <input type="text" id="fname" name="fname" value={editPageData.firstName} onChange={updateFirstName}/>
        <br></br>
       <label>Last name:</label>
        <input type="text" id="lname" name="lname" value={editPageData.lastName} onChange={updateLastName}/>
        <br></br>
        <label>email:</label>
        <input type="text" id="email" name="email" value={editPageData.email} onChange={updateEmail}/>
        <br></br>
        <label>phone:</label>
        <input type="text" id="phone" name="phone" value={editPageData.phoneNumber} onChange={updatePhoneNumber}/>
        <br></br>
        <input type="submit" value="save" onClick={onSave}/>
        <br></br>
        <input type="submit" value="delete" onClick={onDelete}/>
        </form>
        </StyledDiv>
    </div>
  );
}

export default EditPage;
