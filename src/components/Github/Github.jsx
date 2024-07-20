import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    /*
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/MahamTahir31')  
        .then( response => response.json())
        .then(data =>{
            console.log(data);
                setData(data)
        })

    }, [])
    */
    return (
        <>
        <div className=" h-full w-full text-center m-4 bg-gray-600 text-white p-4 text-4xl">
            
            
            <p className="mb-10">
                Name: {data.name}
            </p>

            <img className="m-auto" src={data.avatar_url} alt="Git Picture" width={300} />
            <h6 className="text-2xl mt-10"> Github Followers: {data.followers}</h6>
        </div>
        {/* <video className="video-bg" autoPlay muted loop>
        <source src="./src/assets/bgVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video> */}
        </>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/MahamTahir31')
    return response.json()
}      