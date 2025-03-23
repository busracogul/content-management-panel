import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchListBlog, deleteBlog } from "../api/api";
import { Pencil, Trash } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  imageUrl: string;
  paragraph: string;
}

function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBlog() {
      try {
        const fetchedBlogs = await fetchListBlog();
        setBlogs(fetchedBlogs.data);
      } catch (err) {
        console.error("Error fetching blogs", err);
      }
    }
    getBlog();
  }, []);

  const handleUpdateBlog = (id: string) => {
    navigate(`/contents/${id}`);
  };

  const handleDeleteBlog = async (id: string) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error("Failed to delete blog", err);
    }
  };

  return (
    <div className="container mx-auto px-10 mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Content</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img src={blog.imageUrl} alt={blog.title} className="w-16 h-16 object-cover rounded-md" />
                </td>
                <td className="p-3 font-medium">{blog.title}</td>
                <td className="p-3 text-gray-600">{blog.paragraph}</td>
                <td className="p-3 flex justify-center gap-3">
                  <button
                    className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    onClick={() => handleUpdateBlog(blog.id)}
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => handleDeleteBlog(blog.id)}
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogList;
