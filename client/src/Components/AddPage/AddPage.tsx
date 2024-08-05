import React, {useState, useEffect} from 'react';

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

  useEffect(() => {
    const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/saveTeamInfoData');
      const data = await res.json();
      console.log(data, 'this is mongodb data');
    } catch(error){
      console.error('Error fetching data:', error);
    }
  };

    fetchData();
  }, [])

const [addPageData, setAddPageData] = useState<IndividualData>(inputData)

const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, firstName: e.target.value });
const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, lastName: e.target.value });
const updatePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, phoneNumber: e.target.value });
const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({ ...addPageData, email: e.target.value });
const updateEmployeeType = (e: React.ChangeEvent<HTMLInputElement>) => setAddPageData({...addPageData, employeeStatus: e.target.value});

const onSubmit = () => {
  // make an api call to add this new data to database;
  console.log(addPageData);
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
        <form>
        <label>First name:</label>
        <input type="text" id="fname" name="fname" onChange={updateFirstName}/>
        <label>Last name:</label>
        <input type="text" id="lname" name="lname" onChange={updateLastName}/>
        <label>email:</label>
        <input type="text" id="email" name="email" onChange={updateEmail}/>
        <label>phone:</label>
        <input type="text" id="phone" name="phone" onChange={updatePhoneNumber}/>
        <>Role</>
        <input type="radio" value="regular" checked={addPageData.employeeStatus === "regular"} onChange={updateEmployeeType}/>
        <label >Regular - Can't delete members</label>
        <input type="radio" value="admin" checked={addPageData.employeeStatus === "admin"} onChange={updateEmployeeType}/>
        <label >Admin - Can delete members</label>
        <input type="submit" value="Save" onClick={onSubmit}/>
        </form>
    </div>
  );
}

export default AddPage;
