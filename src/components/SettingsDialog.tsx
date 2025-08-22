"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          ⚙️ Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Profile & Security Settings</DialogTitle>
          <DialogDescription>
            Update your profile information and account security here.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4 py-4">
          {/* Full Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full Name
            </Label>
            <Input id="name" placeholder="Enter your full name" className="col-span-3" />
          </div>

          {/* Specialization */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="specialization" className="text-right">
              Specialization
            </Label>
            <Input id="specialization" placeholder="e.g. Computer Science" className="col-span-3" />
          </div>

          {/* Change Password */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              New Password
            </Label>
            <Input id="password" type="password" placeholder="Enter new password" className="col-span-3" />
          </div>

          {/* Confirm Password */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirm-password" className="text-right">
              Confirm Password
            </Label>
            <Input id="confirm-password" type="password" placeholder="Re-enter new password" className="col-span-3" />
          </div>
        </form>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
