import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnInit,
  Output,
  ChangeDetectorRef
} from '@angular/core';
@Injectable()
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
})
export class NumberComponent implements OnInit {
  public addBtnName = '+';
  public minusBtnName = '-';
  public deleteBtnName = 'x';
  public flag = false;
  @Input() id: number;
  @Input() value: number;
  @Output() onRemove: EventEmitter<number> = new EventEmitter<
    number
  >();
  @Output() onDecrement: EventEmitter<number> = new EventEmitter<
    number
  >();
  @Output() onIncrement: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor(
    private cd: ChangeDetectorRef
  ) {
    this.flag = false;
  }


  ngOnInit(): void {
  }

  onIncrementClick() {
    this.onIncrement.emit(this.id);
  }
  onDecrementClick() {
    this.onDecrement.emit(this.id);
  }
  onRemoveClick() {
    this.onRemove.emit(this.id);
  }
}
