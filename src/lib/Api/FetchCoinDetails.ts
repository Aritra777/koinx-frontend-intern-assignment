import { useQuery } from "@tanstack/react-query";

const fetchCoinDetails = async (coinId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COINGEKO_BASE}/coins/${coinId}`
  );
  const data = await response.json();
  return data;
};

export const useGetCoinDetails = (coinId: string) => {
  return useQuery({
    queryKey: ["coinDetails", coinId],
    queryFn: () => fetchCoinDetails(coinId),
  });
};
