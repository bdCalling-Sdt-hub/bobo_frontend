import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-4 flex items-center justify-end gap-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border px-3 py-1 hover:bg-gray-200 disabled:opacity-50"
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded border px-3 py-1 ${
            currentPage === page
              ? "bg-[#303060] text-white"
              : "hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border px-3 py-1 hover:bg-gray-200 disabled:opacity-50"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};
