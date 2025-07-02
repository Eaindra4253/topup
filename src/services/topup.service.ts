import { api } from "../configs/api";

export function getDataPacks(params?: Record<string, unknown>) {
  return api.get<ApiResponseList<DataPack>>("/data-packs", { params });
}
