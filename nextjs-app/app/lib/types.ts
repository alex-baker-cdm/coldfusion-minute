export interface User {
  id: number;
  login: string;
  firstname: string;
  lastname: string;
  description: string;
  level: number;
}

export interface PaginationParams {
  page: number;
  pagesize: number;
}

export interface SearchParams {
  searchterm?: string;
}

export interface ApiResponse<T> {
  data: T;
  count?: number;
  page?: number;
  pagesize?: number;
  lastPage?: number;
}
