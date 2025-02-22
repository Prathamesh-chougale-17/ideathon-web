import React from "react";
import OrgLiveCard from "./org-livecard";
import { OrgLiveData } from "@/data/dummy-orglive-data";

const OrgLiveOrgPage = () => {
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
        {OrgLiveData.map((org, index) => (
          <div className="w-full max-w-sm mx-auto" key={index}>
            <OrgLiveCard key={index} {...org} />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Showing {OrgLiveData.length} active response units</p>
      </div>
    </div>
  );
};

export default OrgLiveOrgPage;
