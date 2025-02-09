import React from 'react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">Last updated: March 14, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website and using our services, you agree to be bound by these Terms and Conditions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>You must provide accurate information when creating an account</li>
              <li>You are responsible for maintaining account security</li>
              <li>We reserve the right to terminate accounts that violate our terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Course Access</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Course access is limited to paid subscribers</li>
              <li>Course materials may not be shared or distributed</li>
              <li>We reserve the right to modify course content</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}