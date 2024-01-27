import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
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
import { ProfilePic } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex rounded-full px-2 py-1">
          <ProfilePic />
          <div className="my-auto ml-1 hidden text-xs md:block">
            <h4 className="font-semibold">Judge-Paul</h4>
            <p className="text-[0.65rem] font-light text-secondary-foreground">
              Justin@gmail.com
            </p>
          </div>
          <ChevronDown className="my-auto hidden md:flex" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-48 px-1 py-2">
        <div className="my-auto ml-1 p-1 pb-0.5 text-sm">
          <h4 className="font-semibold">Judge-Paul</h4>
          <p className="text-xs font-light text-secondary-foreground">
            Justin@gmail.com
          </p>
        </div>
        <Separator />
        <Button variant="ghost" className="w-full justify-start px-2">
          Profile
        </Button>
        <Button variant="ghost" className="w-full justify-start px-2">
          Settings
        </Button>
        <Separator />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" className="w-full justify-start px-2">
              Log out
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Log out</AlertDialogTitle>
              <AlertDialogDescription>
                If you log out, you will be required to enter your username and
                password the next time you open the site.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PopoverContent>
    </Popover>
  );
}
