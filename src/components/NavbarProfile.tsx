"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import SettingsModal from "./SettingsModal";

export default function NavbarProfile() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer">
            <AvatarFallback></AvatarFallback> {/* Teacher initials */}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem onClick={() => setOpenProfile(true)}>
            <User className="mr-2 h-4 w-4" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenSettings(true)}>
            <Settings className="mr-2 h-4 w-4" /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profile Modal */}
      <ProfileModal open={openProfile} onOpenChange={setOpenProfile} />

      {/* Settings Modal */}
      <SettingsModal open={openSettings} onOpenChange={setOpenSettings} />
    </>
  );
}
