import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { fetchListBlog, updateBlog, addBlog } from "../api/api";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import TextEditor from "../text-editor";
import { toast } from "sonner";

const schema = z.object({
  title: z.string().min(1, "Title required"),
  imageUrl: z.string().url("Enter a valid URL"),
  paragraph: z.string().min(10, "Text required"),
});

type FormData = z.infer<typeof schema>;

function ContentPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {
    control,
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    async function loadBlogData() {
      if (!id) {
        setLoading(false); // Eğer id yoksa, loading'i hemen false yap
        return; // Yeni içerik ekleme sayfasına yönlendir
      }

      try {
        const response = await fetchListBlog();
        const blog = response.data.find((b: any) => b.id === id);
        if (blog) {
          setValue("title", blog.title);
          setValue("imageUrl", blog.imageUrl);
          setValue("paragraph", blog.paragraph);
        } else {
          toast.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog data", error);
        toast.error("Error fetching blog data");
      } finally {
        setLoading(false);
      }
    }
    loadBlogData();
  }, [id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (!id) {
      await addBlog(data);
      toast.success("Blog created!");
      navigate("/")
    } else {
      await updateBlog(id, data);
      toast.success("Blog updated!");
      navigate("/");
    }
    reset();
  });

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="max-w-3xl mx-auto mt-12 bg-white p-6 space-y-4 shadow-lg rounded-lg">
        <form onSubmit={onSubmit}>
          <div>
            <Label className="block text-gray-700 text-lg font-medium">
              Heading
            </Label>
            <Input
              {...register("title")}
              className="w-full p-2 border rounded mt-1"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <Label className="block text-gray-700 text-lg font-medium">
              Image URL
            </Label>
            <Input
              {...register("imageUrl")}
              className="w-full p-2 border rounded mt-1"
            />
            {errors.imageUrl && (
              <span className="text-red-500 text-sm">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
          <div>
            <Label className="block text-gray-700 text-lg font-medium">
              Text Blog
            </Label>
            <Controller
              control={control}
              name="paragraph"
              render={({ field }) => (
                <TextEditor
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            {errors.paragraph && (
              <span className="text-red-500 text-sm">
                {errors.paragraph.message}
              </span>
            )}
          </div>
          <div className="flex justify-end mt-6">
            <Button
              type="button"
              onClick={() => reset()}
              className="bg-gray-400 text-white px-6 py-3 rounded-md mr-4"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContentPage;
