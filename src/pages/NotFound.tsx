import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyber-black to-cyber-darkblue">
      <div className="w-full max-w-md px-6 py-8 bg-cyber-black/60 border border-cyber-yellow/30 rounded-md backdrop-blur-sm">
        <div className="text-center space-y-6">
          <div className="relative">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-yellow to-cyber-pink animate-pulse">
              404
            </h1>
            <div className="absolute top-0 left-0 right-0 text-6xl font-bold text-cyber-yellow/30 animate-pulse filter blur-sm">
              404
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-1 w-full bg-gradient-to-r from-cyber-blue to-cyber-yellow"></div>

            <p className="text-xl text-cyber-gray">SYSTEM FAILURE</p>

            <p className="text-cyber-muted">
              Connection lost. The digital path you're seeking doesn't exist in this network.
            </p>

            <div className="font-mono text-xs text-cyber-muted border border-cyber-black bg-cyber-darkblue/30 p-2 rounded">
              <span className="text-cyber-blue">ERROR:</span> Unable to locate {" "}
              <span className="text-cyber-yellow">{location.pathname}</span>
            </div>
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              className="bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10"
              onClick={() => window.location.href = '/'}
            >
              RETURN TO MAINFRAME
            </Button>
          </div>

          <div className="text-xs text-cyber-muted pt-4">
            <p className="animate-pulse">
              <span className="text-cyber-pink">CODE:</span> NT-404_PATH_NOT_FOUND
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
