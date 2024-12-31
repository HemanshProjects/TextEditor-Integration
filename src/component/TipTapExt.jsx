import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import {
  EditorContent,
  EditorProvider,
  useCurrentEditor,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const content = "";
const extensions = [
  Color.configure({
    types: [TextStyle.name, ListItem.name],
  }),
  Highlight.configure({ multicolor: true }),
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  TextStyle.configure({ types:[ListItem.name]}),
  StarterKit,
];

const TipTapExt = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) {
    return null;
  }

  const Bold = () => {
    editor.chain().focus().toggleBold().run();
    console.log("Clicked");
  };
  const Italic = () => {
    editor.chain().focus().toggleItalic().run();
  };
  const Strike = () => {
    editor.chain().focus().toggleStrike().run();
  };
  const h4 = () => {
    editor.chain().focus().toggleHeading({ level: 4 }).run();
  };
  const h5 = () => {
    editor.chain().focus().toggleHeading({ level: 5 }).run();
  };
  const h6 = () => {
    editor.chain().focus().toggleHeading({ level: 6 }).run();
  };
  const unOList = () => {
    editor.chain().focus().toggleBulletList().run();
  };
  const oList = () => {
    editor.chain().focus().toggleOrderedList().run();
  };
  const codeBlock = () => {
    editor.chain().focus().toggleCodeBlock().run();
  };
  const horizontalRule = () => {
    editor.chain().focus().setHorizontalRule().run();
  };
  const yellow = () => {
    editor.chain().focus().setColor("#FAF594").run();
  };
  const purple = () => {
    editor.chain().focus().setColor("#958DF1").run();
  };
  const alignLeft = () => {
    editor.chain().focus().setTextAlign("left").run();
  };
  const alignCenter = () => {
    editor.chain().focus().setTextAlign("center").run();
  };
  const alignRight = () => {
    editor.chain().focus().setTextAlign("right").run();
  };
  const highlight = () => {
    editor.chain().focus().toggleHighlight({ color: "#F98181" }).run();
  };
  const undo = () => {
    editor.chain().focus().undo().run();
  };

  const handleSave=()=>{
    console.log(editor.getHTML())
  }
  return (
    <div className="outerdiv">
      <div className="btndiv">
        <button
          onClick={Bold}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          B
        </button>
        <button
          onClick={Italic}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          I
        </button>
        <button
          onClick={Strike}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Strike
        </button>
        <button
          onClick={h4}
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          h4
        </button>
        <button
          onClick={h5}
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          h5
        </button>
        <button
          onClick={h6}
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          h6
        </button>
        <button
          onClick={unOList}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          UnOrdered List
        </button>
        <button
          onClick={oList}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          Ordered List
        </button>
        <button
          onClick={codeBlock}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          Code Block
        </button>
        <button
          onClick={horizontalRule}
          className={editor.isActive("horizontalRule") ? "is-active" : ""}
        >
          Horizontal Rule
        </button>
        <button
          onClick={yellow}
          className={
            editor.isActive("textStyle", { color: "#FAF594" })
              ? "is-active"
              : ""
          }
        >
          Yellow
        </button>
        <button
          onClick={purple}
          className={
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active"
              : ""
          }
        >
          Purple
        </button>
        <button
          onClick={alignLeft}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          Left
        </button>
        <button
          onClick={alignCenter}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          Center
        </button>
        <button
          onClick={alignRight}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          Right
        </button>
        <button
          onClick={highlight}
          className={
            editor.isActive("highlight", { color: "#F98181" })
              ? "is-active"
              : ""
          }
        >
          Highlight
        </button>
        <button
          onClick={undo}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </button>
      </div>
      <EditorContent editor={editor} className="editordiv"></EditorContent>
      <button className="savebtn" onClick={handleSave}>Save</button>
    </div>
  );
};

export default TipTapExt;
