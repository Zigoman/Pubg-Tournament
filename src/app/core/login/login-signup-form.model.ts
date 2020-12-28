import {
  DynamicSelectModel,
  DynamicInputModel,
  DynamicCheckboxModel,
  DynamicFormControlModel
} from '@ng-dynamic-forms/core';

export class FormModel {
  public SIGNUP_FORM_MODEL: DynamicFormControlModel[];
  public LOGIN_FORM_MODEL: DynamicFormControlModel[];

  constructor() {
    const minValid = 5;
    const maxValid = 5 + 5 + 2;
    const emailReg =
      '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$';
    const onlyNumbersReg = '^[0-9]*$';
    const faceBookValidReg = '/^(https?://)?((w{3}.)?)facebook.com/.*/i';

    this.SIGNUP_FORM_MODEL = [
      new DynamicInputModel({
        id: 'fullNameSignUp',
        label: 'Full name',
        placeholder: 'Enter Full name',
        validators: {
          required: null
        }
      }),
      new DynamicInputModel({
        id: 'EmailSignUp',
        label: 'Email',
        placeholder: 'Enter Email',
        pattern: emailReg,
        validators: {
          required: null
        }
      }),
      new DynamicInputModel({
        id: 'passwordSignUp',
        label: 'Password',
        placeholder: 'Enter Password',
        maxLength: maxValid,
        minLength: minValid,
        validators: {
          required: null
        }
      }),
      new DynamicInputModel({
        id: 'pubgIDSignUp',
        label: 'PUBG ID',
        placeholder: 'Enter PUBG ID',
        pattern: onlyNumbersReg,
        maxLength: maxValid,
        minLength: minValid,
        validators: {
          required: null
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
          required: '{{label}} is required'
        }
      }),
      new DynamicInputModel({
        id: 'facebookURLSignUp',
        label: 'Facebook URL',
        placeholder: 'Enter Facebook URL',
        pattern: faceBookValidReg,
        validators: {
          required: null
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

    this.LOGIN_FORM_MODEL = [
      new DynamicInputModel({
        id: 'emailLogin',
        label: 'Email',
        placeholder: 'Enter Email',
        pattern: emailReg,
        validators: {
          required: null
        }
      }),
      new DynamicInputModel({
        id: 'passwordLogin',
        label: 'Password',
        placeholder: 'Enter Password',
        maxLength: maxValid,
        minLength: minValid,
        validators: {
          required: null
        }
      })
    ];
  }
}
