import React from "react";

export default function Contact() {
    return (
        <div className=" flex  items-center justify-center bg-white sm:items-center sm:pt-0">
            <div className="min-h-[150px] max-w-4xl mx-auto sm:px-9 lg:px-12">
                <div>
                    <div>
                        <div className="p-6 ml-10 bg-gray-200 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold ">
                                Contact Details
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2 w-96 ">
                                If you want any services in react and python stack, feel free to contact me via given details:
                            </p>

                            <div className="flex items-center mt-4 text-gray-600">
                                <img src="./src/assets/linkedin.png" alt="" width="5%" />
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    <a className="underline" href="https://www.linkedin.com/in/maham-tahir-26540a231/">Maham Tahir</a>


                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <img src="./src/assets/gmail.png" alt="" width="5%" />
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    <a className="underline" href="mailto:mahamst31@gmail.com">mahamst31@gmail.com</a>
                                </div>

                            </div>

                        </div>
                        <div className="flex">
                            <img
                                className="w-20 mt-10 ml-5"
                                src="./src/assets/arrow.png" alt="" />
                            <img
                                className="w-20 mt-10 ml-4"
                                src="./src/assets/arrow.png" alt="" />
                            <img
                                className="w-20 mt-10 ml-4"
                                src="./src/assets/arrow.png" alt="" />
                            <img
                                className="w-20 mt-10 ml-4"
                                src="./src/assets/arrow.png" alt="" />
                            <img
                                className="w-20 mt-10 ml-4"
                                src="./src/assets/arrow.png" alt="" />
                            <img
                                className="w-20 mt-10 ml-4"
                                src="./src/assets/arrow.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <img
                className="mb-16"
                    src="./src/assets/contactPic.png" alt="" width="90%" />
            </div>
        </div>
    );
}
