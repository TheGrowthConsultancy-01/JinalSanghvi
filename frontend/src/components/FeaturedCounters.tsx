

export default function FeaturedCounters() {
  const stats = [
    { value: '40,000+', label: 'Sessions Completed' },
  
    { value: '300+', label: 'Workshops Conducted' },
    { value: '60+', label: 'Awards Achieved' }
  ];

  return (
    <section className="bg-slate-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-purple-100/60 border border-purple-200/40 p-6 rounded-2xl text-center transition-transform duration-200 hover:-translate-y-1">
            <h3 className="text-3xl font-black text-purple-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-purple-700/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}