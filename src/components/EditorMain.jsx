import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editorActions } from "../store/editor.slice";
import Editor from "@monaco-editor/react";
import { Sledding } from "@mui/icons-material";



export const EditorMain = () => {

  const {
    editor: { code },
    theme: { index, styles },

  } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(index);

  const selectedLanguage = useSelector((state) => state.editor.selectedLanguage);
  //console.log(selectedLanguage);
  let editorTheme = "vs-dark";
  if (index === 1) editorTheme = "light";
  let lang;
  if (selectedLanguage === "python3") lang = "python";
  else if (selectedLanguage === "java") lang = "java";
  else lang = "javascript";


  const handleChange = value => {
    //console.log(value);
    dispatch(editorActions.setCode(value));
  }
  return (

    <Editor
      height="100%"
      theme={editorTheme}
      defaultLanguage={lang}
      defaultValue="// some comment"
      onChange={handleChange}
    />
  );
};
