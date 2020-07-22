import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-exammenu',
  templateUrl: './exammenu.component.html',
  styleUrls: ['./exammenu.component.scss']
})
export class ExammenuComponent {

  constructor(private router: Router) { }

  startExam() {
    this.router.navigate(['exampage']);
  }
}
