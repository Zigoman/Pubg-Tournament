import { Component, OnInit, ViewChild } from '@angular/core';
import { ITab, ITabs } from '../../shared/interfaces/actions';
import { Validators } from '@angular/forms';
import { FormComponent } from '../../shared/components/form-elements/form.component';
import { IFieldConfig } from '../../shared/interfaces/field.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pubg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tabs: ITabs;
  public selectedTab: ITab;
  public haveAClan: boolean;
  public configLogin: IFieldConfig[];
  public configSignUp: IFieldConfig[];

  @ViewChild(FormComponent) form: FormComponent;

  constructor() {}

  ngOnInit() {
    this.tabs = [
      { text: 'Login', icon: 'login', action: 'login' },
      { text: 'SignUp', icon: 'sign-up', action: 'signUp' }
    ];
    this.selectedTab = this.tabs[0];
    const faceBookValidReg = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i;
    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const onlyNumbersReg = '^[0-9]*$';
    const minValid = 5;
    const maxValid = 12;

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
        name: 'signUpEmail',
        validation: [Validators.required, Validators.pattern(emailReg)]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Password',
        inputType: 'password',
        name: 'signUpPassword',
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
        value: null,
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
        disabled: true
      }
    ];
    this.configLogin = [
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Email',
        name: 'LoginEmail',
        validation: [Validators.required, Validators.pattern(emailReg)]
      },
      {
        type: 'input',
        disabled: false,
        value: '',
        label: 'Password',
        inputType: 'password',
        name: 'loginPassword',
        validation: [Validators.required, Validators.minLength(minValid), Validators.maxLength(maxValid)]
      },
      {
        label: 'Submit',
        name: 'submit',
        type: 'button',
        disabled: true
      }
    ];
  }

  public changeTab($event: ITab) {
    this.selectedTab = $event;
  }

  gutAClan(event: boolean) {
    this.haveAClan = event;
  }

  public submit(value: { [name: string]: any }) {
    if (this.form.valid) {
      console.log(value);
    }
  }

  public formValueChanges(event: any) {
    if (event.key === 'haveTeam') {
      this.form.setDisabled('team', !event.currentValue);
    }
    if (this.form.valid) {
      this.form.setDisabled('submit', false);
    } else {
      this.form.setDisabled('submit', true);
    }
  }

  // private getTeams(): Observable<any> {
  //   return this.http$.get(`${environment.api}/getSquads`).subscribe(result => (result ? result : []));
  // }
}
