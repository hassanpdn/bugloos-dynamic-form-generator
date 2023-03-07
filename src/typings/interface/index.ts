export interface MenuItems {
  [key: string]: any
}

export interface TableItemTypes {
  headers: String[]
  body: MenuItems[]
}

export interface SelectOptionsTypes {
  [index: number]: { name: string; props: MenuItems }
}

export interface IValidations {
  name: string
  value: string
}

export interface FormObject {
      title: string
      role: string
      editable: boolean
      deletable: boolean,
      extendible? : boolean,
      fields: {
            selectedComponent: string
            isRequired: boolean
            label: string
            placeholder: string
            validation: string
            description: string
            role: string
            id: string,
            value: any
      }[]
      id: string
}
export interface FormDetails {
      selectedComponent: string;
      isRequired: boolean;
      options: string[];
      label: string;
      editable: boolean;
      deletable: boolean;
      id: string;
      value: string;
}
