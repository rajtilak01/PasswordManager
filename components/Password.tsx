"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { SheetComponent } from "./SheetComponent";
import Navbar from "./Navbar";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { dateConverter } from "@/lib/utils";
import { generateRandomPassword } from "@/lib/passwordGenerator";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogComponent } from "./AlertDialogComponent";

export default function PasswordPage() {

  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  const { user } = useAuth();
  const handleAddNewClick = () => {
    // Handle Add New button click
    console.log("Add New button clicked");
  };

  const handleGeneratePasswordClick = () => {
    const randomPassword = generateRandomPassword();
    setIsAlertDialogOpen(true);
    setGeneratedPassword(randomPassword);
    console.log("Generate Password button clicked", randomPassword);
  };

  const handlePasswordHealthCheckClick = () => {
    // Handle Password Health Check button click
    console.log("Password Health Check button clicked");
  };

  const handleImportPasswordsClick = () => {
    // Handle Import Passwords button click
    console.log("Import Passwords button clicked");
  };

  const [passwords, setPasswords] = useState([]);

  if (!user) return redirect("/login");

  const userId = user.uid;

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await axios.get(
          `/api/get-passwords?userId=${userId}`
        );
        setPasswords(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching passwords:", error);
        setPasswords([]); // Ensure the state is an array even on error
      }
    };

    fetchPasswords();
  }, [userId]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Your Vault</h1>
          <SheetComponent />
        </div>

        <Card className="mb-6 ">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your passwords and secure notes.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-col md:flex-row">
            <Button variant="outline" onClick={handleGeneratePasswordClick}>
              Generate Password
            </Button>
            <Button variant="outline" onClick={handlePasswordHealthCheckClick}>
              Password Health Check
            </Button>
            <Button variant="outline" onClick={handleImportPasswordsClick}>
              Import Passwords
            </Button>
          </CardContent>
        </Card>

        <div className="flex items-center space-x-2 mb-4">
          <Input placeholder="Search passwords..." className="max-w-sm" />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Website</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {passwords && passwords.map((password: any) => (
              <TableRow key={password.id}>
                <TableCell>{password.website}</TableCell>
                <TableCell>{password.username}</TableCell>
                <TableCell>{dateConverter(password.updatedAt).date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
       <AlertDialogComponent
              isAlertDialogOpen={isAlertDialogOpen}
              setIsAlertDialogOpen={setIsAlertDialogOpen}
              isPassword={true}
              password={generatedPassword}
            />
    </div>
  );
}
