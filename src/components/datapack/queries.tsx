import { useQuery } from "@tanstack/react-query";
import { getDataPacks } from "../../services/topup.service";

export const dataPackKeys = {
  list: (params: string) => ["data-packs", params],
};

export function useGetDataPacks(params: { mobile: string; operator: string }) {
  return useQuery({
    queryKey: dataPackKeys.list(JSON.stringify(params)),
    queryFn: () => getDataPacks(params),
    select: (response) => response.data, 
    enabled: !!params.mobile && !!params.operator, 
  });
}
