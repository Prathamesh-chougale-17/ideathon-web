import React from "react";
import OrgHistoryCard from "./org-historycard";
import { getHistoryLocations } from "@/service/history";

const OrgHistoryPage = async () => {
  try {
    const historyData = await getHistoryLocations();

    if (!historyData) {
      return (
        <div className="container mx-auto px-4 py-8 text-center">
          <p>No historical data available</p>
        </div>
      );
    }

    // filter out the data with same org_id
    const uniqueData = historyData.filter(
      (v, i, a) => a.findIndex((t) => t.org_id === v.org_id) === i
    );
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            History Emergency Response
          </h1>
          <p className="text-muted-foreground text-center">
            Real-time monitoring of active emergency response units
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueData.map((org, index) => (
            <div className="w-full max-w-sm mx-auto" key={index}>
              <OrgHistoryCard
                key={index}
                Name={org.org_name}
                Address={org.address}
                AreaName={org.area_name}
                BuildingName={org.building_name}
                City={org.city}
                Country={org.country}
                BuildingNo={org.building_no}
                Orgid={org.org_id}
                Pincode={org.pincode}
                State={org.state}
                image={org.image}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Showing {uniqueData.length} past occured units</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading historical data:", error);
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-600">
        <p>Error loading historical data</p>
      </div>
    );
  }
};

export default OrgHistoryPage;
