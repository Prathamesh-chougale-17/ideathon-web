import React from "react";

import HistoryCard from "@/components/history-card";
import { getHistoryLocations } from "@/service/history";

const DynamicHistory = async ({
  params,
}: {
  params: Promise<{ orgid: string }>;
}) => {
  // Filter history data to show only matching orgid
  const historyData = await getHistoryLocations();

  const { orgid } = await params;
  if (!historyData) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>No historical data available</p>
      </div>
    );
  }

  const filteredHistory = historyData.filter((org) => org.org_id === orgid);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Emergency Response Details
        </h1>
        <p className="text-muted-foreground text-center">
          Showing details for Organization ID: {orgid}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHistory.map((org, index) => (
          <div className="w-full max-w-sm mx-auto" key={index}>
            <HistoryCard {...org} />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Found {filteredHistory.length} records for this organization</p>
      </div>
    </div>
  );
};

export default DynamicHistory;
