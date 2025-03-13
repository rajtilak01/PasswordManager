"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus, XIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function SheetComponent() {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Controlled Sheet state

  function initialState() {
    setPassword("");
    setUsername("");
    setWebsite("");
  }

  const handleSave = () => {
    if (!website || !username || !password) {
      setIsAlertDialogOpen(true);
      return;
    }
    initialState();
    setIsSheetOpen(false); // Close sheet only on successful save
  };

  return (
    <>
      <Sheet open={isSheetOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setIsSheetOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-full" // Full width on mobile
        >
          <SheetHeader>
            <div className="flex justify-between items-center">
              <SheetTitle className="text-xl">Put your password here</SheetTitle>
              <Button onClick={() => setIsSheetOpen(false)}>
                <XIcon className="size-4" />
              </Button>
            </div>
            <SheetDescription>Click save when you're done.</SheetDescription>
          </SheetHeader>

          <div className="grid gap-4 py-4 px-4 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="md:text-right">Website</Label>
              <Input
                required
                placeholder="website"
                id="name"
                value={website}
                className="md:col-span-3"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="md:text-right">Username</Label>
              <Input
                required
                placeholder="username"
                id="username"
                value={username}
                className="md:col-span-3"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="md:text-right">Password</Label>
              <Input
                required
                placeholder="password"
                id="password"
                value={password}
                className="md:col-span-3"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <SheetFooter className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button type="submit" onClick={handleSave}>
              Save changes
            </Button>
            <SheetClose asChild>
              <Button
                variant="destructive"
                onClick={() => setIsSheetOpen(false)}
              >
                Cancel
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>All fields are required</AlertDialogTitle>
            <AlertDialogDescription>
              Please fill in all the fields before saving.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsAlertDialogOpen(false)}>
              OK
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
