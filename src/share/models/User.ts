export interface User{

  id: number,
  firstName: string,
  lastName: string,
  date : Date;
  DepartmentBudget: string;
  isAdmin?: boolean,
  PhoneNumber: number,
  images : string
}
