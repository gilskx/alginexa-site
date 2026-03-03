import Hero from "./components/Hero";
export const metadata = {
  title: "Cloud & Enterprise Architecture | ALGI Nexa LLC",
};
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
	{/* Hero Section */}
      <Hero />
{/* Value Proposition Strip */}
<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

    <div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        Cloud Architecture
      </h3>
      <p className="text-gray-600">
        Designing scalable, resilient, and secure cloud-native systems.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        Enterprise Modernization
      </h3>
      <p className="text-gray-600">
        Transforming legacy systems into high-performance platforms.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        Performance & Resilience
      </h3>
      <p className="text-gray-600">
        Optimizing distributed systems for reliability and scale.
      </p>
    </div>

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