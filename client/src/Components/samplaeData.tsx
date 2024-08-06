interface individualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
};

export interface PageData {
    teamInfo: individualData[];
  }

export const pageData: PageData =
  { "teamInfo": [
    {
      firstName: "employee1",
      lastName: "lemployee1",
      phoneNumber: "1234",
      email: "employee1@email.com",
      employeeStatus: "regular"
    },
    {
      firstName: "employee2",
      lastName: "lemployee2",
      phoneNumber: "1234",
      email: "employee1@email.com",
      employeeStatus: "regular"
    },
   {
      firstName: "employee3",
      lastName: "lemployee3",
      phoneNumber: "1234",
      email: "employee1@email.com",
      employeeStatus: "regular"
    }
  ]

  };
