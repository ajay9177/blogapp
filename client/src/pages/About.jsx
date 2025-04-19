import React from "react";

const About = () => {
    return (
        <div className='mb-20'>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>About Me</h1>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                Hi, I'm a self-taught developer with a passion for web development and building meaningful tech projects. I created this blog to simplify coding concepts for beginners and share my journey as I grow in the tech world.
            </p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                My goal is to make learning development fun, easy, and less overwhelming. I mostly write about JavaScript, React, MongoDB, and other full stack technologies that I've used in my own projects.
            </p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                When I’m not coding, I enjoy mobile gaming and vibing to music. 🎮🎵 This blog is my digital notebook — I hope it helps you learn faster and build confidently!
            </p>

            <h2 className='text-xl font-semibold mt-10 mb-4 text-gray-800'>My Tech Stack</h2>
            <ul className='list-disc list-inside text-base text-gray-700'>
                <li>💻 Frontend: HTML, CSS, JavaScript, React, Tailwind CSS</li>
                <li>⚙️ Backend: Node.js, Express.js</li>
                <li>🛢️ Database: MongoDB, MySQL</li>
                <li>☁️ Cloud & Tools: AWS, Git, GitHub</li>
            </ul>
        </div>
    );
};

export default About;
