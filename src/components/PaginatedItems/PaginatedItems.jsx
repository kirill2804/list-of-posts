import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PostItem from '../PostItems';

import styles from './PaginatedItems.module.css'

import paginateList from './paginateList.css'

const url = 'https://jsonplaceholder.typicode.com/posts';




function PaginatedItems({ itemsPerPage }) {

    const [items, setDate] = useState([]);

    useEffect(() => {
       fetch(url)
       .then((response) => {
          if (!response.ok) {
            throw new Error('error get data!');
          }
          return response.json();
        })
       .then((data) => {
         setDate(data);
       })
       .catch((err) => {
            console.log(err);
        })
    }, [])  

  
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <h1  className={styles.title}>List of posts</h1>
      <div className={styles.containerInner}>
        <PostItem currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}

        breakClassName={'page-item-breack'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'arrow-prev'}
        previousLinkClassName={'page-link'}
        nextClassName={'arrow-next'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
}


export default PaginatedItems