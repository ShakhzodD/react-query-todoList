import React from "react";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getBook, updateBook } from "../api";
import BookForm from "../shareed/BookForm";
export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery(["userr", { id }], getBook);

  const { mutateAsync, isSuccess } = useMutation(updateBook);

  const onFormSubmit = async data => {
    await mutateAsync({ ...data, id });
    navigate("/");
  };

  return (
    <div>
      <h1>{isSuccess ? "OXWADI" : "OXWAMADI"}</h1>
      <BookForm defaultValues={data} onFormSubmit={onFormSubmit} />
    </div>
  );
}
