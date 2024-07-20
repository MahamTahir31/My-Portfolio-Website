import React from "react";


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                        className="mb-8"
                            src="./src/assets/frame.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Welcome to the about section of my portfolio! Do you know who I'm?
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I'm Maham Tahir, a passionate Python Developer & Frontend engineer. As a frontend engineer, my focus is on developing the sites meeting the criteria of real world. I develop the stunning designs using React - A strong library of JavaScript. Currently, I'm learning these all the things and practicing them by developing the interesting projects.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Plus, If I talk about my domain of interest so it is data science - an emerging field nowadays! Trying to build concepts related to this domain through various courses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}