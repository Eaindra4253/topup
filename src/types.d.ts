export {};

declare global {
  type ApiResponse<T> = {
    data: T;
  };

  type ApiErrorResponse = {
    message: string;
  };

  type ApiResponseList<T> = {
    data: T[];
    totalCount: number;
    page: number;
    pageSize: number;
  };

  type DataPack = {
    id: number;
    name: string;
    expiredDay: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    status: string;
  };
}
