// /* eslint-disable react/prop-types */
// import React from 'react'
// import { graphql } from 'gatsby';

// const ZohoPage = (props) => {
//   const users = props.data.allRandomUser.edges;

//   return (
//     <div>
//       {users.map((user, i) => {
//         const userData = user.node;
//         return (
//           <div key={i}>
//             <p>Name: {userData.name.first}</p>
//             <img src={userData.picture.medium} />
//           </div>
//         )
//       })}
//     </div>
//   );
// };

// export default ZohoPage

// export const query = graphql`
//   query RandomUserQuery {
//     allRandomUser {
//       edges {
//         node {
//           gender
//           name {
//             title
//             first
//             last
//           }
//           picture {
//             large
//             medium
//             thumbnail
//           }
//         }
//       }
//     }
//   }
// `;
