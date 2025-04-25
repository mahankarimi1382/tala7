import { MdDeleteForever } from "react-icons/md";

function Base64Uploader({ title, image, setImage }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      {title && <h5> {title}:</h5>}
      <div className=" w-full flex   justify-center items-center">
        {image ? (
          <div className=" relative w-20 h-20 ">
            <img
              className=" w-20 h-20 aspect-square"
              width={50}
              height={20}
              src={image}
              alt="Uploaded"
            />
            <div
              onClick={() => setImage(null)}
              className=" group flex justify-center items-center absolute top-0 w-full h-full bg-sky-300 bg-opacity-10 hover:bg-opacity-50 transition-all"
            >
              <MdDeleteForever className=" text-3xl text-red-600 opacity-0 transition-all group-hover:opacity-100 " />
            </div>
          </div>
        ) : (
          <input
            className=" w-full border rounded p-3"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        )}{" "}
      </div>
    </div>
  );
}

export default Base64Uploader;
