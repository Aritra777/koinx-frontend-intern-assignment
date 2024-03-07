import { useQuery } from "@tanstack/react-query";

const fetchTrendingCoins = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/search/trending`
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
