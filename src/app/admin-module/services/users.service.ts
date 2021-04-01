import {Injectable} from '@angular/core';
import {User} from '../user';
import {LoggingService} from './logging.service';

@Injectable()
export class UserService {

  constructor(
    private loggingService: LoggingService) {
  }

  getUsers() {
    let userList: User[];
    userList = [
      new User(1, 'Arthur', 25),
      new User(2, 'Aray', 35),
      new User(3, 'Dmitry', 21),
      new User(4, 'Stas', 67),
      new User(5, 'Aidana', 123),
      new User(6, 'Zhenya', 52),
    ];
    this.loggingService.log('List of users: ' + userList);

    return userList;
  }
}
