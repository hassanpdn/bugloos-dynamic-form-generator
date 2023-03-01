export const validations = [
      { name: 'Email', value: "^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$" },
      { name: 'Phone', value: '^(\\+98|0)?9\\d{9}$' },
      { name: 'Number', value: '^\d+$' },
      { name: 'Text', value: '^[A-Za-z\s]*$' },
      { name: 'Text and number', value: '^[A-Za-z0-9]*$' }
]

export const validationMetrics = [
      { name: 'required', value: "Required" },
      { name: 'isEmail', value: 'Email' },
      { name: 'isPhoneNumber', value: 'Phone' },
      { name: 'isNumber', value: 'Number' },
      { name: 'isText', value:  'Text' },
      { name: 'isTextAndNumber', value: 'Text and number' }
]