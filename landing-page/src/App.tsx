
import { motion } from 'framer-motion';
import { FadingVideo } from './components/FadingVideo';
import { BlurText } from './components/BlurText';
import { ArrowUpRight, Play, ClockIcon, GlobeIcon, ImageIcon, MovieIcon, LightbulbIcon } from './components/Icons';
import { ComputerModelsScene } from './components/ComputerModels';

const motionProps = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.8, ease: "easeOut" as any }
};

function App() {
  return (
    <div className="w-full bg-black text-white font-body">
      
      {/* Section 1: Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col">
        {/* Background Video */}
        <FadingVideo 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: '120%', height: '120%' }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col h-full w-full">
          
          {/* Navbar */}
          <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
            <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
              <span className="font-heading italic text-2xl">a</span>
            </div>
            
            <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
              <div className="flex px-3 gap-2">
                {["Work", "Studio", "Services", "Journal", "Contact"].map((item) => (
                  <a key={item} href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-gray-200 transition-colors">
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="h-12 w-12 hidden md:block"></div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
            
            <motion.div 
              {...motionProps} 
              transition={{ ...(motionProps.transition as any), delay: 0.4 }}
              className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-3 mb-6"
            >
              <span className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
              <span className="text-sm font-medium text-white/90">Booking Q3 2026 engagements -- limited capacity</span>
            </motion.div>

            <div className="max-w-3xl">
              <BlurText 
                text="Crafted Digital Experiences Built to Outlast Trends" 
                className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[min(-4px,-0.05em)]"
              />
            </div>

            <motion.p 
              {...motionProps} 
              transition={{ ...(motionProps.transition as any), delay: 0.8 }}
              className="mt-6 text-sm md:text-base text-white/90 max-w-2xl font-body font-light leading-tight"
            >
              We are a small studio of designers and engineers shaping brand-defining websites for ambitious companies. Precise typography, cinematic motion, and code you can be proud of.
            </motion.p>

            <motion.div 
              {...motionProps} 
              transition={{ ...(motionProps.transition as any), delay: 1.1 }}
              className="mt-8 flex items-center gap-6"
            >
              <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium hover:bg-white/10 transition-colors">
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Play className="w-3 h-3" />
                </div>
                Watch Showreel
              </button>
            </motion.div>

            <motion.div 
              {...motionProps} 
              transition={{ ...(motionProps.transition as any), delay: 1.3 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col">
                <ClockIcon className="w-5 h-5 mb-4 text-white/70" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-auto">6 Weeks</div>
                <div className="text-xs text-white/70 font-light mt-2 uppercase tracking-wide">Average End-to-End Launch Time</div>
              </div>
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col">
                <GlobeIcon className="w-5 h-5 mb-4 text-white/70" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-auto">140+</div>
                <div className="text-xs text-white/70 font-light mt-2 uppercase tracking-wide">Brands Shipped Across Four Continents</div>
              </div>
            </motion.div>
          </main>

          {/* Bottom Trust Bar */}
          <motion.div 
            {...motionProps} 
            transition={{ ...(motionProps.transition as any), delay: 1.4 }}
            className="pb-8 pt-4 flex flex-col items-center gap-6 mt-auto"
          >
            <div className="liquid-glass rounded-full px-5 py-2 text-xs font-medium text-white/70 uppercase tracking-widest">
              Trusted by founders, operators, and creative directors worldwide
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70 grayscale">
              {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((logo) => (
                <span key={logo} className="font-heading italic text-2xl md:text-3xl tracking-tight">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Section 2: Capabilities */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
        {/* Background Video */}
        <FadingVideo 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div {...motionProps} className="mb-auto mt-12 md:mt-0">
            <p className="text-sm font-body text-white/80 mb-6 tracking-wide uppercase">// Capabilities</p>
            <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] whitespace-pre-line">
              {"Studio craft,\nend to end"}
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Card 1: Design */}
            <motion.div {...motionProps} transition={{ ...(motionProps.transition as any), delay: 0.1 }} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end pl-4">
                  {["Brand Systems", "Art Direction", "Visual Identity", "Motion"].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1"></div>
              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-4">Design</h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  We shape identities and interfaces that feel unmistakably yours -- typographic systems, component libraries, and art-directed pages that scale without losing soul.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Engineering */}
            <motion.div {...motionProps} transition={{ ...(motionProps.transition as any), delay: 0.2 }} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0">
                  <MovieIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end pl-4">
                  {["React", "Next.js", "Headless CMS", "Edge-Ready"].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1"></div>
              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-4">Engineering</h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented -- with code your team will enjoy extending long after launch.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Growth */}
            <motion.div {...motionProps} transition={{ ...(motionProps.transition as any), delay: 0.3 }} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0">
                  <LightbulbIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end pl-4">
                  {["SEO", "Analytics", "A/B Testing", "Retention"].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1"></div>
              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-4">Growth</h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.
                </p>
              </div>
            </motion.div>

          </div>

          {/* 3D Models Placeholder Section */}
          <motion.div {...motionProps} transition={{ ...(motionProps.transition as any), delay: 0.4 }} className="mt-8 mb-20 w-full">
            <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-6">Interactive Setup</h3>
            <p className="text-sm text-white/70 font-body max-w-2xl">
              This is a placeholder for your 3D models. To replace these with actual models (laptop, desktop, monitor, keyboard, mouse), export them as .glb files, place them in the public directory, and use <code className="bg-white/10 px-1 py-0.5 rounded text-xs">useGLTF()</code> to load them.
            </p>
            <ComputerModelsScene />
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default App;
