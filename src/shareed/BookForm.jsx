import React from "react";
import { useForm } from "react-hook-form";

export default function BookForm({ defaultValues, onFormSubmit, isLoading }) {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit(data => {
    onFormSubmit(data);
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("name")} />
        <input type="text" {...register("email")} />
        <input type="text" {...register("phone")} />

        <button type="submit">Tasdiqlash</button>
      </form>
    </>
  );
}
