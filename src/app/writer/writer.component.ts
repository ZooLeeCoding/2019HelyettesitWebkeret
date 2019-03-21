import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  myInput: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateMain() {
    this.router.navigate(["/main"]);
  }

  navigateReader() {
    this.router.navigate(["/reader/"+this.myInput, {param1: "valaki",
  abcd: "edfg", datum: "1334.07.12"}]);
  }

}
