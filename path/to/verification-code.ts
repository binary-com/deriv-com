// verification-code.ts

import axios from 'axios';

function verifyOrganization(user) {
  const organizationAPI = 'https://api.example.com/verify-organization';

  // Make a request to the organization API to verify the user's organization
  return axios.post(organizationAPI, { user })
    .then((response) => {
      // Process the response and return the verification result
      return response.data.isVerified;
    })
    .catch((error) => {
      // Handle any errors that occur during the verification process
      console.error('Error verifying organization:', error);
      throw new Error('Failed to verify organization');
    });
}

export { verifyOrganization };
