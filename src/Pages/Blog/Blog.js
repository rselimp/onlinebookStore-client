import React from 'react';

const Blog = () => {
    return (
        <div className='dark:bg-gray-700'>
            <div className='dark:text-white pl-3'>
            <h1 className='text-3xl'>1.Difference between SQL and NoSQL</h1>
            <p>SQL--RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.
                These databases are not suited for hierarchical data storage.
                These databases are best suited for complex queries.Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</p>
            <p>NoSQL--Non-relational or distributed database system.They have dynamic schemaThese databases are best suited for hierarchical data storage.Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>

            <h1 className='text-3xl'>2.What is JWT, and how does it work?</h1>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
                <h1 className='text-3xl'>3.What is the difference between javascript and NodeJS?</h1>
                <p>JavaScript---Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                <p>NodeJs---NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>

                <h1 className='text-3xl'>How does NodeJS handle multiple requests at the same time?</h1>

                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>

        </div>
    );
};

export default Blog;