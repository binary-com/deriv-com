import React from 'react';
import { verifyOrganization } from 'utils/organization';

const DerivIBProgramme: React.FC = () => {
  const isOrganizationVerified = verifyOrganization();

  return (
    <div>
      {isOrganizationVerified ? (
        <h1>Organization Verified</h1>
      ) : (
        <h1>Organization Not Verified</h1>
      )}
    </div>
  );
};

export default DerivIBProgramme;
