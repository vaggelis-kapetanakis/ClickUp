import { UserDataType } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Personal from "./Personal";
import Contact from "./Contact";
import Location from "./Location";
import Login from "./Login";

interface UserCardProps {
  userData: UserDataType;
  onFetchUser: (gender?: string) => Promise<void>;
  isLoading?: boolean;
}

const UserCard = ({
  userData,
  onFetchUser,
  isLoading = false,
}: UserCardProps) => {
  const fullName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;

  return (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={userData.picture.large} alt={fullName} />
          <AvatarFallback>
            {userData.name.first[0]}
            {userData.name.last[0]}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-center">
          <CardTitle>{fullName}</CardTitle>
          <CardDescription>@{userData.login.username}</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            <Personal userData={userData} />
          </TabsContent>

          <TabsContent value="contact" className="space-y-4">
            <Contact userData={userData} />
          </TabsContent>

          <TabsContent value="location" className="space-y-4">
            <Location userData={userData} />
          </TabsContent>

          <TabsContent value="login" className="space-y-4">
            <Login userData={userData} />
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter>
        <div className="grid grid-cols-3 gap-2 w-full">
          <Button
            onClick={() => onFetchUser("male")}
            variant="outline"
            disabled={isLoading}
            className="w-full"
          >
            Male
          </Button>
          <Button
            onClick={() => onFetchUser("female")}
            variant="outline"
            disabled={isLoading}
            className="w-full"
          >
            Female
          </Button>
          <Button
            onClick={() => onFetchUser()}
            variant="default"
            disabled={isLoading}
            className="w-full"
          >
            Random
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
