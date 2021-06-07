import Head from "next/head";
import React, {useState} from "react";
import {IoLogoGithub, IoLogoLinkedin, IoLogoTwitter,} from "react-icons/io5";

const logo = {
  color: "#f3f3f3",
  size: 25,
};

const Home = () => {
  const [getDate, setDate] = useState(null);
  
  setInterval(() => {
    const date = new Date();
    setDate(date.toLocaleDateString() + " " + date.toLocaleTimeString());
  }, 1000);
  
  return (
    <div>
      <Head>
        <title>Muhammed Mustafa Türkben</title>
      </Head>

  
      <main>
        <div className="clock">
          <p> <span> Tarih: </span>{getDate} </p>
        </div>
        <div className="main">
          <div className="name">
            <p className="my">Muhammed Mustafa Türkben</p>
          </div>
          <div className="logo">
            <a href="https://github.com/mturkben">
              <IoLogoGithub color={logo.color} size={logo.size}/>
            </a>
            <a href="https://twitter.com/mturkben721">
              <IoLogoTwitter color={logo.color} size={logo.size}/>
            </a>
            <a href="https://www.linkedin.com/in/m-mustafa-t%C3%BCrkben-3a8aba183/">
              <IoLogoLinkedin color={logo.color} size={logo.size}/>
            </a>
            {/* <a href="https://">
            <IoLogoGooglePlaystore color={logo.color} size={logo.size}/>
            </a> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
