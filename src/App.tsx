import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";

function App() {
  return (
    <>
      <div className=" bg-slate-100">
        <div className="container mx-auto">
          <nav className="justify-between flex py-5">
            <h1 className="text-2xl font-semibold text-gray-800">
              Content Panel
            </h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    {/* <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            /> */}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    {/* <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            /> */}
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">cancel</Button>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
