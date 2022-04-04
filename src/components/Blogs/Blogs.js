import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='shadow-lg p-5 rounded my-4'>
                <h3>What is Context API ?</h3>
                <p>Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease. Let's see how to use it. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </p>
            </div>
            <div className='shadow-lg p-5 rounded'>
                <h3>What is Semantic tag ?</h3>
                <p> Semantic tag or semantic markup is tag that introduces meaning to the web page rather than just presentation. For example, a tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them</p>
            </div>
        </div>
    );
};

export default Blogs;