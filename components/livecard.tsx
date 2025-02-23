import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, Building2, DoorOpen } from "lucide-react";
import { LiveLocation } from "@/types";

const LiveCard = ({
  org_name,
  address,
  area_name,
  building_name,
  building_no,
  city,
  country,
  floor_name,
  floor_no,
  pincode,
  room_name,
  room_no,
  state,
  map_location,
  image,
}: LiveLocation) => {
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
          <h3 className="text-lg font-bold truncate">{org_name}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
          <Image
            src={`https://drive.google.com/uc?id=${
              image.split("/")[5].split("?")[0]
            }`}
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
                {building_name} ({building_no})
              </p>
              <p className="text-xs text-muted-foreground">{area_name}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <DoorOpen className="w-4 h-4 mt-1 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm">
                Floor {floor_no} ({floor_name})
              </p>
              <p className="text-sm">
                Room {room_no} ({room_name})
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">
                {address}, {city}, {state}
              </p>
              <p className="text-xs text-muted-foreground">
                {country} - {pincode}
              </p>
            </div>
          </div>
        </div>

        {map_location && (
          <a
            href={map_location}
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
