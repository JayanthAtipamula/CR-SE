/*
  # Quiz System Tables and Policies

  1. Tables
    - quiz_attempts: Stores user quiz attempts
    - successful_payments: Records successful payment transactions
    - failed_payments: Records failed payment attempts
  
  2. Security
    - Enable RLS on all tables
    - Create policies for anonymous access to quiz attempts
    - Create policies for payment-related operations
*/

-- Create quiz_attempts table
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name text NOT NULL,
  user_email text NOT NULL,
  user_phone text NOT NULL,
  certificate_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create successful_payments table
CREATE TABLE IF NOT EXISTS successful_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_attempt_id uuid REFERENCES quiz_attempts(id),
  order_id text NOT NULL,
  amount numeric NOT NULL,
  payment_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create failed_payments table
CREATE TABLE IF NOT EXISTS failed_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_attempt_id uuid REFERENCES quiz_attempts(id),
  order_id text NOT NULL,
  amount numeric NOT NULL,
  error_message text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE successful_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE failed_payments ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Allow anonymous quiz attempts" ON quiz_attempts;
    DROP POLICY IF EXISTS "Allow reading any quiz attempt" ON quiz_attempts;
    DROP POLICY IF EXISTS "Allow insert successful payments" ON successful_payments;
    DROP POLICY IF EXISTS "Allow reading successful payments" ON successful_payments;
    DROP POLICY IF EXISTS "Allow insert failed payments" ON failed_payments;
    DROP POLICY IF EXISTS "Allow reading failed payments" ON failed_payments;
EXCEPTION
    WHEN undefined_object THEN
        NULL;
END $$;

-- Create new policies for quiz attempts
CREATE POLICY "Allow anonymous quiz attempts" ON quiz_attempts
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow reading any quiz attempt" ON quiz_attempts
  FOR SELECT
  USING (true);

-- Create new policies for successful payments
CREATE POLICY "Allow insert successful payments" ON successful_payments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow reading successful payments" ON successful_payments
  FOR SELECT
  USING (true);

-- Create new policies for failed payments
CREATE POLICY "Allow insert failed payments" ON failed_payments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow reading failed payments" ON failed_payments
  FOR SELECT
  USING (true);