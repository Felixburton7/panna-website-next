-- Create the signups table for the Panna waitlist
-- Run this in your Supabase SQL Editor

-- Drop existing table and policies if they exist (to start fresh)
DROP POLICY IF EXISTS "Allow anonymous insert" ON signups;
DROP POLICY IF EXISTS "Allow authenticated select" ON signups;
DROP TABLE IF EXISTS signups;

-- Create the signups table
CREATE TABLE signups (
  id SERIAL PRIMARY KEY,
  email_address TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add a comment to the table
COMMENT ON TABLE signups IS 'Email addresses collected from the Panna waitlist landing page';

-- Create an index on email_address for faster lookups
CREATE INDEX idx_signups_email ON signups(email_address);

-- Enable Row Level Security (RLS)
ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows ANYONE to insert new signups (for the waitlist)
CREATE POLICY "Enable insert for all users" ON signups
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows authenticated users to view all signups
CREATE POLICY "Enable select for authenticated users only" ON signups
  FOR SELECT USING (auth.role() = 'authenticated');

-- Grant necessary permissions to anonymous users
GRANT USAGE ON SEQUENCE signups_id_seq TO anon;
GRANT INSERT ON signups TO anon;
GRANT SELECT ON signups TO anon;

-- Grant permissions to authenticated users
GRANT SELECT ON signups TO authenticated; 