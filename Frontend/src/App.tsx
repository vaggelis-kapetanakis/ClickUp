import axios from "axios";
import { useEffect, useState } from "react";
import { UserDataType } from "./types";
import UserCard from "./components/UserCard/UserCard";
import { ThemeProvider } from "./contexts/themeContext";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import { Button } from "./components/ui/button";
import { XCircle } from "lucide-react";

function App() {
  const [user, setUser] = useState<UserDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastAttemptedGender, setLastAttemptedGender] = useState<
    string | undefined
  >(undefined);

  const handleFetching = async (selectedGender?: string) => {
    try {
      setLoading(true);
      setError(null);
      setLastAttemptedGender(selectedGender);
      const url = selectedGender
        ? `http://127.0.0.1:5000/user?gender=${selectedGender}`
        : `http://127.0.0.1:5000/user`;
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.status === 404
            ? "User not found"
            : error.response?.status === 500
            ? "Server error occurred"
            : "Failed to fetch user data"
        );
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    handleFetching(lastAttemptedGender);
  };

  useEffect(() => {
    handleFetching();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
        <div className="flex items-center gap-2 text-red-500">
          <XCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
        <Button onClick={handleRetry} variant="outline" className="gap-2">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background transition-colors">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="container mx-auto min-h-screen p-8 flex items-center justify-center">
          {user && (
            <UserCard
              userData={user}
              onFetchUser={handleFetching}
              isLoading={loading}
            />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
