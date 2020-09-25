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

  createComponentController(i) {
    let resolver = this.componentFactoryResolver.resolveComponentFactory(NumberComponent);
    let numComp = this.vf.createComponent(resolver);

    numComp.instance.id = this.temp[i].id;
    numComp.instance.value = this.temp[i].value;

    //subscribed the onIncrement event
    numComp.instance.onIncrement.subscribe(data => {
      this.onItemIncrement(data);
      numComp.instance.value = this.temp[i].value;

    });

    //subscribed  the onDecrement event
    numComp.instance.onDecrement.subscribe(data => {
      this.onItemDecrement(data);
      numComp.instance.value = this.temp[i].value;
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

    let i = this.temp.length;
    this.temp.push({
      id: this.temp.length,
      value: 0
    });
    this.createComponentController(i);



  }

  onItemIncrement(id) {
    this.temp = this.temp.filter(a => {
      a.id == id ? a.value++ : a.value;
      return a;
    })

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
