import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  //@Input() decorators, you are indicating that these properties can receive values from parent components via property binding. 
  @Input() text: string;
  @Input() color: string;
  // Btnclick is the name of the event
  @Output() btnClick = new EventEmitter();

  //The constructor is used to initialize the component. In this case, it sets default values for the text and color properties to empty strings (''). 
  // This ensures that these properties have a default value if a parent component does not provide values.
  constructor() {
    this.text = '';
    this.color = '';
  }

  ngOnInit(): void {
      
  }

  // Reusable button
  onClick() {
    // Call btnClick because that's what we called it
    this.btnClick.emit();
  }
}

