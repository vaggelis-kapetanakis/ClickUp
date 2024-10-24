import { UserDataType } from "@/types";
import { Mail, Phone, Smartphone } from "lucide-react";
import { Separator } from "../ui/separator";

const Contact = ({
  userData,
}: {
  userData: Pick<UserDataType, "email" | "phone" | "cell">;
}) => {
  return (
    <div className="grid gap-4 pt-4">
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Mail className="mr-2 h-4 w-4" />
          Email
        </div>
        <p className="font-medium break-all">{userData.email}</p>
      </div>
      <Separator />
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Phone className="mr-2 h-4 w-4" />
          Phone
        </div>
        <p className="font-medium">{userData.phone}</p>
      </div>
      <Separator />
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Smartphone className="mr-2 h-4 w-4" />
          Cell
        </div>
        <p className="font-medium">{userData.cell}</p>
      </div>
    </div>
  );
};

export default Contact;
