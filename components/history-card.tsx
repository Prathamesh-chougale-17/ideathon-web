import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, Building2, DoorOpen } from "lucide-react";
const HistoryCard = ({
  org_name,
  address,
  area_name,
  building_name,
  building_no,
  cause,
  city,
  country,
  floor_name,
  floor_no,
  pincode,
  room_name,
  room_no,
  state,
  image,
}: {
  org_name: string;
  address: string;
  area_name: string;
  building_name: string;
  building_no: string;
  cause: string;
  city: string;
  country: string;
  floor_name: string;
  floor_no: string;
  pincode: string;
  room_name: string;
  room_no: string;
  state: string;
  image: string;
}) => {
  if (image.includes("google")) {
    image = `https://drive.google.com/uc?id=${
      image.split("/")[5].split("?")[0]
    }`;
  }
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
          <h3 className="text-lg font-bold truncate">{org_name}</h3>
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

        {cause && (
          <div className="bg-red-100 p-4 rounded-lg">
            <h4 className="text-sm text-red-500 font-medium">
              Cause of Incident
            </h4>
            <p className="text-sm text-red-500">{cause}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
