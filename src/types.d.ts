export type HttpResponse<T> = {
  status?: "success" | "error/failed";
  status_code?: number;
  message: string;
  data?: T;
  data_length?: number;
};
