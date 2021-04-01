import {LoggingService} from './logging.service';
import {Group} from '../group';
import {Injectable} from '@angular/core';

@Injectable()
export class GroupService{

  constructor(
    private loggingService: LoggingService) {
  }

  getGroup() {
    let groupList: Group[];
    groupList = [
      new Group(1, 'Student', '5'),
      new Group(2, 'Profecor', '4'),
      new Group(3, 'Vip', '2')

    ];
    this.loggingService.log('List of users: ' + groupList);

    return groupList;
  }
}
