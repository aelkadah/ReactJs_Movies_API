import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const PaginationComp = () => {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPageCount(pages);
  }, [pages]);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      // pageCount={pageCount}
      pageCount={500}
      previousLabel="< السابق"
      renderOnZeroPageCount={null}
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComp;
