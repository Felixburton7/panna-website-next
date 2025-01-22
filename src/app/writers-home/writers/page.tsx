// src/app/writers-home/writers/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Profile {
  id: string;
  full_name: string;
  role: string;
}

export default function WritersPage() {
  const [writers, setWriters] = useState<Profile[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        // Ensure your 'profiles' table exists and contains the necessary data
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('role', 'writer');

        if (error) {
          console.error('Error fetching writers:', error);
          setErrorMsg(error.message);
        } else if (data) {
          setWriters(data);
        }
      } catch (err: any) {
        console.error('Unexpected error:', err);
        setErrorMsg('Failed to fetch writers');
      }
    };

    fetchWriters();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Other Writers</h1>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      
      <ul>
        {writers.map((writer) => (
          <li key={writer.id}>
            <strong>Name:</strong> {writer.full_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
