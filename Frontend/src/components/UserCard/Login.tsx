import { Key, User } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { UserDataType } from "@/types";

const Login = ({ userData }: { userData: Pick<UserDataType, "login"> }) => {
  return (
    <div className="grid gap-4 pt-4">
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <User className="mr-2 h-4 w-4" />
          Username
        </div>
        <p className="font-medium">{userData.login.username}</p>
      </div>
      <Separator />
      <div className="space-y-1 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Key className="mr-2 h-4 w-4" />
          UUID
        </div>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <p className="font-medium break-all truncate max-w-32">
                {userData.login.uuid}
              </p>
            </TooltipTrigger>
            <TooltipContent className="bg-background">
              <p className="p-3 rounded">{userData.login.uuid}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Login;
