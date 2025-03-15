import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function AlertDialogComponent({
  isAlertDialogOpen,
  setIsAlertDialogOpen,
  serverError = false,
  success = false,
  isPassword = false,
  password = "",
  setSuccess,
  setServerError
}: {
  isAlertDialogOpen: boolean;
  setIsAlertDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  serverError?: boolean;
  success?: boolean;
  isPassword?: boolean;
  password?: string;
  setSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
  setServerError?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {serverError
              ? "Server Error occured"
              : success
              ? "Congratulations"
              : isPassword
              ? "Here is your generated Password, Save it"
              : "All fields are required"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {serverError
              ? "Please try after sometime"
              : success
              ? "Password saved successfully"
              : isPassword
              ? password
              : "Please fill in all the fields before saving."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsAlertDialogOpen(false)}>
            OK
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
