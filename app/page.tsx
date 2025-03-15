import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen bg-gray-100 p-4 w-[500px] mx-auto">
        <form className="flex flex-col gap-4 gap-y-2 w-full">
          {/* TEXT   */}
          <input
            type="text"
            placeholder="Text"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* EMAIL   */}
          <input
            type="email"
            placeholder="Email"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* PASSWORD   */}
          <input
            type="text"
            placeholder="Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* CONFIRM PASSWORD   */}
          <input
            type="text"
            placeholder="Confirm Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* TEXTAREA   */}
          <input
            type="textarea"
            placeholder="TextArea"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* RADIO   */}
          <div className="flex gap-2">
            <label>
              <input
                type="radio"
                name="response"
                value="yes"
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input type="radio" name="response" value="no" className="mr-1" />
              No
            </label>
          </div>
          {/* DATE   */}
          <input
            type="date"
            placeholder="Date"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* CHECKBOX   */}
          <div className="flex gap-2">
            <label>
              <input
                type="checkbox"
                name="response"
                value="yes"
                className="bg-white mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                name="response"
                value="no"
                className="bg-white mr-1"
              />
              No
            </label>
          </div>
          {/* BUTTON   */}
          <button className=" text-white bg-blue-500 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
