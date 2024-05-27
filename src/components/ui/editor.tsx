"use client";

import { cn } from "@/lib/utils";
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import {
  EditorContent,
  useEditor,
  type Editor as TEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Heading, ImageIcon, Loader2, icons } from "lucide-react";
import React, { useState } from "react";
import { Button, ButtonProps, buttonVariants } from "./button";
import { store } from "@/services/store";
import ImageResize from 'tiptap-extension-resize-image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";

type EditorProps = {
  name: string;
  value: string;
  onChange: (val: string) => void;
};

const Editor = ({ name, value, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit, Image, ImageResize ,Dropcursor, Document, Paragraph, Text],
  //   content: `
  //   <p>This is a basic example of implementing images. Drag to re-order.</p>
  //   <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
  //   <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
  // `,
    editorProps: {
      attributes: {
        class: `prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc w-[342px] md:w-[664px] lg:w-[920px] xl:w-[900px] 2xl:w-[1300px] rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`,
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      onChange(editor.getHTML());
    },
  });


  return (
    <div className="border rounded p-2 space-y-2">
      <Toolbar editor={editor} content={value} />
      <EditorContent cols={100} editor={editor} name={name} content={value} />
    </div>
  );
};

type ToolbarProps = {
  editor: TEditor | null;
  content: string;
};

type Level = 1 | 2 | 3 | 4 | 5 | 6;

const Toolbar = ({ editor, content }: ToolbarProps) => {

  const [uploading, setUploading] = useState(false)

  const onBold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const onItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };

  const onStrike = () => {
    editor?.chain().focus().toggleStrike().run();
  };

  const onHeading = () => {
    editor?.chain().focus().toggleHeading({ level: 2 }).run();
  };
  const onUndo = () => {
    editor?.chain().focus().undo().run();
  };

  const onRedo = () => {
    editor?.chain().focus().redo().run();
  };

  const onBulletList = () => {
    editor?.chain().focus().toggleBulletList().run();
  };

  const onOrderedList = () => {
    editor?.chain().focus().toggleOrderedList().run();
  };

  const onBlockQuote = () => {
    editor?.chain().focus().toggleBlockquote().run();
  };

  const onImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true)
    const fileList = e.target.files
    if (fileList?.length) {
      const formData = new FormData()
      const file = fileList[0]
      formData.set("file", file)
      const src = await store(formData)
      editor?.chain().focus().setImage({src}).run()
      setUploading(false)
    }
  }

  const onHeader = (level: Level) => {
    editor?.chain().focus().toggleHeading({ level }).run();
  };

  const onResetHeader = () => {
    editor?.chain().focus().toggleHeading({level: 6}).run();
    editor?.chain().focus().toggleHeading({level: 6}).run();
  }

  return (
    <div className="flex gap-1">
      <ToolbarButton
        active={editor?.isActive("bold")}
        icon={"Bold"}
        onClick={onBold}
      />
      <ToolbarButton
        active={editor?.isActive("italic")}
        icon={"Italic"}
        onClick={onItalic}
      />
      <ToolbarButton
        active={editor?.isActive("strike")}
        icon={"Strikethrough"}
        onClick={onStrike}
      />
      <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Button
      type={"button"}
      className={cn("w-7 h-7")}
      variant={editor?.isActive("heading") ? "default" : "outline"}
      size={"icon"}
    >
      <Heading size={12} />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={onResetHeader}>Reset</DropdownMenuItem>
    <DropdownMenuItem onClick={() => onHeader(1)}>Level 1</DropdownMenuItem>
    <DropdownMenuItem onClick={() => onHeader(2)}>Level 2</DropdownMenuItem>
    <DropdownMenuItem onClick={() => onHeader(3)}>Level 3</DropdownMenuItem>
    <DropdownMenuItem onClick={() => onHeader(4)}>Level 4</DropdownMenuItem>
    <DropdownMenuItem onClick={() => onHeader(5)}>Level 5</DropdownMenuItem>
    <DropdownMenuItem onClick={() => onHeader(6)}>Level 6</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      <ToolbarButton
        active={editor?.isActive("bulletList")}
        icon={"List"}
        onClick={onBulletList}
      />
      <ToolbarButton
        active={editor?.isActive("orderedList")}
        icon={"ListOrdered"}
        onClick={onOrderedList}
      />
      <ToolbarButton
        active={editor?.isActive("blockQuote")}
        icon={"Quote"}
        onClick={onBlockQuote}
      />
      <label htmlFor="image" className={cn(buttonVariants({variant: "outline", size: "icon"}),"w-7 h-7" )}>
        {uploading ? <Loader2 size={12} className=" animate-spin"/>: <ImageIcon size={12}/>}
      </label>
      <ToolbarButton icon={"Undo"} onClick={onUndo} />
      <ToolbarButton icon={"Redo"} onClick={onRedo} />
      <input id="image" type={"file"} hidden accept="image/*" onChange={onImage}/>
    </div>
  );
};



const ToolbarButton = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "variant" | "size" | "asChild" | "type"> & {
    active?: boolean;
    icon: keyof typeof icons;
  }
>(({ className, active, icon, ...props }, ref) => {
  const LucideIcon = icons[icon];
  return (
    <Button
      type={"button"}
      className={cn("w-7 h-7", className)}
      variant={active ? "default" : "outline"}
      size={"icon"}
      {...props}
    >
      <LucideIcon size={12} />
    </Button>
  );
});
ToolbarButton.displayName = "ToolbarButton";

export default Editor;
