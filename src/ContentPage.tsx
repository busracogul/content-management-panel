import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import TextEditor from "./text-editor";

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
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <div className="max-w-3xl"></div>
      <form
        onSubmit={onSubmit}
        className="mt-12 max-w-3xl mx-auto bg-white p-6 space-y-4"
      >
        <div>
          <Label className="block text-gray-700 text-lg font-light">
            Heading
          </Label>
          <Input
            {...register("title")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>
        <div>
          <Label className="block text-gray-700 text-lg font-light">
            Image Blog
          </Label>
          <Input
            {...register("imageUrl")}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.imageUrl && (
            <span className="text-red-500 text-sm">
              {errors.imageUrl.message}
            </span>
          )}
        </div>
        <div>
          <Label className="block text-gray-700 text-xl font-light">
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
        <div className="flex justify-end mt-12">
          <Button
            type="button"
            onClick={() => reset()}
            className="bg-slate-400 text-slate-100 text-md mr-4 px-8 py-5 rounded-lg hover:bg-slate-500"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-slate-800 text-slate-100 text-md px-8 py-5 rounded-lg hover:bg-slate-700 hover:text-slate-100"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContentPage;
