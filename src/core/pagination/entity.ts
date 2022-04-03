import lodash from "lodash";

export class PaginationEntity {
  pageSize?: number;
  current?: number = 1;
  total?: number = 10;
  search?: string;
  OrderByQuery?: string;
  totalPages?: number;

  private static initPaginationEntity: any = null;

  constructor(pagination) {
    if (!pagination) return;
    this.pageSize = lodash.get(pagination, "pageSize", 10);
    this.current = lodash.get(pagination, "current", 1);
    this.total = lodash.get(pagination, "total", 0);
    this.search = lodash.get(pagination, "search", undefined);
    this.totalPages = pagination.totalPages;
  }

  static init() {
    if (PaginationEntity.initPaginationEntity != null) {
      return PaginationEntity.initPaginationEntity;
    }
    PaginationEntity.initPaginationEntity = new PaginationEntity({});
    return PaginationEntity.initPaginationEntity;
  }
}
