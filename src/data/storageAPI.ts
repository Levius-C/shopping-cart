// the API for books

export const fetchBooks = async () => {
  const Response = await fetch("https://bookshelves.p.rapidapi.com/books", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c5ee769edcmshd32a11d7e1c5667p13d5cejsne66cbe2923b5",
      "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
    },
  }).then((response) => response.json());
  return Response.Books;
};

export const fetchBooksTop = async () => {
  const Response = await fetch(
    "https://hapi-books.p.rapidapi.com/month/2022/9",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c5ee769edcmshd32a11d7e1c5667p13d5cejsne66cbe2923b5",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    }
  ).then((response) => response.json());

  return Response;
};
