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
      isEditable: boolean
      isDeletable: boolean
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
