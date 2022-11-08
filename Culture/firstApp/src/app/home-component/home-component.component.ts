import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DiaglogCComponent } from '../diaglog-c/diaglog-c.component';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DiaglogCComponent, {
      width: '50%',
      height:'50%',
    
          
    });
  }
  ngOnInit(): void {
  }

}
