export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
   <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-28 px-6 text-center overflow-hidden">

  {/* Grid Background */}
  <div className="absolute inset-0 opacity-15">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* Soft Glow Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

  {/* Floating Nodes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-32 w-3 h-3 bg-white rounded-full animate-pulse opacity-40"></div>
    <div className="absolute bottom-32 right-40 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
    <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse opacity-20"></div>
  </div>

  {/* Hero Content */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Scalable Cloud & Enterprise Architecture Solutions
    </h1>

    <p className="text-lg max-w-3xl mx-auto mb-8">
      ALGI Nexa LLC provides IT consulting, cloud modernization,
      and enterprise-grade architecture solutions.
    </p>

    <a
      href="/contact"
      className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
    >
      Contact Us
    </a>
  </div>

</section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="shadow-lg p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Enterprise Architecture
            </h3>
            <p>
              System design, microservices architecture, API governance,
              and scalable distributed systems built for performance and resilience.
            </p>
          </div>

          <div className="shadow-lg p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Cloud & DevOps
            </h3>
            <p>
              AWS architecture, Kubernetes, Infrastructure as Code,
              CI/CD automation, and secure cloud-native deployments.
            </p>
          </div>

          <div className="shadow-lg p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Technology Strategy
            </h3>
            <p>
              Modernization roadmaps, performance optimization,
              architecture reviews, and strategic technical advisory.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          About ALGI Nexa LLC
        </h2>
        <p className="max-w-3xl mx-auto">
          Based in Texas, ALGI Nexa LLC partners with organizations to
          simplify complex systems, reduce technical debt, and implement
          scalable, secure technology platforms aligned with business goals.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} ALGI Nexa LLC. All rights reserved.</p>
      </footer>

    </main>
  );
}