import { Component, OnInit, ViewChild } from '@angular/core';
import { ITab, ITabs } from '../../shared/interfaces/actions.interface';
import { Validators } from '@angular/forms';
import { IFieldOptions, IFieldType, IFormObject } from '../../shared/interfaces/field.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { Login, SignUp } from '../../store/actions/app.actions';
import { IUser } from '../../shared/interfaces/store.interface';
import { FormComponent } from '../../shared/components/form-elements/form.component';
import { addUser, loadUser } from '../../store/actions/user.actions';

@Component({
  selector: 'pubg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tabs: ITabs;
  public selectedTab: ITab;
  public configLogin: IFieldType[];
  public configSignUp: IFieldType[];

  @ViewChild(FormComponent) form: FormComponent | null;

  constructor(private router: Router, private store: Store) {
    const faceBookValidReg = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i;
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const onlyNumbersReg = '^[0-9]*$';
    const minValid = 5;
    const maxValid = 12;

    this.tabs = [
      { text: 'Login', icon: 'login', action: 'login' },
      { text: 'Sign Up', icon: 'sign-up', action: 'signUp' }
    ];
    this.selectedTab = this.tabs[0];

    this.configSignUp = [
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Full name',
        name: 'fullName',
        validation: [Validators.required, Validators.minLength(minValid)]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Email',
        name: 'email',
        validation: [Validators.required, Validators.pattern(emailReg)]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Password',
        inputType: 'password',
        name: 'password',
        validation: [Validators.required, Validators.minLength(minValid), Validators.maxLength(maxValid)]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'PUBG ID',
        name: 'pubgID',
        validation: [
          Validators.required,
          Validators.minLength(minValid),
          Validators.maxLength(maxValid),
          Validators.pattern(onlyNumbersReg)
        ]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'PUBG Name',
        name: 'pubgName',
        validation: [Validators.required]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Facebook URL',
        name: 'facebookURL',
        validation: [Validators.required, Validators.pattern(faceBookValidReg)]
      },
      {
        type: 'checkbox',
        disabled: false,
        value: false,
        label: 'Have Team ?',
        name: 'haveTeam'
      },
      {
        type: 'select',
        disabled: true,
        value: '',
        placeholder: 'Select your team',
        label: 'Teams',
        name: 'team',
        selectWithFilter: false,
        options: []
      },
      {
        label: 'Submit',
        name: 'submit',
        type: 'button',
        value: 'submit',
        disabled: true
      }
    ];
    this.configLogin = [
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Email',
        name: 'email',
        validation: [Validators.required, Validators.pattern(emailReg)]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Password',
        inputType: 'password',
        name: 'password',
        validation: [Validators.required, Validators.minLength(minValid), Validators.maxLength(maxValid)]
      },
      {
        label: 'Submit',
        name: 'submit',
        type: 'button',
        value: 'submit',
        disabled: true
      }
    ];
    this.form = null;
  }

  ngOnInit(): void {}

  public changeTab($event: ITab): void {
    this.selectedTab = $event;
  }

  public submit(user: IFormObject): void {
    if (this.form && this.form.valid) {
      if (this.selectedTab.action === 'signUp') {
        // this.store.dispatch(SignUp({ payload: user }));
      } else if (this.selectedTab.action === 'login') {
        this.store.dispatch(loadUser({ user }));
        // this.store.dispatch(Login({ payload: user }));
      }
    }
  }

  public formValueChanges(event: IFieldOptions): void {
    if (this.form) {
      if (event.label === 'haveTeam') {
        this.form.setDisabled('team', !event.value);
      }
      this.form.setDisabled('submit', !this.form.valid);
    }
  }
}
