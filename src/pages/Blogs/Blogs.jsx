import  { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      question: 'What is an access token and refresh token?',
      answer:
        'Access tokens and refresh tokens play a crucial role in authentication and authorization. Access tokens, commonly in the form of Web Tokens (JWT), allow users to access restricted resources on an API. Refresh tokens, on the other hand, are long-lasting tokens used to obtain new access tokens without requiring the user to go through the authentication process again.To store these tokens securely on the client-side. It is recommended to keep access tokens temporarily, often in memory, or in a short-lived storage mechanism such as session storage. However, it is important to be cautious of cross-site scripting (XSS) attacks when storing tokens locally. As for refresh tokens, they should be securely stored, preferably in an HTTP-only cookie, to mitigate the risk of unauthorized access.',
    },
    {
      question: 'Compare SQL and NoSQL databases?',
      answer:
        'SQL and NoSQL databases differ in their approach to data storage and retrieval. SQL databases are based on a structured schema and utilize tables with rows and columns. They offer predefined schemas and support complex queries, ensuring strong consistency. However, SQL databases may have limitations in terms of flexibility. On the other hand, NoSQL databases have a more flexible approach to data storage. They can handle semi-structured or unstructured data effectively. NoSQL databases prioritize scalability, availability, and performance, but they may sacrifice some consistency guarantees compared to SQL databases.',
    },
    {
      question: 'What is Express.js? What is Nest.js?',
      answer:
        'Express.js is a widely used web application framework specifically designed for Node.js. It provides a streamlined and concise way to create web servers and APIs. Express.js is highly regarded for its adaptability, vast ecosystem of middleware, and user-friendly nature, making it a popular choice for developers.Nest.js, built on top of Node.js, is a progressive web application framework that leverages TypeScript. It incorporates principles from object-oriented programming, such as decorators and dependency injection, taking inspiration from Angular. Nest.js places a strong emphasis on modularity, extensibility, and maintainability, making it an ideal framework for building scalable and robust applications.',
    },
    {
      question: 'What is MongoDB aggregate and how does it work?',
      answer:
        'MongoDB is aggregate framework is a powerful tool for performing data aggregation operations. It allows for data processing and transformation using a pipeline of stages.The aggregate pipeline consists of various stages, including $match, $group, $project, $sort, and more. Each stage applies a specific operation to the data, with the output of one stage serving as the input for the next stage.By connecting and combining these stages, you can perform complex queries, filtering, grouping, sorting, joining, and other operations efficiently. The aggregate framework enhances the flexibility and effectiveness of data retrieval and analysis from MongoDB.',
    },
  ];

  return (
    <div className="accordion m-5 w-50 p-5">
      {accordionData.map((data, index) => (
        <div className="accordion-item" key={index}>
          <h5
            className={`accordion-header m-3 ${index === activeIndex ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {data.question}
          </h5>
          <div
            className={`accordion-collapse collapse ${
              index === activeIndex ? 'show' : ''
            }`}
          >
            <div className="accordion-body">{data.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;