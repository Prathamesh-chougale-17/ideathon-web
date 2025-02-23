import { LiveLocation } from "@/types";

export const getLiveLocations = async (): Promise<
  LiveLocation[] | undefined
> => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/live`);
    const data = await response.json();
    return data.payload;
  } catch (error) {
    console.error("Error fetching live locations:", error);
    return undefined;
  }
};
