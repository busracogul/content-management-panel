import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" bg-slate-100">
        <div className="container mx-auto">
          <nav className="justify-between flex py-5">
            <h1 className="text-2xl font-semibold text-gray-800">
              Content Panel
            </h1>
          </nav>
        </div>
      </div>
      <div className="container mx-auto flex justify-end mt-8">
        <Link to="/content-page">
          <Button
            variant="outline"
            className="bg-green-300 text-green-800 text-md p-5"
          >
            + Add Content
          </Button>
        </Link>
      </div>
    </>
  );
}

export default App;
