import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl p-8">
                    <figure className='bg-blue-300 py-8 rounded-2xl'>
                        <img
                            src={image}
                            className='h-[166px]'
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-start gap-4'>
                            {
                                tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-slate-900 text-white">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>By: {author}</p>
                        <div className="border-t-2 border-dashed"></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div>{rating}</div>
                            <div>{totalPages}</div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-90" />
                            </div>
                        </div>
                    </div>
                </div>
            </div></Link>
    );
};

export default Book;