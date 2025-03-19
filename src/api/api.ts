import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export async function fetchListBlog(){
    const response =await instance.get("/contents");
    return response;
}

export async function addBlog(blogData: {title: string; imageUrl: string; paragraph:string}){
  const response = await instance.post("/contents", blogData);
  return response.data;
}

export async function updateBlog(id: string, updateData: Partial<{title: string; imageUrl: string; paragraph: string}>) {
  const response = await instance.put(`/contents/${id}`, updateData);
  return response.data;
}

export async function deleteBlog(id: string) {
  await instance.delete(`/contents/${id}`);
}

export default instance;