import {
  DynamicSelectModel,
  DynamicInputModel,
  DynamicCheckboxModel,
  DynamicFormControlModel
} from '@ng-dynamic-forms/core';

export class TournamentFormModel {
  public TOURNAMENT_FORM_MODEL: DynamicFormControlModel[];

  constructor() {
    this.TOURNAMENT_FORM_MODEL = [
      new DynamicInputModel({
        id: 'fullNameSignUp',
        label: 'Full name',
        placeholder: 'Enter Full name',
        required: true,
        errorMessages: {
          required: ''
        }
      }),
      new DynamicInputModel({
        id: 'pubgNameSignUp',
        label: 'PUBG Name',
        placeholder: 'Enter PUBG Name',
        validators: {
          required: null
        },
        errorMessages: {
          required: ''
        }
      }),
      new DynamicCheckboxModel({
        id: 'haveTeamSignUp',
        label: 'Have Team ?',
        value: false
      }),
      new DynamicSelectModel<string>({
        id: 'TeamsSelectSignUp',
        label: 'Select your team',
        disabled: true,
        options: []
      }),
      new DynamicInputModel({
        id: 'fullNameSignUp',
        label: 'Full name',
        placeholder: 'Enter Full name',
        required: true,
        errorMessages: {
          required: ''
        }
      }),
      new DynamicInputModel({
        id: 'pubgNameSignUp',
        label: 'PUBG Name',
        placeholder: 'Enter PUBG Name',
        validators: {
          required: null
        },
        errorMessages: {
          required: ''
        }
      }),
      new DynamicCheckboxModel({
        id: 'haveTeamSignUp',
        label: 'Have Team ?',
        value: false
      }),
      new DynamicSelectModel<string>({
        id: 'TeamsSelectSignUp',
        label: 'Select your team',
        disabled: true,
        options: []
      }),
      new DynamicInputModel({
        id: 'fullNameSignUp',
        label: 'Full name',
        placeholder: 'Enter Full name',
        required: true,
        errorMessages: {
          required: ''
        }
      }),
      new DynamicInputModel({
        id: 'pubgNameSignUp',
        label: 'PUBG Name',
        placeholder: 'Enter PUBG Name',
        validators: {
          required: null
        },
        errorMessages: {
          required: ''
        }
      }),
      new DynamicCheckboxModel({
        id: 'haveTeamSignUp',
        label: 'Have Team ?',
        value: false
      }),
      new DynamicSelectModel<string>({
        id: 'TeamsSelectSignUp',
        label: 'Select your team',
        disabled: true,
        options: []
      }),
      new DynamicInputModel({
        id: 'fullNameSignUp',
        label: 'Full name',
        placeholder: 'Enter Full name',
        required: true,
        errorMessages: {
          required: ''
        }
      }),
      new DynamicInputModel({
        id: 'pubgNameSignUp',
        label: 'PUBG Name',
        placeholder: 'Enter PUBG Name',
        validators: {
          required: null
        },
        errorMessages: {
          required: ''
        }
      }),
      new DynamicCheckboxModel({
        id: 'haveTeamSignUp',
        label: 'Have Team ?',
        value: false
      }),
      new DynamicSelectModel<string>({
        id: 'TeamsSelectSignUp',
        label: 'Select your team',
        disabled: true,
        options: []
      }),
      new DynamicInputModel({
        id: 'fullNameSignUp',
        label: 'Full name',
        placeholder: 'Enter Full name',
        required: true,
        errorMessages: {
          required: ''
        }
      }),
      new DynamicInputModel({
        id: 'pubgNameSignUp',
        label: 'PUBG Name',
        placeholder: 'Enter PUBG Name',
        validators: {
          required: null
        },
        errorMessages: {
          required: ''
        }
      }),
      new DynamicCheckboxModel({
        id: 'haveTeamSignUp',
        label: 'Have Team ?',
        value: false
      }),
      new DynamicSelectModel<string>({
        id: 'TeamsSelectSignUp',
        label: 'Select your team',
        disabled: true,
        options: []
      }),
      new DynamicInputModel({
        id: 'fullNameSignUp',
        label: 'Full name',
        placeholder: 'Enter Full name',
        required: true,
        errorMessages: {
          required: ''
        }
      }),
      new DynamicInputModel({
        id: 'pubgNameSignUp',
        label: 'PUBG Name',
        placeholder: 'Enter PUBG Name',
        validators: {
          required: null
        },
        errorMessages: {
          required: ''
        }
      }),
      new DynamicCheckboxModel({
        id: 'haveTeamSignUp',
        label: 'Have Team ?',
        value: false
      }),
      new DynamicSelectModel<string>({
        id: 'TeamsSelectSignUp',
        label: 'Select your team',
        disabled: true,
        options: []
      })
    ];
  }
}
