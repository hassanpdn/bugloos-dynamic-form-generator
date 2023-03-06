export const validations = [
      { name: 'Required', value: "" },
      { name: 'Email', value: "^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$" },
      { name: 'Phone', value: '^(\\+98|0)?9\\d{9}$' },
      { name: 'Text', value: '^[A-Za-z\s]*$' }
]

export const validationMetrics = [
      { name: 'isRequired', value: 'Required' },
      { name: 'isEmail', value: 'Email' },
      { name: 'isPhoneNumber', value: 'Phone' },
      { name: 'isText', value:  'Text' }
]