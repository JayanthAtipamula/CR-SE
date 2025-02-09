import React from 'react';

export default function CancellationRefund() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Cancellation and Refund Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">Last updated: March 14, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Cancellation Policy</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>You can cancel your subscription at any time</li>
              <li>Access continues until the end of the billing period</li>
              <li>No automatic renewal after cancellation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Refund Policy</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>7-day money-back guarantee for all courses</li>
              <li>Refund must be requested within 7 days of purchase</li>
              <li>Refunds are processed within 5-7 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact our support team</li>
              <li>Provide your order number</li>
              <li>State your reason for the refund</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}