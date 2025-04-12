import * as React from 'react';
// import styles from './style.module.scss';

import { createServiceRoleClient, HostType } from '../../../../db/src/supabase/clients';

async function getCandidates(){
  const client = createServiceRoleClient(HostType.local)

  const { data, error } = await client.from('candidates').select("*").limit(100);

  return data || [];
}

function Candidate() {

}

export default async function Candidates() {
  const candidates = await getCandidates() || [];

  console.log({candidates});

  if(candidates.length === 0){ return <></> }

  return (
    <div>
      <h1>Candidates</h1>
      <div>
        {candidates.map((candidate) => (<React.Fragment key={candidate.id}>{candidate.id}</React.Fragment>))}
      </div>
    </div>
  );
}
