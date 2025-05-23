import { PaginationType } from "@/@types/pagination.type"
import { FilterType } from "@/@types/filter.type"

export type TBrand = {
  id: string
  name: string
  slug: string
  status: string
  description: string
}

export type TBrandAdd = {
  name: string
  slug: string
  description: string
  status: string
}

export type TBrandUpdate = {
  id: string
  name: string
  slug: string
  description: string
  status: string
}

export type TBrandDelete = {
  id: string
}

export type ResponseListBrands = {
  items: TBrand[]
} & PaginationType

export type BrandQueryParams = {} & FilterType

export type BrandQueryConfig = {
  [key in keyof BrandQueryParams]: string
}
