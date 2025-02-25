import PersianNumber from "./Components/utils/PersianNumber";



function My3links() {
  return (
    <div>
      <div className="flex justify-center ">
        <div>
          <a href="" className="rounded-r-lg  px-3 py-2 border">
            -
          </a>
        </div>
        <div>
          <a href="" className=" px-3 py-2 border">
          <PersianNumber number={1} />
          </a>
        </div>
        <div>
          <a href="" className="rounded-l-lg  px-3 py-2 border">
            +
          </a>
        </div>
      </div>
    </div>
  );
}

export default My3links;
