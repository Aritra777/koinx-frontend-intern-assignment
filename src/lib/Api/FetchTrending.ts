import { useQuery } from "@tanstack/react-query";

const fetchTrendingCoins = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COINGEKO_BASE}/search/trending`
  );
  const data = await response.json();
  return data;
};

export const useGetTrendingCoins = () => {
  return useQuery({
    queryKey: ["trendingCoins"],
    queryFn: () => fetchTrendingCoins(),
  });
};
