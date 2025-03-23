import BlogList from "./pages/BlogList";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" bg-slate-100 px-10">
        <div className="container mx-auto">
          <nav className="justify-between flex py-5">
            <p className="text-2xl font-semibold text-slate-800">
              Content Panel
            </p>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-10 flex justify-end mt-8">
        <Link to="/contents">
          <Button
            variant="outline"
            className="bg-slate-800 hover:bg-slate-700 hover:text-slate-100 text-slate-100 text-md p-5"
          >
            + Add Content
          </Button>
        </Link>
      </div>

      <BlogList />
    </>
  );
}

export default App;
