export interface MenuItems {
      [key: string]: any
}

export interface TableItemTypes {
      headers: String[],
      body: MenuItems[]
}

export interface SelectOptionsTypes {
      [index: number]: { name: string ; props:  MenuItems};
}