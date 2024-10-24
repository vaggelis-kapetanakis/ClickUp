import { UserDataType } from "@/types";
import { Calendar, Clock, User, Globe } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "../ui/separator";

const Personal = ({
  userData,
}: {
  userData: Pick<UserDataType, "dob" | "registered" | "nat" | "gender">;
}) => {
  return (
    <div className="flex flex-col gap-y-6 gap-4 pt-4">
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          Date of Birth
        </div>
        <p className="font-medium">
          {format(new Date(userData.dob.date), "PP")}
          <span className="ml-2 text-muted-foreground">
            ({userData.dob.age} years)
          </span>
        </p>
      </div>
      <Separator />
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          Registered
        </div>
        <p className="font-medium">
          {format(new Date(userData.registered.date), "PP")}
        </p>
      </div>
      <Separator />
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Globe className="mr-2 h-4 w-4" />
          Nationality
        </div>
        <p className="font-medium">{userData.nat}</p>
      </div>
      <Separator />
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <User className="mr-2 h-4 w-4" />
          Gender
        </div>
        <p className="font-medium capitalize">{userData.gender}</p>
      </div>
    </div>
  );
};

export default Personal;
