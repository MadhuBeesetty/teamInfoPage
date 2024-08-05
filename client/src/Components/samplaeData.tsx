interface individualData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  employeeStatus: string;
};

export interface PageData {
    [key: string]: individualData;
  }

export const pageData: PageData =
  {
    "employee1": {
      firstName: "employee1",
      lastName: "lemployee1",
      phoneNumber: "1234",
      email: "employee1@email.com",
      employeeStatus: "regular"
    },
    "employee2": {
      firstName: "employee2",
      lastName: "lemployee2",
      phoneNumber: "1234",
      email: "employee1@email.com",
      employeeStatus: "regular"
    },
    "employee3": {
      firstName: "employee3",
      lastName: "lemployee3",
      phoneNumber: "1234",
      email: "employee1@email.com",
      employeeStatus: "regular"
    }
  };
