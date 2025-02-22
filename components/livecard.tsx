import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, Building2, DoorOpen } from "lucide-react";

interface LiveCardProps {
  Name: string;
  BuildingNo: string;
  BuildingName: string;
  FloorNo: string;
  FloorName: string;
  RoomNo: string;
  RoomName: string;
  AreaName: string;
  Address: string;
  City: string;
  State: string;
  Country: string;
  Pincode: string;
  MapLocation: string;
  image: string;
}

const LiveCard = ({
  Name,
  BuildingNo,
  BuildingName,
  FloorNo,
  FloorName,
  RoomNo,
  RoomName,
  AreaName,
  Address,
  City,
  State,
  Country,
  Pincode,
  MapLocation,
  image,
}: LiveCardProps) => {
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
            <DoorOpen className="w-4 h-4 mt-1 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm">
                Floor {FloorNo} ({FloorName})
              </p>
              <p className="text-sm">
                Room {RoomNo} ({RoomName})
              </p>
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
      </CardContent>
    </Card>
  );
};

export default LiveCard;
