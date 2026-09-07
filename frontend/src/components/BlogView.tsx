import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, ArrowRight, Clock, Calendar, CheckCircle2, HeartHandshake, Compass } from 'lucide-react';
import { BLOG_ARTICLES, AUTHOR_INFO } from '../data/blogData';
import heroImage from '../assets/Jinal Hero Banner Image 2.png';

export default function BlogView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'manifestation', label: 'Manifestation' },
    { id: 'goal-clarity', label: 'Goal Clarity' },
    { id: 'mindset', label: 'Mindset & Self-Inquiry' },
    { id: 'emotions', label: 'Emotions & Body' },
    { id: 'frameworks', label: 'Frameworks' }
  ];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.categorySlug === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = BLOG_ARTICLES[0];
  const remainingArticles = selectedCategory === 'all' && !searchQuery
    ? BLOG_ARTICLES.slice(1)
    : filteredArticles;

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#110A24] pt-20">
      {/* 1. HERO BANNER */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#1d0b45] via-[#280c5f] to-[#3b1580] text-white relative overflow-hidden">
        {/* Subtle Decorative Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/15 text-xs font-bold uppercase tracking-wider text-purple-200">
              <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
              Foundational Insights & Wisdom
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight max-w-3xl leading-tight">
              Manifestation & Human Potential <span className="text-purple-300 italic font-normal">Journal</span>
            </h1>

            <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl font-light leading-relaxed">
              Essential perspectives on goal clarity, emotional awareness, nervous system alignment, and intentional action by Jinal Sanghavi.
            </p>

            {/* Mobile Only: Photo placed right after description */}
            <div className="block lg:hidden w-72 h-72 sm:w-80 sm:h-80 mx-auto my-4 z-10">
              <img 
                src={heroImage} 
                alt="Jinal Sanghavi - Manifestation & Human Potential Expert" 
                className="w-full h-full object-contain object-center drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-3 text-xs text-purple-200/90 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Grounded, Evidence-Informed Guidance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Zero Empty Promises or Fluff</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Actionable Step-by-Step Frameworks</span>
              </div>
            </div>
          </div>

          {/* Right Portrait Column (Desktop Only) */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative">
            <div className="w-full h-[460px] flex items-center justify-center z-10">
              <img 
                src={heroImage} 
                alt="Jinal Sanghavi - Manifestation & Human Potential Expert" 
                className="max-h-full max-w-full w-auto h-auto object-contain object-center drop-shadow-2xl scale-110"
              />
            </div>
            {/* Author Badge placed underneath */}
            <div className="mt-6 inline-flex items-center gap-2 bg-purple-950/80 border border-purple-400/30 text-purple-200 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg z-10">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Jinal Sanghavi • Author & Expert
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & SEARCH BAR */}
      <section className="border-b border-gray-100 bg-slate-50/80 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#9e47ec] text-white shadow-md shadow-purple-600/20'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-700 border border-gray-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#9e47ec] focus:ring-2 focus:ring-purple-100 transition-all text-gray-800 placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 space-y-16">
        {/* FEATURED ARTICLE (Only visible when no specific filter/search or on 'all') */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="group relative bg-gradient-to-br from-[#faf5ff] to-white rounded-3xl p-6 md:p-10 border border-purple-100 shadow-xl shadow-purple-950/5 hover:border-purple-200 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image side */}
              <div className="lg:col-span-5 relative">
                <div className="h-96 md:h-[440px] w-full rounded-2xl overflow-hidden shadow-lg border border-purple-100/60 bg-gradient-to-br from-[#1d0b45] to-[#2e1065] relative flex items-center justify-center p-3">
                  {/* Ambient backdrop */}
                  <img
                    src={featuredArticle.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                  />
                  {/* Full uncropped photo */}
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="relative z-10 max-h-full max-w-full h-auto w-auto object-contain rounded-xl drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-3 left-3 z-20 bg-[#9e47ec] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Featured • Article #{featuredArticle.order}
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                  <span className="px-3 py-1 bg-purple-100/70 text-[#7e22ce] font-bold rounded-lg uppercase tracking-wider text-[10px]">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {featuredArticle.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {featuredArticle.publishedDate}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#110A24] group-hover:text-[#9e47ec] transition-colors leading-tight">
                  <Link to={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {featuredArticle.subtitle}
                </p>

                {/* Core Framework Teaser */}
                {featuredArticle.keyFramework && (
                  <div className="p-4 bg-white/80 rounded-2xl border border-purple-100/80 shadow-xs space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e47ec] block">
                      {featuredArticle.keyFramework.name}
                    </span>
                    <div className="flex flex-wrap gap-2 text-[11px] text-gray-700 font-medium">
                      {featuredArticle.keyFramework.stages?.map((stage, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-purple-50 rounded-md border border-purple-100/50">
                          {stage}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={AUTHOR_INFO.avatar}
                      alt={AUTHOR_INFO.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#9e47ec]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#110A24]">{AUTHOR_INFO.name}</p>
                      <p className="text-[11px] text-gray-500">Author & Manifestation Trainer</p>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md shadow-purple-600/20 transition-all hover:gap-3"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#110A24]">
                {selectedCategory === 'all' && !searchQuery
                  ? 'All Foundational Articles'
                  : `Articles (${filteredArticles.length})`}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Read in sequential order (1 to 5) for the complete transformational methodology.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#9e47ec] bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
              5 Articles Published
            </span>
          </div>

          {remainingArticles.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-gray-100">
              <BookOpen size={36} className="mx-auto text-gray-300 mb-3" />
              <p className="text-sm text-gray-500 font-medium">No articles match your search criteria.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#9e47ec] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-200/70 shadow-xs hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-br from-[#1d0b45] to-[#2e1065] flex items-center justify-center p-3">
                      {/* Ambient backdrop */}
                      <img
                        src={article.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                      />
                      {/* Full uncropped photo */}
                      <img
                        src={article.image}
                        alt={article.title}
                        className="relative z-10 max-h-full max-w-full h-auto w-auto object-contain rounded-xl drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-xs text-[#110A24] font-black text-xs px-3 py-1 rounded-full shadow-xs border border-purple-100">
                        #{article.order}
                      </div>
                      <div className="absolute bottom-3 left-3 z-20 bg-[#1d0b45]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                        {article.category}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {article.readTime}
                        </span>
                        <span>•</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      <h4 className="text-xl font-serif font-bold text-[#110A24] group-hover:text-[#9e47ec] transition-colors leading-snug line-clamp-2">
                        <Link to={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h4>

                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={AUTHOR_INFO.avatar}
                        alt={AUTHOR_INFO.name}
                        className="w-7 h-7 rounded-full object-cover border border-purple-200"
                      />
                      <span className="text-xs font-semibold text-gray-700">{AUTHOR_INFO.name}</span>
                    </div>

                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-xs font-bold text-[#9e47ec] group-hover:text-[#8534cc] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    >
                      Read <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* 4. AUTHOR SPOTLIGHT CARD (INSTRUCTED IN DOCX) */}
        <section className="bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-purple-900/10">
                  <img
                    src={AUTHOR_INFO.avatar}
                    alt={AUTHOR_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 right-4 bg-[#9e47ec] text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-lg">
                  17+ Years Experience
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e47ec] flex items-center gap-2">
                <Compass size={14} /> The Philosophy Behind The Articles
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#110A24]">
                Manifestation as an Intentional Process
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {AUTHOR_INFO.bio}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {AUTHOR_INFO.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-gray-800 text-xs font-bold rounded-xl border border-purple-200/80 hover:bg-[#9e47ec] hover:text-white hover:border-[#9e47ec] transition-all shadow-xs"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION BANNER */}
        <section className="bg-gradient-to-br from-[#1d0b45] to-[#3b1580] text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-purple-200">
            <HeartHandshake size={14} /> Ready to Put Clarity Into Practice?
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold max-w-2xl mx-auto leading-tight">
            Turn Intentions Into Measurable Personal Growth
          </h3>
          <p className="text-sm md:text-base text-purple-100/90 max-w-xl mx-auto font-light leading-relaxed">
            Experience structured 1-on-1 coaching or group manifestation training with Jinal Sanghavi in Surat or online worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="/#book-session"
              className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Book Discovery Session
            </a>
            <Link
              to="/manifestation-training"
              className="inline-flex items-center gap-2 bg-white text-[#110A24] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Learn About Training &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

