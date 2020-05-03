import { Component, Input, OnInit } from '@angular/core';
import { EditorElement } from '../editor-element';
import { ChangeUpdateService } from '../../../shared/change/services/change-update.service';
import { Change, ChangeType } from '../../../shared/change/change';

@Component({
  selector: 'ide-ui-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.css']
})
export class InputElementComponent implements OnInit {
  @Input()
  element: EditorElement;

  constructor(protected changeService:ChangeUpdateService) { }

  ngOnInit(): void {
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.element.editedValue=target.value;
    this.changeService.pushChange(
      new Change(ChangeType.UPDATE,
        this.element.position,
        target.value));
  }

  editedValue() {
    if (this.element.editedValue)
      return this.element.editedValue;
    else
      return '';
  }
}
