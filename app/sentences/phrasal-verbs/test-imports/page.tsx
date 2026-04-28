'use client';

import { WORK_CAREER, PhrasalVerb } from '@/data/sentences/phrasal-verbs';

export default function TestImportsPage() {
  const testVerbs: PhrasalVerb[] = WORK_CAREER[0]?.verbs || [];
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Test Imports</h1>
      <p>Found {testVerbs.length} verbs in Getting Started</p>
      {testVerbs.slice(0, 3).map((verb, index) => (
        <div key={index} className="mb-4">
          <p><strong>{verb.basic}</strong> - {verb.advanced}</p>
        </div>
      ))}
    </div>
  );
}
