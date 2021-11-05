import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'raised-card',
  templateUrl: './raised-card.component.html',
  styleUrls: ['./raised-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaisedCardComponent {}
