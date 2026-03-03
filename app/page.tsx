export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-6">
          Empowering Businesses Through Scalable Cloud & Enterprise Architecture
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          ALGI Nexa LLC delivers strategic IT consulting, cloud modernization,
          and enterprise architecture solutions designed to help organizations
          scale, secure, and innovate.
        </p>
        <a
          href="mailto:info@alginexa.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Services</h2>
          <ul className="space-y-4 text-center">
            <li>Enterprise Architecture & System Design</li>
            <li>Cloud Migration & AWS Solutions</li>
            <li>Microservices & Event-Driven Systems</li>
            <li>DevOps & Infrastructure Automation</li>
            <li>Technology Strategy & Advisory</li>
          </ul>
        </div>
      </section>
    </main>
  );
}