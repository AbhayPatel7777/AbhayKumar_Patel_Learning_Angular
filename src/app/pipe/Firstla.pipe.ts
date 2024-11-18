import {Pipe, PipeTransform} from "@angular/core";
import {User} from "../../share/models/User";

@Pipe({
  name :'FirstLa',
  standalone : true
})
export class FirstlaPipe implements PipeTransform{
  transform(user: User): string {
    return `${user.firstName} ${user.lastName}`
  }
}
