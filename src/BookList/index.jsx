import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllBooks, removeBooks } from "../api";
import { Link } from "react-router-dom";
export const BookList = () => {
  const { data, error, isLoading, isError } = useQuery("user", getAllBooks);
  const querClient = useQueryClient();
  const { mutateAsync } = useMutation(removeBooks);

  const remove = async id => {
    await mutateAsync(id);
    querClient.invalidateQueries("user");
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <table
        className="table"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <tbody>
          {data
            ? data.map((item, idx) => (
                <tr key={idx}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{new Date(item.created_at).toDateString()}</td>
                  <td>
                    <Link to={`/update-book/${item.id}`}>Update</Link>
                  </td>
                  <td>
                    <button onClick={() => remove(item.id)}>delete</button>
                  </td>
                </tr>
              ))
            : "--"}
        </tbody>
      </table>
    </div>
  );
};
