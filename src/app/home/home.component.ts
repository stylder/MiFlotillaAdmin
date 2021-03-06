import {Component, OnInit, Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDarkTheme = false;
  lastDialogResult: string;
  mode: string;
  value: number;
  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];
  public selectedValue: string;
  public games = [
    {value: 'rts-0', viewValue: 'Starcraft'},
    {value: 'rpg-1', viewValue: 'Baldur\'s Gate'},
    {value: 'fps-2', viewValue: 'Doom'}
  ];
  public progress = 0;
  public slider = {
    'autoTicks': false,
    'disabled': false,
    'invert': false,
    'max': 100,
    'min': 0,
    'showTicks': false,
    'step': 1,
    'thumbLabel': false,
    'value': 0,
    'vertical': false,
    'tickInterval': 1,
    'checked': true
  };
  public tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  public color: string;
  public availableColors = [
    {name: 'none', color: ''},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  data= [
    {
      'id': 'X999_Y999',
      'from': {
        'name': 'Tom Brady', 'id': 'X12'
      },
      'message': 'Looking forward to 2010!',
      'actions': [
        {
          'name': 'Comment',
          'link': 'http://www.facebook.com/X999/posts/Y999'
        },
        {
          'name': 'Like',
          'link': 'http://www.facebook.com/X999/posts/Y999'
        }
      ],
      'type': 'status',
      'created_time': '2010-08-02T21:27:44+0000',
      'updated_time': '2010-08-02T21:27:44+0000'
    },
    {
      'id': 'X999_Y977',
      'from': {
        'name': 'Jim Kazama', 'id': 'X12'
      },
      'message': 'How are you guys !',
      'actions': [
        {
          'name': 'Comment',
          'link': 'http://www.facebook.com/X999/posts/Y999'
        },
        {
          'name': 'Like',
          'link': 'http://www.facebook.com/X999/posts/Y999'
        }
      ],
      'type': 'status',
      'created_time': '2010-08-02T21:27:44+0000',
      'updated_time': '2010-08-02T21:27:44+0000'
    },
    {
      'id': 'X999_Y89',
      'from': {
        'name': 'Paul varch', 'id': 'X12'
      },
      'message': 'I Love my self :V !',
      'actions': [
        {
          'name': 'Comment',
          'link': 'http://www.facebook.com/X999/posts/Y89'
        },
        {
          'name': 'Like',
          'link': 'http://www.facebook.com/X999/posts/Y89'
        }
      ],
      'type': 'status',
      'created_time': '2010-08-02T21:27:44+0000',
      'updated_time': '2010-08-02T21:27:44+0000'
    },
    {
      'id': 'X998_Y998',
      'from': {
        'name': 'Peyton Manning', 'id': 'X18'
      },
      'message': 'Where\'s my contract?',
      'actions': [
        {
          'name': 'Comment',
          'link': 'http://www.facebook.com/X998/posts/Y998'
        },
        {
          'name': 'Like',
          'link': 'http://www.facebook.com/X998/posts/Y998'
        }
      ],
      'type': 'status',
      'created_time': '2010-08-02T21:27:44+0000',
      'updated_time': '2010-08-02T21:27:44+0000'
    }
  ];
  user: any;

  constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar, private authService: AuthService) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
    this.user = this.authService.getUser();
  }

  get tickInterval(): number | 'auto' {
    return this.slider.showTicks ? (this.slider.autoTicks ? 'auto' : this.slider.tickInterval) : null;
  }

  set tickInterval(v) {
    this.slider.tickInterval = Number(v);
  }

  ngOnInit() {
    console.log('OnInit')
  }

  logout() {
    console.log('Logout')
    this.authService.logout();
  }

  OnInit() {

  }

  openDialog() {
    const dialogRef = this._dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p>
      <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button>
    </p>
  `,
})
export class DialogContentComponent {
  constructor(@Optional() public dialogRef: MatDialogRef<DialogContentComponent>) {
  }
}
