import React, { useState, useEffect } from "react";
import classnames from "classnames";

interface TodoTextInput {
  onSave: any;
  text: any;
  placeholder: any;
  editing: any;
  newTodo: any;
}

function TodoTextInput(props: TodoTextInput) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props.text || "");
  }, []);

  const handleSubmit = (e: any) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      props.onSave(text);
      if (props.newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  const handleBlur = (e: { target: { value: any } }) => {
    if (!props.newTodo) {
      props.onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: props.editing,
        "new-todo": props.newTodo,
      })}
      type="text"
      placeholder={props.placeholder}
      autoFocus={true}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}

export default TodoTextInput;
