/*
  # Certificate and Payment Tables

  1. New Tables
    - `quiz_attempts`
      - `id` (uuid, primary key)
      - `user_name` (text)
      - `user_email` (text)
      - `user_phone` (text)
      - `certificate_name` (text)
      - `created_at` (timestamptz)
      
    - `successful_payments`
      - `id` (uuid, primary key)
      - `quiz_attempt_id` (uuid, references quiz_attempts)
      - `order_id` (text)
      - `amount` (numeric)
      - `payment_id` (text)
      - `created_at` (timestamptz)
      
    - `failed_payments`
      - `id` (uuid, primary key)
      - `quiz_attempt_id` (uuid, references quiz_attempts)
      - `order_id` (text)
      - `amount` (numeric)
      - `error_message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
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

-- Create policies
CREATE POLICY "Allow insert for all users" ON quiz_attempts
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow read own quiz attempts" ON quiz_attempts
  FOR SELECT TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid() FROM auth.users WHERE email = quiz_attempts.user_email
  ));

CREATE POLICY "Allow insert successful payments" ON successful_payments
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow read own successful payments" ON successful_payments
  FOR SELECT TO authenticated
  USING (quiz_attempt_id IN (
    SELECT id FROM quiz_attempts 
    WHERE auth.uid() IN (
      SELECT auth.uid() FROM auth.users WHERE email = quiz_attempts.user_email
    )
  ));

CREATE POLICY "Allow insert failed payments" ON failed_payments
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow read own failed payments" ON failed_payments
  FOR SELECT TO authenticated
  USING (quiz_attempt_id IN (
    SELECT id FROM quiz_attempts 
    WHERE auth.uid() IN (
      SELECT auth.uid() FROM auth.users WHERE email = quiz_attempts.user_email
    )
  ));