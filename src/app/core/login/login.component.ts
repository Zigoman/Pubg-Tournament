import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';
import { loadUser } from '../../store/actions/user.actions';
import { ITab, ITabs } from '../../shared/interfaces/actions.interface';
import { FORMS_LAYOUT } from '../../shared/services/forms.layout';
import { FormModel } from './login-signup-form.model';

@Component({
  selector: 'pubg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tabs: ITabs;

  public selectedTab: ITab;

  public formGroup: FormGroup;

  public formLayout: DynamicFormLayout;

  public formModel: DynamicFormControlModel[];

  constructor(private router: Router, private store: Store, private formService: DynamicFormService) {
    this.formModel = [];
    this.formLayout = FORMS_LAYOUT;
    this.formGroup = new FormGroup({}, null, null);

    this.tabs = [
      { text: 'Login', action: 'login' },
      { text: 'Sign Up', action: 'signUp' }
    ];
    this.selectedTab = this.tabs[0];
  }

  ngOnInit(): void {
    this.initForm();
  }

  public changeTab($event: ITab): void {
    this.selectedTab = $event;
    this.initForm(this.selectedTab.action);
  }

  public submit(form: FormGroup): void {
    if (form && form.valid) {
      if (this.selectedTab.action === 'signUp') {
        // this.store.dispatch(addUser({ user }));
      } else if (this.selectedTab.action === 'login') {
        this.store.dispatch(loadUser({ user: form.value }));
      }
    }
  }

  // public formValueChanges(event: IFieldOptions): void {
  //   if (this.form) {
  //     if (event.label === 'haveTeam') {
  //       this.form.setDisabled('team', !event.value);
  //     }
  //     this.form.setDisabled('submit', !this.form.valid);
  //   }
  // }

  private initForm(tab: string = 'login'): void {
    const formLoginModel = new FormModel();
    this.formModel = tab === 'login' ? formLoginModel.LOGIN_FORM_MODEL : formLoginModel.SIGNUP_FORM_MODEL;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }
}
