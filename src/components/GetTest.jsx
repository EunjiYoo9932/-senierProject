// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const SERVER_URL = 'http://localhost:4000';
// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(SERVER_URL); // 자바 서버의 API 엔드포인트에 맞게 수정해주세요.
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Posts</h1>
//       {data.posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>Author: {post.author}</p>
//         </div>
//       ))}

//       <h1>Comments</h1>
//       {data.comments.map((comment) => (
//         <div key={comment.id}>
//           <p>{comment.body}</p>
//           <p>Post ID: {comment.postId}</p>
//         </div>
//       ))}

//       <h1>Profile</h1>
//       <p>Name: {data.profile.name}</p>
//     </div>
//   );
// };

// export default App;

import axios from 'axios';
const App = () => {
  const getPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    return response.data;
  };


  const getPostById = async id => {
    const response = await axios.get(`http://localhost:4000/posts/${id}`);
    return response.data;
  };
}  
export default App;
