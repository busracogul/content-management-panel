import axios from "axios";

const instance = axios.create({
  baseURL: "https://67dffa007635238f9aac179c.mockapi.io/api/v1/blogs",
});

export async function fetchListBlog() {
  const response = await instance.get("/");
  return response;
}

export async function addBlog(blogData: {
  title: string;
  imageUrl: string;
  paragraph: string;
}) {
  const response = await instance.post("/", blogData);
  return response.data;
}

export async function updateBlog(
  id: string,
  updateData: Partial<{ title: string; imageUrl: string; paragraph: string }>
) {
  const response = await instance.put(`/${id}`, updateData);
  return response.data;
}

export async function deleteBlog(id: string) {
  await instance.delete(`/${id}`);
}

export default instance;
