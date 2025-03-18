import { Toggle } from "../components/ui/toggle";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuBold,
  LuItalic,
  LuHighlighter,
  LuAlignLeft,
  LuAlignRight,
  LuAlignCenter,
  LuList,
  LuListOrdered,
  LuStrikethrough,
  LuAlignJustify,
  LuArrowDownWideNarrow,
  LuArrowUpToLine,
  LuArrowDownToLine,
} from "react-icons/lu";
import { RxText } from "react-icons/rx";

function MenuBar({ editor }: { editor: any }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group border rounded-md p-1 my-4 bg-slate-100 space-x-2 z-50">
      <div className="button-group">
        <Toggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <LuHeading1 style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          <LuHeading2 style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          <LuHeading3 style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          <RxText style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <LuBold style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <LuItalic style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <LuStrikethrough style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          <LuHighlighter style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <LuAlignLeft style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <LuAlignCenter style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <LuAlignRight style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <LuAlignJustify style={{ width: "20px", height: "20px" }} />
        </Toggle>

        <Toggle
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <LuList style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <LuListOrdered style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().splitListItem("listItem").run()}
          disabled={!editor.can().splitListItem("listItem")}
        >
          <LuArrowDownWideNarrow style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
          disabled={!editor.can().sinkListItem("listItem")}
        >
          <LuArrowDownToLine style={{ width: "20px", height: "20px" }} />
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          disabled={!editor.can().liftListItem("listItem")}
        >
          <LuArrowUpToLine style={{ width: "20px", height: "20px" }} />
        </Toggle>
      </div>
    </div>
  );
}

export default MenuBar;
