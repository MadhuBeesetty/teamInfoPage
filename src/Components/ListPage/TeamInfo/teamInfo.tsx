import React, {useState} from 'react';
import EditPage from '../../EditPage/EditPage';
import {StyledDiv} from './styled';

interface individualData {
  name: string;
  phoneNumber: string;
  email: string;
}

const TeamInfo = (individualData: individualData) => {

  const [openEditpage, setOpenEditPage] = useState(false);

  return (
    <>
      {openEditpage ?
      <>
        (<EditPage />)
      </> :
        (<>
          <StyledDiv onClick={() => setOpenEditPage(true)}>
            <p>
              {individualData.name}
            </p>
            <p>
              {individualData.phoneNumber}
            </p>
            <p>
              {individualData.email}
            </p>
          </StyledDiv>
        </>)
        }
    </>
  );
}

export default TeamInfo;
