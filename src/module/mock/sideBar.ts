// sideBar 的 Module 需要依照個專案搭配的後端自行調整

export interface SubMenu {
  featuresId: string
  code: string
  name: string
  url: string
  featuresType?: number
  icon: string
  parentId: string
  sort: number
  subMenu: SubMenu[]
}

export interface sideBar {
  featuresId: string
  code: string
  name: string
  url: string
  icon: string
  parentId: any
  sort: number
  subMenu: SubMenu[]
}
