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
import { savePassword } from "@/server/users.actions";
import { AlertDialogComponent } from "./AlertDialogComponent";
import { useAuth } from "@/app/context/AuthContext";
import { redirect } from "next/navigation";

export function SheetComponent() {
  const [website, setWebsite] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false); // Controlled Sheet state
  const [serverError, setServerError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { user } = useAuth();

  if (!user) {
    return redirect("/login");
  }

  function initialState() {
    setPassword("");
    setUsername("");
    setWebsite("");
  }

  const handleSave = async () => {
    if (!website || !username || !password) {
      setIsAlertDialogOpen(true);
      return;
    }
    console.log("control is not reaching here is it??");

    const data = {
      website,
      username,
      password,
      userId: user.uid,
    };

    const response = await savePassword(data);
    console.log("response coming from backend", response);
    console.log("response coming from backend", response?.success);

    if (response?.success) {
      initialState();
      setSuccess(true);
      setIsSheetOpen(false);
    } else {
      setServerError(true);
    }

    setIsAlertDialogOpen(true);
  };

  const handleAlertDialogClose = () => {
    setSuccess(false);
    setServerError(false);
    setIsAlertDialogOpen(false);
  };

  return (
    <>
      <Sheet open={isSheetOpen}>
        <SheetTrigger asChild>
          <Button onClick={() => setIsSheetOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-full">
          <SheetHeader>
            <div className="flex justify-between items-center">
              <SheetTitle className="text-xl">Put your password here</SheetTitle>
              <Button onClick={() => setIsSheetOpen(false)}>
                <XIcon className="size-4" />
              </Button>
            </div>
            <SheetDescription>Click save when you&apos;re done.</SheetDescription>
          </SheetHeader>

          <div className="grid gap-4 py-4 px-4 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="md:text-right">
                Website
              </Label>
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
              <Label htmlFor="username" className="md:text-right">
                Username
              </Label>
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
              <Label htmlFor="password" className="md:text-right">
                Password
              </Label>
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
              <Button variant="destructive" onClick={() => setIsSheetOpen(false)}>
                Cancel
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <AlertDialogComponent
        isAlertDialogOpen={isAlertDialogOpen}
        setIsAlertDialogOpen={handleAlertDialogClose}
        serverError={serverError}
        success={success}
      />
    </>
  );
}