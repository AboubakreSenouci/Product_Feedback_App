import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldErrors } from "react-hook-form";


import GoBack from "../components/GoBack";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

import arrow_down from "../assets/shared/icon-arrow-down.svg";
import { useForm } from "react-hook-form";


type FormData = {
  title: string;
  detail: string;
};

const Addfeedback = () => {
  const schema: ZodType<FormData> = z.object({
    title: z.string().min(1),
    detail: z.string().min(1),
  });
  const {register, handleSubmit, formState: { errors } , } = useForm<FormData>({ resolver: zodResolver(schema), });
  const navigate = useNavigate();
  const Filter = ["UI", "UX", "Feature", "Enhancement", "Bug"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(Filter[0]);
 

  const submitData = (data: FormData) => {
    console.log("It's Work Perfectely"+data);
  };
  return (
    <div className="bg-gray-100 min-h-screen space-y-16 p-20 font-jost sm:p-8 lg:p-14">
      <div className="max-w-2xl mx-auto space-y-16 ">
        <GoBack />
        <form
          className="bg-white p-10 relative rounded-xl"
          onSubmit={handleSubmit(submitData)}
        >
          <img
            src="https://lm-product-feedback-app.netlify.app/static/media/icon-new-feedback.de9414c7.svg"
            alt="plus_icon"
            className="absolute top-[-30px] w-[70px]"
          />
          <h1 className="font-jost text-3xl text-blue-950 font-bold tracking-wide py-10">
            Create New Feedback
          </h1>
          <div className="py-4">
            <label className="text-xl text-blue-950 font-black ">
              Feedback Title
            </label>
            <p className="text-gray-600 py-2 tracking-wide">
              Add a short, descriptive headline
            </p>
            <input
              type="text"
              className="bg-gray-100 w-full h-14 rounded-lg outline-none px-6 focus:border focus:border-blue-700 text-gray-600 text-xl "
              {...register("title")}
            />
             {errors.title && <span className="text-xl text-red-600 py-2 font-jost">Can't be empty</span>}
          </div>
          <div className="py-4">
            <label className="text-xl text-blue-950 font-black ">
              Category
            </label>
            <p className="text-gray-600 py-2 tracking-wide">
              Choose a category for your feedback
            </p>
            <div>
              <div
                className="bg-gray-100 w-full h-14 rounded-lg hover:border hover:border-blue-700 cursor-pointer duration-100 flex justify-between items-center px-6"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p className="text-blue-950 font-jost font-black">
                  {selectedItem}
                </p>
                <img
                  src={arrow_down}
                  alt="arrow_icon"
                  className={`${isOpen && "rotate-180"}`}
                />
              </div>
              <div className="relative">
                <Dropdown
                  data={Filter}
                  isOpen={isOpen}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  className="mt-6 shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="py-4">
            <label className="text-xl text-blue-950 font-black ">
              Feedback Detail
            </label>
            <p className="text-gray-600 py-2 tracking-wide">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <input
              type="text"
              className="bg-gray-100 w-full h-28 rounded-lg outline-none px-6 focus:border focus:border-blue-700 text-gray-600 text-xl "
              {...register("detail")}
            />
            {errors.detail && <span className="text-xl text-red-600 py-2 font-jost">Can't be empty</span>}
          </div>
          <div
            className="lg:flex lg:justify-start lg:flex-row-reverse  gap-4 py-6 sm:flex sm:flex-col
          "
          >
            <button type="submit" className="w-">
              <Button
                text={"add feedback"}
                className="py-3 sm:w-full sm:py-2.5 lg:w-fit"
                variant={"fuchsiaContained"}
              />
            </button>
            <button onClick={() => navigate("/")}>
              <Button
                text={"cancel"}
                variant={"blueContained"}
                className="w-full py-2.5 lg:w-fit"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addfeedback;

