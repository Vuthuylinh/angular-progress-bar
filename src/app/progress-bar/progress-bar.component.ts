import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
@Input() backgroundColor = '#ceacd9';
@Input() progressColor = '#4CAF50';
@Input() width = 70;

constructor() { }

  ngOnInit() {
  }

}
