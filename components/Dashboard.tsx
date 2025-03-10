import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, Plus, Search } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SecureVault</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost">Passwords</Button>
            <Button variant="ghost">Notes</Button>
            <Button variant="ghost">Settings</Button>
            <Button variant="outline">Log Out</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Your Vault</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your passwords and secure notes.</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button variant="outline">Generate Password</Button>
            <Button variant="outline">Password Health Check</Button>
            <Button variant="outline">Import Passwords</Button>
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
            {[1, 2, 3].map((item) => (
              <TableRow key={item}>
                <TableCell>example.com</TableCell>
                <TableCell>user@example.com</TableCell>
                <TableCell>2023-06-01</TableCell>
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
    </div>
  )
}

