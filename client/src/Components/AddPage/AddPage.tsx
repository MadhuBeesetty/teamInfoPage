import React, {useState} from 'react';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 200px;
  width: 350px;
  border: 1px solid black;
`;

interface IndividualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
}

const inputData: IndividualData =
  {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    employeeStatus: "regular"
  };

const AddPage = () => {


const addData = async (pageData: IndividualData) => {
  try {
    const res = await fetch('http://localhost:3000/saveTeamInfoData',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pageData)
    });
    const data = await res.json();
    console.log(data, 'this is new added data');
  } catch(error){
    console.error('Error fetching data:', error);
  }
};

const [addPageData, setAddPageData] = useState<IndividualData>(inputData)

const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, firstName: e.target.value });
const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, lastName: e.target.value });
const updatePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, phoneNumber: e.target.value });
const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, email: e.target.value });
const updateEmployeeType = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({...addPageData, employeeStatus: e.target.value});
console.log(addPageData)
const onSubmit = () => {
  addData(addPageData);
  console.log(addPageData);
  setTimeout(function(){
    alert("I am setTimeout");
},100000);
}

  return (
    <div>
        <h2>
          Add a team member
        </h2>
        <p>
          Set email, location and role.
        </p>
        <>Info</>
        <StyledDiv>
          <form>
          <label>First name:</label>
          <input type="text" id="fname" name="fname" onChange={updateFirstName}/>
          <br></br>
          <label>Last name:</label>
          <input type="text" id="lname" name="lname" onChange={updateLastName}/>
          <br></br>
          <label>email:</label>
          <input type="text" id="email" name="email" onChange={updateEmail}/>
          <br></br>
          <label>phone:</label>
          <input type="text" id="phone" name="phone" onChange={updatePhoneNumber}/>
          <br></br>
          <>Role</>
          <br></br>
          <input type="radio" value="regular" checked={addPageData.employeeStatus === "regular"} onChange={updateEmployeeType}/>
          <label >Regular - Can't delete members</label>
           <br></br>
          <input type="radio" value="admin" checked={addPageData.employeeStatus === "admin"} onChange={updateEmployeeType}/>
          <label >Admin - Can delete members</label>
          <br></br>
          <input type="submit" value="Save" onClick={onSubmit}/>
          </form>
        </StyledDiv>
    </div>
  );
}

export default AddPage;
