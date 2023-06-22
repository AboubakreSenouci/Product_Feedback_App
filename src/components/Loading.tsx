function Loading() {
  return (
    <div className="text-center p-28">
        <div
            className=" bg-gray-100 inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-spin-slow"
            role="status"
            >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
        </div>
    </div>
   
  );
}

export default Loading;
