import { HistoryLocation } from "@/types";

export const getHistoryLocations = async (): Promise<
  HistoryLocation[] | undefined
> => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/history`);
    const data = await response.json();
    // console.log("Fetched live locations:", data.payload);
    return data.payload;
  } catch (error) {
    console.error("Error fetching live locations:", error);
    return undefined;
  }
};
