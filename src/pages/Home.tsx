import { Button, Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchBooksTop } from "../data/storageAPI";

// type topbook = {
//   book_id: string;
//   position: string;
//   name: string;
//   cover: string;
//   rating: number;
//   url: string;
// };
export function Home() {
  const nav = useNavigate();
  // API 429 :(
  // const { isLoading, error, data } = useQuery<topbook[]>(
  //   "topBooks",
  //   fetchBooksTop
  // );
  // if (isLoading) {
  //   return <div>Loaging...</div>;
  // }
  // if (error) {
  //   return <div>Something went wrong!</div>;
  // }
  //   return (
  //     <>
  //       ( data == undefined ? <h1>Home</h1> : <h1>Home</h1>
  //       <Row>
  //         {data?.map((book: topbook) => (
  //           <Col>
  //             <h1>{book.name}</h1>
  //             <img src={book.cover} alt="" />
  //           </Col>
  //         ))}
  //       </Row>
  //       )
  //     </>
  //   );
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 mtext-center">
      <div className=" p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal">Start your BOOKLIFE!</h1>
        <p className="lead fw-normal mt-3">
          Explore the world form this moment.
        </p>
        <Button
          variant="outline-secondary"
          className="mt-5 fs-2"
          onClick={() => nav("/store")}
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
}
