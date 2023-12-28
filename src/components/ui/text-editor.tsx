"use client"

import React, { useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css'

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  return (
     <Editor editorState={editorState} onChange={handleChange} />
  );
};

export default RichTextEditor;