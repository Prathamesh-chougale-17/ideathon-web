import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, Building2, DoorOpen } from "lucide-react";

interface HistoryCardProps {
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
  Cause: string;
  image: string;
}

const HistoryCard = ({
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
  Cause,
  image,
}: HistoryCardProps) => {
  return (
    <Card className="max-w-[400px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="relative p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
                <div className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></div>
            </div>
            <span className="text-sm font-medium text-green-500">Closed</span>
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

        {Cause && (
            <div className="bg-red-100 p-4 rounded-lg">
                <h4 className="text-sm text-red-500 font-medium">Cause of Incident</h4>
                <p className="text-sm text-red-500">{Cause}</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
