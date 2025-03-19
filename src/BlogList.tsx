import { useEffect, useState } from "react";
import { addBlog, fetchListBlog, updateBlog } from "./api/api";

interface BlogListProps {
  id: string;
  title: string;
  imageUrl: string;
  paragraph: string;
}[];

function BlogList() {
  const [blogs, setBlogs] = useState<BlogListProps[]>([]);
  const [newBlog, setNewBlog] = useState({ title: "", imageUrl: "", paragraph: "" });
  const [editBlogId, setEditBlogId] = useState<string | null>(null);


  useEffect(() => {
    async function getBlog() {
      try {
        const fetchedBlogs = await fetchListBlog();
        const fetchData = fetchedBlogs.data;
        console.log("dfksldf", fetchData);
        setBlogs(fetchData);
      } catch (err) {
        console.log(err);
      }
    }

    getBlog();
  }, []);

  const handleAddBlog = async () => {
    try {
      const addedBlog = await addBlog(newBlog);
      setBlogs([...blogs, addedBlog]);
      setNewBlog({ title: "", imageUrl: "", paragraph: "" });
    } catch (err) {
      console.error("Failed to add blog", err);
    }
  };

  //  Blog Güncelleme
//   const handleUpdateBlog = async (id: string, updatedData: Partial<BlogListProps>) => {
//     try {
//       const updatedBlog = await updateBlog(id, updatedData);
//       setBlogs(blogs.map((blog) => (blog.id === id ? updatedBlog : blog)));
//       setEditBlogId(null);
//     } catch (err) {
//       console.error("Failed to update blog", err);
//     }
//   };

  // Blog Silme
//   const handleDeleteBlog = async (id: string) => {
//     try {
//       await deleteBlog(id);
//       setBlogs(blogs.filter((blog) => blog.id !== id));
//     } catch (err) {
//       console.error("Failed to delete blog", err);
//     }
//   };

  return (
    <>
      <div>BlogList</div>

      {blogs.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </>
  );
}

export default BlogList;
