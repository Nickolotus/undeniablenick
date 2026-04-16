-- Undeniable Nick Email Subscriber System
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/tsglyyizwzapbyogdvhw/sql

-- Subscribers table
CREATE TABLE IF NOT EXISTS un_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'sardine-fast',
  tags TEXT[] DEFAULT '{}',
  drip_step INTEGER DEFAULT 0,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  last_emailed TIMESTAMPTZ,
  last_opened TIMESTAMPTZ,
  last_clicked TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Email events table (for open/click tracking)
CREATE TABLE IF NOT EXISTS un_email_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  event_type TEXT NOT NULL, -- 'open', 'click'
  campaign TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  user_agent TEXT
);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_un_subscribers_email ON un_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_un_subscribers_active_drip ON un_subscribers(is_active, drip_step);
CREATE INDEX IF NOT EXISTS idx_un_email_events_email ON un_email_events(email);

-- Enable RLS (Row Level Security)
ALTER TABLE un_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE un_email_events ENABLE ROW LEVEL SECURITY;

-- Allow the service role to do everything (Edge Functions use service role)
CREATE POLICY "Service role full access subscribers" ON un_subscribers FOR ALL USING (true);
CREATE POLICY "Service role full access events" ON un_email_events FOR ALL USING (true);
