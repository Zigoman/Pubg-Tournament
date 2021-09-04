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
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const onlyNumbersReg = /^[0-9]*$/;
    const faceBookValidReg = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(.?)]/;

    this.SIGNUP_FORM_MODEL = [
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
        id: 'EmailSignUp',
        label: 'Email',
        placeholder: 'Enter Email',
        validators: {
          pattern: emailReg,
          required: null
        },
        errorMessages: {
          required: '',
          pattern: ''
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
        },
        errorMessages: {
          required: '',
          maxLength: '',
          minLength: ''
        }
      }),
      new DynamicInputModel({
        id: 'pubgIDSignUp',
        label: 'PUBG ID',
        placeholder: 'Enter PUBG ID',
        maxLength: maxValid,
        minLength: minValid,
        validators: {
          pattern: onlyNumbersReg,
          required: null
        },
        errorMessages: {
          pattern: '',
          required: '',
          maxLength: '',
          minLength: ''
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
      new DynamicInputModel({
        id: 'facebookURLSignUp',
        label: 'Facebook URL',
        placeholder: 'Enter Facebook URL',
        validators: {
          required: null,
          pattern: faceBookValidReg
        },
        errorMessages: {
          pattern: '',
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

    this.LOGIN_FORM_MODEL = [
      new DynamicInputModel({
        id: 'email',
        label: 'Email',
        placeholder: 'Enter Email',
        validators: {
          pattern: emailReg,
          required: null
        },
        errorMessages: {
          pattern: '',
          required: ''
        }
      }),
      new DynamicInputModel({
        id: 'password',
        label: 'Password',
        placeholder: 'Enter Password',
        maxLength: maxValid,
        minLength: minValid,
        validators: {
          required: null
        },
        errorMessages: {
          required: '',
          maxLength: '',
          minLength: ''
        }
      })
    ];
  }
}
