"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (data: { password?: string; specialization?: string }) => void
}

export default function SettingsModal({ open, onOpenChange, onSave }: SettingsModalProps) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [specialization, setSpecialization] = useState("")

  const handleSubmit = () => {
    if (password && password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    onSave({ password, specialization })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 p-2">
          <div>
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="specialization">Specialization</Label>
            <Input
              id="specialization"
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>

          <Button className="w-full" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
