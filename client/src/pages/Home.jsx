import React from 'react'

const Home = () => {
    return (
        <div className='mb-20'>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                Welcome to DevVibes — A Developer's Blog
            </h1>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                DevVibes is your go-to place for learning web development in a simple, beginner-friendly way. From React to MongoDB, you’ll find step-by-step articles, real-world examples, and useful explanations to help you level up your skills.
            </p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                Every post is written with simplicity in mind, so even if you're just starting, you'll find it easy to follow and apply.
            </p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                Start learning, build cool projects, and become the developer you've always wanted to be!
            </p>

            <h2 className='text-xl font-semibold mt-10 mb-4 text-gray-800'>Recent Articles</h2>
            <ul className='list-disc list-inside text-base text-gray-700'>
                <li>🚀 The Fastest Way to Learn React</li>
                <li>🛠️ MongoDB Basics with Practical Examples</li>
                <li>🌐 Build Your First Webpage with HTML</li>
            </ul>
        </div>
    )
}

export default Home
