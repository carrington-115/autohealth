import { useState } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

export function AutoCompanionPage() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [showSidePanel, setShowSidePanel] = useState(true);
  const [sessionTime, setSessionTime] = useState("00:00");

  const handleEndCall = () => {
    alert("Session ended. Thank you for using AutoCompanion.");
  };

  return (
    <div className="h-full flex bg-gray-900">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 relative bg-gray-800">
          {/* Connection Status */}
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-green-600 text-white border-0">
              Connected • {sessionTime}
            </Badge>
          </div>

          {/* Video Feed Area */}
          <div className="h-full flex items-center justify-center">
            {isVideoOn ? (
              <div className="text-center">
                <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-8xl">AI</span>
                </div>
                <p className="text-white">AI Health Companion</p>
              </div>
            ) : (
              <div className="text-center">
                <VideoOff className="h-24 w-24 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Camera is off</p>
              </div>
            )}
          </div>

          {/* Control Panel */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsMuted(!isMuted)}
                className={`h-14 w-14 rounded-full ${
                  isMuted
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {isMuted ? (
                  <MicOff className="h-6 w-6" />
                ) : (
                  <Mic className="h-6 w-6" />
                )}
              </Button>

              <Button
                size="lg"
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`h-14 w-14 rounded-full ${
                  !isVideoOn
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {isVideoOn ? (
                  <Video className="h-6 w-6" />
                ) : (
                  <VideoOff className="h-6 w-6" />
                )}
              </Button>

              <Button
                size="lg"
                onClick={handleEndCall}
                className="h-14 w-14 rounded-full bg-red-600 hover:bg-red-700"
              >
                <Phone className="h-6 w-6 rotate-135" />
              </Button>

              <Button
                size="lg"
                onClick={() => setShowSidePanel(!showSidePanel)}
                className="h-14 w-14 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                <MessageSquare className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
