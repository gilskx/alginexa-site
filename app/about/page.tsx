export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">
          About ALGI Nexa LLC
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Delivering scalable, secure, and future-ready technology solutions
          for modern enterprises.
        </p>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Who We Are
        </h2>
        <p className="mb-6">
          ALGI Nexa LLC is a Texas-based IT consulting firm specializing
          in enterprise architecture, cloud-native solutions, and distributed
          systems design. We partner with organizations to modernize legacy
          systems, optimize performance, and implement scalable infrastructure.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Our Mission
        </h2>
        <p className="mb-6">
          Our mission is to simplify complex systems, reduce technical debt,
          and deliver secure, high-performance platforms that align technology
          with business objectives.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Our Approach
        </h2>
        <p>
          We combine strong engineering discipline with practical business
          understanding. Our solutions are built with scalability, security,
          and long-term sustainability in mind.
        </p>
      </section>

      <footer className="bg-blue-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} ALGI Nexa LLC. All rights reserved.</p>
      </footer>

    </main>
  );
}