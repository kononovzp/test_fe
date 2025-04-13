export interface IPageMetadata {
  pagesAmount: number;
  hasPrev: boolean;
  hasNext: boolean;
  page: number;
  take: number;
  itemsAmount: number;
}

export interface IPageParams {
  page?: number;
  take?: number;
}
