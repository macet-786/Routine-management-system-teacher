"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  teacher?: {
    name?: string
    email?: string
    specialization?: string
    photo?: string
  }
}

export default function ProfileModal({ open, onOpenChange, teacher }: ProfileModalProps) {
  // fallback values in case teacher is missing
  const name = teacher?.name || "Unknown Teacher"
  const email = teacher?.email || "No email available"
  const specialization = teacher?.specialization || "Not specified"
  const photo = teacher?.photo || "/default-avatar.png"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Teacher Profile</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-4 p-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={photo} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-sm text-muted-foreground">{email}</p>
            <p className="text-sm">Specialization: {specialization}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
