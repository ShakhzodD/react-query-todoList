export const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/user`);

  if (!response.ok) {
    throw new Error("Hato");
  }
  return response.json();
};

export const updateBook = async ({ id, ...data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/user/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error(response.json());
  }

  return response.json();
};

export const createBook = async data => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json());
  }

  return response.json();
};

export const getBook = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/user/${id}`
  );

  if (!response.ok) {
    throw new Error("Hato");
  }
  return response.json();
};

export const removeBooks = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/user/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return true;
};
