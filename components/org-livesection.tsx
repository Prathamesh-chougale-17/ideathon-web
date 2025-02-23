import React from "react";
import OrgLiveCard from "./org-livecard";
import { getLiveLocations } from "@/service/live";

const OrgLiveOrgPage = async () => {
  const liveData = await getLiveLocations();
  if (!liveData) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>No live data available</p>
      </div>
    );
  }
  const uniqueData = liveData.filter(
    (v, i, a) => a.findIndex((t) => t.org_id === v.org_id) === i
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Live Emergency Response
        </h1>
        <p className="text-muted-foreground text-center">
          Real-time monitoring of active emergency response units
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {uniqueData.map((org, index) => (
          <div className="w-full max-w-sm mx-auto" key={index}>
            <OrgLiveCard
              key={index}
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
              MapLocation={org.map_location}
              Name={org.org_name}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Showing {uniqueData.length} active response units</p>
      </div>
    </div>
  );
};

export default OrgLiveOrgPage;
