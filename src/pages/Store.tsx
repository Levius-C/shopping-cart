import { Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { StoreBooks } from "../components/StoreBooks";
import { fetchBooks } from "../data/storageAPI";

export type book = {
  author: string;
  description: string;
  id: number;
  imgUrl: string;
  price: string;
  review: string;
  source: Source;
  title: string;
};

enum Source {
  WWWAmazonCoUk = "www.amazon.co.uk",
}

export function Store() {
  const { isLoading, error, data } = useQuery<book[] | null>(
    "bookData",
    fetchBooks
  );

  if (isLoading) {
    return <div>Loaging...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {data?.map((book: book) => (
          <Col key={book.id}>
            <StoreBooks {...book} />
          </Col>
        ))}
      </Row>
    </>
  );
  // const [booksData, setBooksData] = useState<book[] | null>();

  // useEffect(() => {
  //   fetch("https://bookshelves.p.rapidapi.com/books", {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "c5ee769edcmshd32a11d7e1c5667p13d5cejsne66cbe2923b5",
  //       "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((res) => setBooksData(res.Books));
  // }, []);

  // return (
  //   <div>
  //     <h1>
  //       {booksData &&
  //         booksData?.map((book: book) => (
  //           <div>
  //             <h1>{book.title}</h1>
  //             <img src={book.imgUrl} alt="" />
  //           </div>
  //         ))}
  //     </h1>
  //   </div>
  // );
}
