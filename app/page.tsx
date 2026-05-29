export default function InnoRailProWebsite() {
  const industries = [
    'Freight Railroads',
    'Short Line Railroads',
    'Locomotive Suppliers',
    'Rail Technology Companies',
    'Component Manufacturers',
    'Mining & Aggregate Operations',
    'Marine & Power Generation Markets',
  ];

  const services = [
    {
      title: 'Strategic Advisory',
      text: 'Growth strategy, market positioning, technology commercialization, and executive advisory.',
    },
    {
      title: 'Locomotive & Mechanical Solutions',
      text: 'Component programs, reliability improvement, fleet modernization, and maintenance strategy.',
    },
    {
      title: 'Operational Improvement',
      text: 'Process improvement, sourcing optimization, supply chain strategy, and operational efficiency.',
    },
    {
      title: 'Regulatory & Compliance Advisory',
      text: 'EPA compliance guidance, aftermarket support strategy, and regulatory navigation.',
    },
    {
      title: 'Business Development & Market Expansion',
      text: 'OEM and railroad relationships, commercial growth planning, and partnership development.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div>
              <h1 className="text-3xl font-black tracking-tight">
                <span className="text-slate-900">INNO</span>
                <span className="text-orange-500">RAIL</span>
                <span className="text-slate-900">PRO</span>
              </h1>
              <p className="text-xs tracking-[0.35em] text-slate-500 uppercase">
                Advisory
              </p>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <a href="#about" className="hover:text-orange-500 transition">About</a>
              <a href="#services" className="hover:text-orange-500 transition">Services</a>
              <a href="#industries" className="hover:text-orange-500 transition">Industries</a>
              <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
            </nav>

            <button className="bg-slate-900 hover:bg-orange-500 transition text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-orange-300 text-sm font-medium">
                Rail Industry Advisory & Operational Excellence
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl leading-tight font-black text-white tracking-tight">
              Driving Innovation Across the Rail Industry
            </h2>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Strategic advisory, locomotive expertise, and operational solutions that power performance and long-term growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition">
                Schedule a Consultation
              </button>

              <button className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 text-white px-8 py-4 rounded-2xl font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About + Industries */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              About InnoRailPro
            </p>

            <h3 className="text-4xl font-black text-slate-900 leading-tight mb-8">
              Experience. Innovation. Results.
            </h3>

            <div className="space-y-6 text-slate-600 leading-8 text-lg">
              <p>
                InnoRailPro Advisory helps rail and industrial organizations solve complex challenges, improve performance, and create long-term value.
              </p>

              <p>
                Led by rail and industrial executives, we bring over decades of hands-on experience in locomotive systems, operational improvement, business development, and rail technology commercialization.
              </p>

              <p>
                Our trusted relationships with leading OEMs, suppliers, and Class I railroads enable us to deliver practical solutions that drive measurable results.
              </p>
            </div>
          </div>

          <div id="industries" className="bg-slate-950 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-3xl font-black text-white">
                Industries We Serve
              </h4>
              <div className="w-16 h-1 bg-orange-500 rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="bg-white/5 border border-white/10 hover:border-orange-500/40 transition rounded-2xl p-5 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-orange-500" />
                  </div>
                  <p className="text-white text-sm font-medium leading-6">
                    {industry}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              Our Services
            </p>

            <h3 className="text-5xl font-black text-slate-900 mb-6">
              Practical Solutions for Complex Rail Operations
            </h3>

            <p className="text-lg text-slate-600 leading-8">
              Delivering strategic, operational, and technical expertise to rail and industrial organizations across North America.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition">
                  <div className="w-6 h-6 rounded-full bg-orange-500 group-hover:bg-white transition" />
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {service.title}
                </h4>

                <p className="text-slate-600 leading-8 text-base">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-5xl font-black text-white leading-tight">
            Ready to Modernize Your Rail Operations?
          </h3>

          <p className="mt-8 text-xl text-slate-300 leading-8">
            Partner with InnoRailPro Advisory to improve operational performance, strengthen strategic growth, and navigate complex industry challenges.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-2xl">
              Schedule a Consultation
            </button>

            <button className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-black mb-4">
              <span className="text-slate-900">INNO</span>
              <span className="text-orange-500">RAIL</span>
              <span className="text-slate-900">PRO</span>
            </h4>
            <p className="text-slate-600 leading-7">
              Strategic advisory and operational excellence for the modern rail industry.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-4">Services</h5>
            <ul className="space-y-3 text-slate-600">
              <li>Strategic Advisory</li>
              <li>Locomotive Solutions</li>
              <li>Operational Improvement</li>
              <li>Regulatory Advisory</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-4">Contact</h5>
            <ul className="space-y-3 text-slate-600">
              <li>info@innorailpro.com</li>
              <li>+1 (972) 850-6568</li>
              <li>Richardson, Texas</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-4">Connect</h5>
            <p className="text-slate-600 leading-7 mb-4">
              Follow InnoRailPro Advisory on LinkedIn for rail industry insights and updates.
            </p>

            <button className="bg-slate-900 hover:bg-orange-500 text-white px-5 py-3 rounded-xl font-semibold transition">
              LinkedIn
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 InnoRailPro Advisory. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Practical Solutions. Strong Relationships. Measurable Results.
          </p>
        </div>
      </footer>
    </div>
  );
}



