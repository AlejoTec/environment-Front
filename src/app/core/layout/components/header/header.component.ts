import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: true,
    imports: [MatIconModule , MatButtonModule , MatToolbarModule],

})

// @Component({
// 	selector: 'dialog-animations-example',
// 	templateUrl: './header.component.html',
// 	styleUrls: ['./header.component.scss'],
// 	standalone: true,
// 	imports: [MatButtonModule, MatDialogModule],
//   })

export class HeaderComponent {
// 	constructor(public dialog: MatDialog) {}
// 	openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
// 	  this.dialog.open(DialogAnimationsExampleDialog, {
// 		width: '250px',
// 		enterAnimationDuration,
// 		exitAnimationDuration,
// 	  });
// 	}
//   }

//   @Component({
// 	selector: 'dialog-animations-example-dialog',
// 	templateUrl: 'dialogo.html',
// 	styleUrls: ['./header.component.scss'],
// 	standalone: true,
// 	imports: [MatDialogModule, MatButtonModule],
//   })
//   export class DialogAnimationsExampleDialog {
// 	constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
  }
