import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./menu-bar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

type TextEditorProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

function TextEditor({ value, onChange, onBlur }: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "min-h-[400px] border rounded-md bg-slate-50 py-5 px-5",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} onBlur={onBlur} />
    </>
  );
}

export default TextEditor;
