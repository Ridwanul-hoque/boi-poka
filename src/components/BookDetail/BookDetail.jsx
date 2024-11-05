import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utitlity/addToDb";

const BookDetail = () => {
    const {bookId} = useParams()
    const id= parseInt(bookId)
    const data = useLoaderData()
    // console.log(data)
    const handleMarkAsRead = (id) => {
        addToStoredReadList(id)
    }
    const handleWishList = (id) => {
        addToStoredWishList(id)
    }


    const book = data.find(book => book.bookId === id)

    const {bookId:currentBookId, image} = book
    return (
        <div className="my-12">
            <h2>Book Details: {bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Read</button>
            <button onClick={()=>handleWishList(bookId)} className="btn btn-accent">Wishlist</button>
        </div>
    );
};






export default BookDetail;
