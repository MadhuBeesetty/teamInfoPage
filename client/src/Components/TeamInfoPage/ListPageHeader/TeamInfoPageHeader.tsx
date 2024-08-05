import React from 'react';

interface ListPageHeaderProps {
  onAddPageClick: () => void;
}

const ListPageHeader: React.FC<ListPageHeaderProps> = ({onAddPageClick}) => {

  return (
    <div>
      <>
        <button type="button" onClick = {onAddPageClick}>"+"</button>
        <header>Team memebers</header>
        <p>
        you have 3 team members
        </p>
      </>
    </div>
  );
}

export default ListPageHeader;
