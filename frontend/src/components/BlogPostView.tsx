import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  BookOpen, 
  Compass, 
  ChevronRight,
  Info,
  Lightbulb,
  Target
} from 'lucide-react';
import { BLOG_ARTICLES, AUTHOR_INFO } from '../data/blogData';

export default function BlogPostView() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const currentIndex = BLOG_ARTICLES.findIndex((article) => article.slug === slug);
  const article = currentIndex !== -1 ? BLOG_ARTICLES[currentIndex] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-24">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center space-y-4">
          <BookOpen size={48} className="mx-auto text-purple-400" />
          <h2 className="text-2xl font-serif font-bold text-[#110A24]">Article Not Found</h2>
          <p className="text-sm text-gray-600">The article you are looking for does not exist or has been moved.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9e47ec] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:bg-[#8534cc] transition-all"
          >
            <ArrowLeft size={14} /> Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  const prevArticle = currentIndex > 0 ? BLOG_ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < BLOG_ARTICLES.length - 1 ? BLOG_ARTICLES[currentIndex + 1] : null;
  const relatedArticles = BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="bg-white min-h-screen font-sans antialiased text-[#110A24] pt-20">
      {/* 1. ARTICLE HEADER / HERO */}
      <header className="py-16 md:py-20 px-6 md:px-16 bg-gradient-to-br from-[#1d0b45] via-[#2a0e63] to-[#3b1580] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          {/* Breadcrumbs & Back link */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-purple-200 hover:text-white transition-colors font-semibold"
            >
              <ArrowLeft size={14} /> Back to All Articles
            </Link>

            <div className="flex items-center gap-2 text-purple-300 font-medium">
              <span className="px-3 py-1 bg-white/10 rounded-full border border-white/15">
                Article #{article.order} of {BLOG_ARTICLES.length}
              </span>
              <span className="px-3 py-1 bg-[#9e47ec] text-white rounded-full font-bold">
                {article.category}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight md:leading-tight">
            {article.title}
          </h1>

          <p className="text-lg md:text-xl text-purple-100/90 font-light leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author & Read Time Meta Bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={AUTHOR_INFO.avatar}
                alt={AUTHOR_INFO.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#9e47ec]"
              />
              <div>
                <p className="text-sm font-bold text-white">{AUTHOR_INFO.name}</p>
                <p className="text-xs text-purple-200/80">{AUTHOR_INFO.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-purple-200">
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {article.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {article.publishedDate}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer"
                title="Share article"
              >
                <Share2 size={13} /> Share
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. COVER IMAGE BANNER */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#1d0b45] to-[#2e1065] h-[440px] sm:h-[520px] md:h-[600px] flex items-center justify-center p-4">
          {/* Ambient backdrop */}
          <img
            src={article.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-110 pointer-events-none"
          />
          {/* Full uncropped photo */}
          <img
            src={article.image}
            alt={article.title}
            className="relative z-10 max-h-full max-w-full h-auto w-auto object-contain rounded-2xl drop-shadow-2xl"
          />
        </div>
      </div>

      {/* 3. ARTICLE CONTENT */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        {/* Intro */}
        <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed mb-12">
          {article.intro.map((p, idx) => (
            <p key={idx} className={idx === 0 ? 'text-lg md:text-xl font-medium text-[#110A24] leading-relaxed' : ''}>
              {p}
            </p>
          ))}
        </div>

        {/* Key Framework Highlight (if present) */}
        {article.keyFramework && (
          <div className="my-10 p-6 md:p-8 bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-3xl border-2 border-purple-200 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e47ec]">
              <Sparkles size={16} /> Key Framework
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#110A24]">
              {article.keyFramework.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              {article.keyFramework.description}
            </p>

            {article.keyFramework.stages && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {article.keyFramework.stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-purple-100 shadow-xs flex items-center gap-2 font-semibold text-xs text-[#110A24]"
                  >
                    <CheckCircle2 size={16} className="text-[#9e47ec] shrink-0" />
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
            )}

            {article.keyFramework.points && (
              <div className="space-y-3 pt-2">
                {article.keyFramework.points.map((pt, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-purple-100 shadow-xs space-y-1">
                    <h5 className="text-xs font-bold text-[#7e22ce] uppercase tracking-wider">{pt.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#110A24] tracking-tight pt-2 border-b border-purple-50 pb-2">
                {section.heading}
              </h2>

              {section.subheading && (
                <h4 className="text-sm font-bold text-[#7e22ce] uppercase tracking-wider">
                  {section.subheading}
                </h4>
              )}

              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="text-gray-700 text-base md:text-[17px] leading-relaxed">
                  {p}
                </p>
              ))}

              {/* List Items */}
              {section.listItems && section.listItems.length > 0 && (
                <ul className="space-y-3 my-4 pl-2">
                  {section.listItems.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-gray-800 text-sm md:text-base leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#9e47ec] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Pull Quote */}
              {section.quote && (
                <blockquote className="my-8 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-pink-50/30 rounded-2xl border-l-4 border-[#9e47ec] shadow-xs">
                  <p className="font-serif italic text-lg md:text-xl text-[#110A24] leading-relaxed">
                    “{section.quote}”
                  </p>
                  <footer className="mt-3 text-xs font-bold uppercase tracking-wider text-[#7e22ce]">
                    — Jinal Sanghavi
                  </footer>
                </blockquote>
              )}

              {/* Callout Box */}
              {section.callout && (
                <div className="my-6 p-5 rounded-2xl border border-purple-100 bg-slate-50 flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-xl text-[#7e22ce] shrink-0 mt-0.5">
                    {section.callout.type === 'action' ? (
                      <Target size={18} />
                    ) : section.callout.type === 'reflection' ? (
                      <Lightbulb size={18} />
                    ) : (
                      <Info size={18} />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#110A24]">
                      {section.callout.title}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Conclusion */}
        {article.conclusion && article.conclusion.length > 0 && (
          <div className="mt-12 p-6 md:p-8 bg-purple-50/50 rounded-2xl border border-purple-100 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#9e47ec] flex items-center gap-1.5">
              <Compass size={14} /> Closing Takeaway
            </h4>
            {article.conclusion.map((c, idx) => (
              <p key={idx} className="text-gray-700 text-base leading-relaxed font-medium">
                {c}
              </p>
            ))}

            {article.ctaLink && article.ctaText && (
              <div className="pt-3">
                <Link
                  to={article.ctaLink}
                  className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  {article.ctaText} &rarr;
                </Link>
              </div>
            )}
          </div>
        )}

        {/* 4. MANDATORY AUTHOR BOX FOR ALL ARTICLES (DIRECTLY INSTRUCTED IN DOCX) */}
        <section className="mt-16 bg-gradient-to-r from-purple-50 via-white to-pink-50/60 rounded-3xl p-8 md:p-10 border-2 border-purple-100 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#9e47ec] shadow-lg shrink-0">
              <img
                src={AUTHOR_INFO.avatar}
                alt={AUTHOR_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-3 text-center sm:text-left flex-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9e47ec] block mb-0.5">
                  About The Author
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#110A24]">
                  {AUTHOR_INFO.name}
                </h3>
              </div>

              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                {AUTHOR_INFO.bio}
              </p>

              {/* Required internal links: About Jinal | Manifestation Training | Relationship Counselling | Contact */}
              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                {AUTHOR_INFO.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-gray-800 text-[11px] font-bold rounded-lg border border-purple-200 hover:bg-[#9e47ec] hover:text-white hover:border-[#9e47ec] transition-all shadow-2xs"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. SEQUENTIAL PREVIOUS / NEXT ARTICLE NAVIGATION */}
        <nav className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              to={`/blog/${prevArticle.slug}`}
              className="p-5 rounded-2xl border border-gray-200/80 hover:border-purple-200 hover:bg-purple-50/40 transition-all text-left group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <ArrowLeft size={12} /> Previous Article
              </span>
              <h5 className="text-sm font-serif font-bold text-[#110A24] group-hover:text-[#9e47ec] transition-colors line-clamp-1 mt-1">
                {prevArticle.title}
              </h5>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextArticle ? (
            <Link
              to={`/blog/${nextArticle.slug}`}
              className="p-5 rounded-2xl border border-gray-200/80 hover:border-purple-200 hover:bg-purple-50/40 transition-all text-right group sm:col-start-2"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center justify-end gap-1">
                Next Article <ArrowRight size={12} />
              </span>
              <h5 className="text-sm font-serif font-bold text-[#110A24] group-hover:text-[#9e47ec] transition-colors line-clamp-1 mt-1">
                {nextArticle.title}
              </h5>
            </Link>
          ) : null}
        </nav>

        {/* 6. RELATED ARTICLES */}
        <section className="mt-16 pt-12 border-t border-gray-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-serif font-bold text-[#110A24]">
              More Foundational Articles
            </h3>
            <Link to="/blog" className="text-xs font-bold text-[#9e47ec] hover:underline">
              View All 5 &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="group bg-white rounded-2xl p-4 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1d0b45] to-[#2e1065] flex items-center justify-center p-2 mb-3">
                    <img
                      src={rel.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-lg opacity-30 scale-110 pointer-events-none"
                    />
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="relative z-10 max-h-full max-w-full h-auto w-auto object-contain rounded-lg drop-shadow group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-[#9e47ec] uppercase tracking-wider block">
                      Article #{rel.order} • {rel.category}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-[#110A24] group-hover:text-[#9e47ec] transition-colors leading-snug line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>{rel.readTime}</span>
                  <span className="text-[#9e47ec] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read <ChevronRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 7. DISCOVERY SESSION BOTTOM CTA */}
        <section className="mt-16 bg-gradient-to-br from-[#1d0b45] to-[#3b1580] text-white rounded-3xl p-8 md:p-10 text-center space-y-5 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-serif font-bold max-w-xl mx-auto">
            Ready to Translate Intention Into Real-World Results?
          </h3>
          <p className="text-xs md:text-sm text-purple-100/90 max-w-md mx-auto leading-relaxed">
            Begin your journey with personalized guidance on goal clarity, emotional resilience, and intentional action.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="/#book-session"
              className="px-6 py-3 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Book a Session
            </a>
            <Link
              to="/manifestation-training"
              className="px-6 py-3 bg-white text-[#110A24] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Explore Training
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

