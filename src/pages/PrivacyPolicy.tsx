const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-8 lg:px-16 max-w-4xl">
        <h1 className="text-5xl font-light text-dark-gray mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-dark-gray space-y-8">
          <p className="text-lg leading-relaxed">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-ZA')}
          </p>

          <section>
            <h2 className="text-3xl font-light text-dark-gray mb-4">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us, such as when you fill out our service request form, 
              contact us by phone or email, or communicate with us through our website.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Name and contact information (phone number, email address)</li>
              <li>Service preferences and requirements</li>
              <li>Property address and service location details</li>
              <li>Any additional information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-dark-gray mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide, maintain, and improve our cleaning and maintenance services</li>
              <li>Process service requests and communicate with you about your bookings</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-dark-gray mb-4">Cookies and Tracking</h2>
            <p className="leading-relaxed">
              Our website uses cookies to enhance your browsing experience and analyze site usage:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Necessary cookies:</strong> Essential for website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing cookies:</strong> Used to show relevant advertisements</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You can control cookie preferences through our cookie consent banner.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-dark-gray mb-4">Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties, 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist in our operations (under strict confidentiality)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-dark-gray mb-4">Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-dark-gray mb-4">Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>File a complaint with relevant authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-dark-gray mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-none">
              <p><strong>EVCO</strong></p>
              <p>125 Jorissen St., Braamfontein</p>
              <p>Johannesburg, South Africa</p>
              <p>Phone: <a href="tel:+27687851530" className="text-sage hover:underline">(068) 785 1530</a></p>
              <p>Email: <a href="mailto:melusimanana62@gmail.com" className="text-sage hover:underline">melusimanana62@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
