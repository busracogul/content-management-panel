import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";

const schema = z.object({
  title: z.string().min(1, "Title required"),
  imageUrl: z.string().url("Enter a valid URL"),
  paragraph: z.string().min(10, "Text required"),
  listItems: z.string().min(1, "List items required"),
  quote: z.string().min(10, "Quote required"),
});

type FormData = z.infer<typeof schema>;

function ContentPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
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
        <Label className="block text-gray-700 text-lg font-light">
          Text Blog
        </Label>
        <Textarea
          {...register("paragraph")}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {errors.paragraph && (
          <span className="text-red-500 text-sm">
            {errors.paragraph.message}
          </span>
        )}
      </div>

      <div>
        <Label className="block text-gray-700 text-lg font-light">
          List Blog
        </Label>
        <Textarea
          {...register("listItems")}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {errors.listItems && (
          <span className="text-red-500 text-sm">
            {errors.listItems.message}
          </span>
        )}
      </div>

      <div>
        <Label className="block text-gray-700 text-lg font-light">
          Quote Blog
        </Label>
        <Textarea
          {...register("quote")}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        {errors.quote && (
          <span className="text-red-500 text-sm">{errors.quote.message}</span>
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
  );
}

export default ContentPage;
