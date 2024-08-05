import React, {useState} from 'react';

interface IndividualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
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

  const onSave = () => {
    // make an api call to add this new data to database;
    console.log(editPageData);
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
      <form>
        <label>First name:</label>
        <input type="text" id="fname" name="fname" value={individualData.firstName} onChange={updateFirstName}/>
        <label>Last name:</label>
        <input type="text" id="lname" name="lname" value={individualData.lastName} onChange={updateLastName}/>
        <label>email:</label>
        <input type="text" id="email" name="email" value={individualData.email} onChange={updateEmail}/>
        <label>phone:</label>
        <input type="text" id="phone" name="phone" value={individualData.phoneNumber} onChange={updatePhoneNumber}/>
        <input type="submit" value="Delete" onClick={onSave}/>
        <input type="submit" value="Save" onClick={onDelete}/>
        </form>
    </div>
  );
}

export default EditPage;
