import React from 'react'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-48 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          At <span className="font-semibold">F3 Zone Gym</span>, your privacy is important to us. 
          This policy explains how we collect and use the information you provide when inquiring about our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">Information We Collect</h2>
        <p className="mb-4 text-gray-700">
          When you fill out our inquiry form, we collect the following information:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Your full name</li>
          <li>Email address</li>
          <li>Contact number</li>
          <li>Selected plan or service you are interested in</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">How We Use Your Information</h2>
        <p className="mb-4 text-gray-700">
          The information you provide is used solely for the purpose of:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Understanding your needs and interests</li>
          <li>Contacting you regarding your inquiry</li>
          <li>Providing information about our gym plans and services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">Data Security</h2>
        <p className="mb-4 text-gray-700">
          We take reasonable measures to protect your personal information and ensure it is not shared with third parties without your consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">Your Consent</h2>
        <p className="mb-4 text-gray-700">
          By submitting your information through our inquiry form, you consent to the collection and use of your data as described in this Privacy Policy.
        </p>

        <p className="mt-6 text-gray-600 text-sm">
          Last updated: September 2025
        </p>
      </div>
    </div>
  );
  
}

export default Privacy