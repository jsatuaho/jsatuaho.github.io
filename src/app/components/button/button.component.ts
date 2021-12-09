import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 
 * Reusable button component
 * Emits generick onClick event
 * Text and color styling are defined in parent component's html
 *    (see header.component.html and footer.component.html for examples)
 * 
 */

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string
  @Input() color?: string
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit()
  }

}
