import { AppService } from '../app.service';
import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver, AfterViewInit
} from '@angular/core';
import { User } from '../models/user.model';
import { NumberComponent } from '../number/number.component';
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css'],
})
export class GetdataComponent implements OnInit, AfterViewInit {
  @ViewChild("vf", { read: ViewContainerRef })
  vf: ViewContainerRef
  public Users: User[];
  public temp: any[] = new Array(3);
  constructor(
    public appService: AppService,
    public componentFactoryResolver: ComponentFactoryResolver,
  ) {
    for (let i = 0; i < 3; i++) {
      this.temp[i] = {
        id: i + 1,
        value: 0
      };
    }
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    for (let i = 0; i < 3; i++) {
      this.createComponentController(i);
    }
  }

  createComponentController(i = (this.temp.length - 1)) {
    console.log("create : " + i);

    let resolver = this.componentFactoryResolver.resolveComponentFactory(NumberComponent);
    let numComp = this.vf.createComponent(resolver);

    numComp.instance.id = this.temp[i].id;
    numComp.instance.value = this.temp[i].value;

    //subscribed the onIncrement event
    numComp.instance.onIncrement.subscribe(data => {

      console.log("increment : " + data);

      numComp.instance.value = this.temp[this.onItemIncrement(data)].value;

    });

    //subscribed  the onDecrement event
    numComp.instance.onDecrement.subscribe(data => {

      numComp.instance.value = this.temp[this.onItemDecrement(data)].value;
    })

    //subscribed to the onRemove event
    numComp.instance.onRemove.subscribe((data) => {
      this.onItemRemove(data)
      numComp.hostView.destroy();

    })
    numComp.hostView.detectChanges();
    this.temp[i].item = numComp;

  }

  onCreateLoad() {

    let i = this.temp[this.temp.length - 1].id + 1;
    this.temp.push({
      id: i,
      value: 0
    });
    this.createComponentController();



  }

  onItemIncrement(id) {
    let index = -1;
    this.temp = this.temp.filter(a => {
      if (a.id == id) {
        index = this.temp.indexOf(a);
        a.value++
      }
      return a;
    })
    return index;
  }


  onItemDecrement(id) {
    let index = -1;
    this.temp = this.temp.filter(a => {
      if (a.id == id) {
        index = this.temp.indexOf(a);
        a.value--;
      }
      return a;
    })
    return index;
  }

  onItemRemove(id) {
    this.temp = this.temp.filter(a => {
      return a.id != id;
    });

  }
}
