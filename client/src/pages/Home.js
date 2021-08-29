import React from "react";


function Home() {
  return (
    <main>
      <div className="home container mx-auto">
        <h1 className="text-5xl"><strong>Welcome To Fitzy's Fantasy Focus it worked</strong></h1>

      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="md:col-span-1 sm:col-span-2">
          <h3>This weeks video</h3>
          <iframe width="450px" height="253" src="https://www.youtube.com/embed/YgllE1_Zf_I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="md:col-span-1 sm:col-span-2">
          <h3> Other Videos</h3>

        </div>
      </div>
    </main>


  )
}


export default Home;