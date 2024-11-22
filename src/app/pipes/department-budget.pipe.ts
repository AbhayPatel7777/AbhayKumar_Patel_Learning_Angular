import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../../share/models/User";

@Pipe({
  name: 'departmentBudget',
  standalone: true
})
export class DepartmentBudgetPipe implements PipeTransform {

  transform(userlist: User): String {
    return `${userlist.department} ${userlist.budget}`;
  }

}
