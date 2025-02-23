import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface OrgLiveCardProps {
  Orgid: string;
  Name: string;
  BuildingNo: string;
  BuildingName: string;
  AreaName: string;
  Address: string;
  City: string;
  State: string;
  Country: string;
  Pincode: string;
  MapLocation: string;
  image: string;
}

const OrgLiveCard = ({
  Orgid,
  Name,
  BuildingNo,
  BuildingName,
  AreaName,
  Address,
  City,
  State,
  Country,
  Pincode,
  MapLocation,
  image,
}: OrgLiveCardProps) => {
  return (
    <Card className="max-w-[400px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="relative p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </div>
            <span className="text-sm font-medium text-red-500">LIVE</span>
          </div>
          <h3 className="text-lg font-bold truncate">{Name}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt="Location Image"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Building2 className="w-4 h-4 mt-1 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium">
                {BuildingName} ({BuildingNo})
              </p>
              <p className="text-xs text-muted-foreground">{AreaName}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">
                {Address}, {City}, {State}
              </p>
              <p className="text-xs text-muted-foreground">
                {Country} - {Pincode}
              </p>
            </div>
          </div>
        </div>

        {MapLocation && (
          <a
            href={MapLocation}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-sm bg-primary/10 text-primary py-2 rounded-md hover:bg-primary/20 transition-colors"
          >
            View on Maps
          </a>
        )}
        <Link
          href={`/live/${Orgid}`}
          className="text-sm font-medium text-red-500 hover:underline"
        >
          <Button className="w-full cursor-pointer" variant={"destructive"}>
            View Live
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default OrgLiveCard;
