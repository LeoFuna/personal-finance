'use client';
interface IPaginationButtons {
  onPrev: () => void;
  onNext: () => void;
}

export default function PaginationButtons({
  onPrev,
  onNext,
}: IPaginationButtons) {
  return (
    <div>
      <button
        onClick={onPrev}
        className="inline-flex items-center px-2 py-2 mr-2"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4 hover:opacity-70"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button onClick={onNext} className="inline-flex items-center px-2 py-2">
        <svg
          aria-hidden="true"
          className="w-4 h-4 hover:opacity-70"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
