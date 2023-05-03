import React from 'react';

const Blog = () => {
    return (
        <div className='text-start'>
            <h2 className='text-3xl'>Q: What is the differences between uncontrolled and controlled components?</h2>
            <p><strong>Ans</strong>: Controlled components are those that are directly managed and controlled by the system itself, usually through a central component or controller. These components typically have well-defined interfaces and operate within a specific set of rules or constraints set by the system.

            On the other hand, uncontrolled components are those that operate outside of the direct control of the system. These components may be external to the system, or may be parts of the system that operate independently of the central control mechanism. Uncontrolled components may have varying interfaces, and may operate in a more ad-hoc or flexible manner.</p>
            <br />
            <h2 className='text-3xl'>Q: How to validate React props using PropTypes?</h2>
            <p><strong>Ans</strong>: React provides a utility called PropTypes that can be used to validate the type and shape of props passed to a component</p>

            <br />
            <h2 className='text-3xl'>Q: The differences between uncontrolled and controlled components?</h2>
            <p><strong>Ans</strong>: Node.js is a runtime environment that allows developers to use JavaScript on the server-side. It provides an event-driven, non-blocking I/O model that allows for efficient, scalable network applications. Node.js includes a built-in module system that allows developers to easily import and use external libraries and modules.

            Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, request handling, and response generation. Express.js provides a simpler, more streamlined API than Node.js for building web applications.</p>
            <br />
            <h2 className='text-3xl'>Q: What is a custom hook, and why will you create a custom hook?</h2>
            <p><strong>Ans</strong>: In React, a custom hook is a function that uses one or more of the built-in hooks provided by React, and allows you to encapsulate and reuse complex logic across different components.

            Custom hooks are created by prefixing a function name with "use", which signals to React that the function is intended to be used as a hook. Custom hooks can use other built-in hooks, such as useState, useEffect, useContext, and more, to create reusable logic for handling common tasks like fetching data, managing state, or interacting with third-party libraries. </p>
        </div>
    );
};

export default Blog;