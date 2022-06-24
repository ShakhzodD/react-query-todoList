import React from "react";
import BookForm from "../shareed/BookForm";
import { useMutation } from "react-query";
import { createBook } from "../api";
export default function CreateBook() {
  const { mutateAsync } = useMutation(createBook);

  const onFormSubmit = async data => {
    await mutateAsync(data);
  };
  return (
    <div>
      <BookForm onFormSubmit={onFormSubmit} />
    </div>
  );
}
