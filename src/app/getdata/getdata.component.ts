import { AppService } from '../app.service';
import {
  Component,
  OnInit,
} from '@angular/core';
import { User } from '../models/user.model';
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css'],
})
export class GetdataComponent implements OnInit {
  public Users: User[];
  public temp: any[] = new Array(3);
  constructor(
    public appService: AppService,
  ) {
    for (let i = 0; i < 3; i++) {
      this.temp[i] = {
        id: i + 1,
        value: 0,
      };
    }
  }
  ngOnInit(): void {
  }

  onItemIncrement(id) {
    this.temp = this.temp.filter(a => {
      a.id == id ? a.value++ : a.value;
      return a;
    })
    console.log(this.temp);

  }
  onItemDecrement(id) {
    this.temp = this.temp.filter(a => {
      a.id == id ? a.value-- : a.value;
      return a;
    })
    console.log(this.temp);
  }

  onItemRemove(id) {
    this.temp = this.temp.filter(a => {
      return a.id != id;
    });

  }
}
