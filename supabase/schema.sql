-- Carpilot V1 Waitlist Supabase Table Schema
-- Run this in your Supabase SQL Editor

-- 1. Create enum for user role
CREATE TYPE user_role AS ENUM ('customer', 'driver', 'corporate');

-- 2. Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'customer',
    referral_code TEXT UNIQUE NOT NULL,
    referred_by TEXT REFERENCES public.waitlist(referral_code) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Create index for fast referral lookups and email queries
CREATE INDEX IF NOT EXISTS idx_waitlist_referral_code ON public.waitlist(referral_code);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- 5. Strict RLS policy: No public client-side inserts/reads/updates/deletes.
-- Only the server-side Service Role Key (used in /api/waitlist) can manage this table.
CREATE POLICY "Deny all public client access" 
ON public.waitlist 
FOR ALL 
TO anon, authenticated 
USING (false);
