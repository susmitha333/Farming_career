import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DiaglogCComponent } from '../diaglog-c/diaglog-c.component';
import { NgDialogAnimationService } from "ng-dialog-animation";


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(public dialog: NgDialogAnimationService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DiaglogCComponent, {
      width: '50%',
      height:'70%',
      animation:{to:"aside"},
      position: { rowEnd: "0" },
      
      
    });
  }
  ngOnInit(): void {
  }

}
