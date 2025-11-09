import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Simple pricing</h2>
              <p className="mt-2 text-gray-600">Get started free. Upgrade when you grow.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[['Starter','Free','Everything to explore'],['Pro','$12/mo','For active builders'],['Team','$29/mo','Collaborate at scale']].map(([name, price, tagline]) => (
                <div key={name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="mt-1 text-3xl font-bold">{price}</p>
                  <p className="mt-2 text-sm text-gray-600">{tagline}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>• Beautiful components</li>
                    <li>• Live backend</li>
                    <li>• One-click preview</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-800">Choose {name}</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
