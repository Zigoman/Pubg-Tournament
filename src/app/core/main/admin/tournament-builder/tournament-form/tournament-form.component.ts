import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';
import { FORMS_LAYOUT } from '@shared/services/forms.layout';
import { TournamentFormModel } from './tournament-form.model';

@Component({
  selector: 'pubg-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {
  public formGroup: FormGroup;

  public formLayout: DynamicFormLayout;

  public formModel: DynamicFormControlModel[];

  constructor(private formService: DynamicFormService) {
    this.formModel = [];
    this.formLayout = FORMS_LAYOUT;
    this.formGroup = new FormGroup({}, null, null);
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    const formLoginModel = new TournamentFormModel();
    this.formModel = formLoginModel.TOURNAMENT_FORM_MODEL;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  public submit(formGroup: FormGroup): void {
    // eslint-disable-next-line no-console
    console.log('formGroup', formGroup);
  }
}
