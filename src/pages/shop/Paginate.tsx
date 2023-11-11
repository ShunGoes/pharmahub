import ReactPaginate from "react-paginate";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageCount: number;
};

const Paginate: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  pageCount,
}) => {
  function handlePageclick({ selected }: { selected: number }) {
    setCurrentPage(selected);
  }

  const hidePrevious = currentPage === 0;
  const hideNext = currentPage === pageCount - 1;

  return (
    <ReactPaginate
      nextClassName={
        hideNext
          ? undefined
          : `absolute border border-[#9EA6A9] w-14 h-14 rounded-[5px] p-6 flex items-center justify-center relative`
      }
      pageClassName="border border-[#9EA6A9] w-14 h-14 rounded-[5px] p-6 flex items-center justify-center relative"
      nextLinkClassName="flex justify-center items-center absolute h-full w-full"
      previousLinkClassName="flex justify-center items-center absolute h-full w-full"
      pageLinkClassName="flex justify-center items-center absolute h-full w-full"
      previousClassName={
        hidePrevious
          ? undefined
          : `absolute border border-[#9EA6A9] w-14 h-14 rounded-[5px] p-6 flex items-center justify-center relative`
      }

      breakLabel="..."
      breakClassName="border border-[#9EA6A9] w-14 h-14 rounded-[5px] p-6 flex items-center justify-center relative"
      nextLabel={
        hideNext ? null : <MdArrowForwardIos className="text-[#111111]" />
      }
      previousLabel={
        hidePrevious ? null : <MdArrowBackIos className="text-[#111111]" />
      }
      pageCount={pageCount}
      onPageChange={handlePageclick}
      pageRangeDisplayed={4}
      renderOnZeroPageCount={null}
      className="flex justify-center gap-x-2 mt-20 relative"
    />
  );
};

export default Paginate;
