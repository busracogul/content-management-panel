import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import TextEditor from "./text-editor";
import { addBlog } from "./api/api"; 
import { toast } from "sonner"; 

const schema = z.object({
  title: z.string().min(1, "Title required"),
  imageUrl: z.string().url("Enter a valid URL"),
  paragraph: z.string().min(10, "Text required"),
});

type FormData = z.infer<typeof schema>;

function ContentPage() {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Form submit işlemi
  const onSubmit = handleSubmit(async (data) => {
    await addBlog(data);
    toast.success("Content added successfully!");
    reset(); 
  });

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
