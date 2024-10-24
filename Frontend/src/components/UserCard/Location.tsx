import { UserDataType } from "@/types";
import { Clock, MapPin } from "lucide-react";
import { Separator } from "../ui/separator";

const Location = ({
  userData,
}: {
  userData: Pick<UserDataType, "location">;
}) => {
  return (
    <div className="grid gap-4 pt-4">
      <div className="space-y-1">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          Address
        </div>
        <p className="font-medium">
          {userData.location.street.number} {userData.location.street.name}
        </p>
        <p className="font-medium">
          {userData.location.city}, {userData.location.state}
        </p>
        <p className="font-medium">
          {userData.location.country} {userData.location.postcode}
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          Timezone
        </div>
        <p className="font-medium">
          {userData.location.timezone.offset} -{" "}
          {userData.location.timezone.description}
        </p>
      </div>
    </div>
  );
};

export default Location;
