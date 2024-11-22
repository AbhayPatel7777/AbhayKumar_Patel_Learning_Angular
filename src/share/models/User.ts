export interface User{
  id: number,
  firstName: string,
  lastName: string,
  date : Date;
  department: string,
  budget : number;
  isAdmin?: boolean,
  PhoneNumber: number,
  images : string
}
