import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import confetti from 'canvas-confetti';
import { FaHeart, FaRocket, FaStar, FaMapMarkedAlt, FaBasketballBall, FaUtensils } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

import { useReveal } from './animations/useReveal';
import { SectionHeading } from './components/SectionHeading';
import memory1 from './assets/memory-1.svg';
import memory2 from './assets/memory-2.svg';
import memory3 from './assets/memory-3.svg';

import './styles/app.css';

const memories = [
  { title: 'Volleyball Nights', text: 'The energy, the laughter, the impossible saves.' },
  { title: 'Ganthiya Sessions', text: 'Tea in hand and stories that never ended.' },
  { title: 'Travel Chapters', text: 'From Pavagadh to Dakor to Vadtal, every road felt cinematic.' },
  { title: 'Sensation Era', text: 'The days we made joy feel larger than life.' },
];

const timeline = [
  { year: '2018', title: 'The first adventure', detail: 'The beginning of a friendship that kept growing.' },
  { year: '2020', title: 'Volleyball & chaos', detail: 'Every match turned into a story and every story into a memory.' },
  { year: '2023', title: 'Food & gossip', detail: 'Snacks, tea, laughter, and endless conversations.' },
  { year: '2026', title: 'Still our favorite human', detail: 'More love, more memories, more reasons to celebrate.' },
];

const galleryImages = [
  { src: memory1, title: 'Golden Light' },
  { src: memory2, title: 'Night Glow' },
  { src: memory3, title: 'Celebration' },
  { src: memory1, title: 'Forever Yours' },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useReveal();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.35, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 700);
          return 100;
        }
        return value + 4;
      });
    }, 80);

    return () => {
      clearInterval(timer);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      confetti({ particleCount: 130, spread: 120, origin: { y: 0.1 } });
    }
  }, [loading]);

  const triggerConfetti = () => {
    confetti({ particleCount: 200, spread: 140, origin: { y: 0.2 } });
  };

  return (
    <div className="min-h-screen bg-ink text-cream selection:bg-gold/40">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03, filter: 'blur(16px)' }}
            transition={{ duration: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(212,168,77,0.22),_transparent_45%),#050505]"
          >
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(34)].map((_, i) => (
                <motion.span
                  key={i}
                  className="particle"
                  initial={{ opacity: 0, y: 100, x: Math.random() * 100 + '%' }}
                  animate={{ opacity: [0, 1, 0], y: -120, x: [null, `${Math.random() * 30 - 15}px`], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 5 + i * 0.15, repeat: Infinity, delay: i * 0.12 }}
                />
              ))}
            </div>
            <div className="relative z-10 text-center px-6">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 bg-white/10 text-gold shadow-gold backdrop-blur-2xl">
                <FaHeart className="text-4xl" />
              </motion.div>
              <motion.h1 initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="font-signature text-5xl sm:text-7xl text-gold">Loading Memories...</motion.h1>
              <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: '100%', opacity: 1 }} transition={{ duration: 0.9 }} className="mx-auto mt-8 h-2 max-w-xs overflow-hidden rounded-full border border-gold/30 bg-white/10">
                <motion.div animate={{ width: `${progress}%` }} transition={{ ease: 'easeOut' }} className="h-full rounded-full bg-gradient-to-r from-gold via-amber-200 to-amber-400" />
              </motion.div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 text-sm uppercase tracking-[0.5em] text-white/70">Heartbeat · Glowing · Memories</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative overflow-hidden">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,168,77,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.03),_transparent_55%)]" />
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(18)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-2 w-2 rounded-full bg-gold/70 blur-[1px]"
                initial={{ opacity: 0, x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
                animate={{ opacity: [0, 0.8, 0], y: [null, '-100vh'], x: [null, `${Math.random() * 40 - 20}px`] }}
                transition={{ duration: 8 + i * 0.2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
          <div className="absolute right-10 top-10 hidden h-48 w-48 rounded-full bg-gold/20 blur-[120px] sm:block" />
          <div className="relative z-10 max-w-6xl text-center">
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="mb-8 flex justify-center gap-4 text-gold">
              <FaHeart className="text-2xl" />
              <HiSparkles className="text-2xl" />
              <FaStar className="text-2xl" />
            </motion.div>
            <motion.h1 initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }} animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.9 }} className="font-display text-5xl font-semibold uppercase tracking-[0.35em] sm:text-7xl lg:text-9xl">
              Happy Birthday
            </motion.h1>
            <motion.h2 initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }} animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} transition={{ delay: 0.2, duration: 0.95 }} className="mt-4 font-display text-5xl font-bold text-gold sm:text-7xl lg:text-8xl">
              KAUSHIKBHAI
            </motion.h2>
            <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35, duration: 0.8 }} className="mx-auto mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">
              Our Brother. Our Friend. Our Favorite Human.
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10 flex flex-wrap justify-center gap-4 text-sm uppercase tracking-[0.3em] text-white/70">
              <span>From</span>
              <span className="text-gold">Vani ❤️</span>
              <span>&</span>
              <span className="text-gold">Alpa ❤️</span>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-12 flex justify-center">
              <button className="rounded-full border border-gold/40 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-gold backdrop-blur-xl transition hover:scale-105 hover:bg-white/20">
                Scroll for the story
              </button>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Emotional Letter</p>
              <h3 className="font-signature text-4xl text-gold sm:text-5xl">A little note from us</h3>
              <p className="mt-6 text-lg leading-8 text-white/80">
                Kaushikbhai, you are the kind of person who turns ordinary days into cherished stories. You bring laughter, comfort, boldness, and heart into every room. We are so lucky to have you as our brother, our friend, and our favorite human.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/15 to-transparent p-8 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-ink/70 p-6">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/70">
                  <span>Dear Kaushikbhai</span>
                  <span className="text-gold">✦</span>
                </div>
                <div className="mt-6 space-y-3 text-base leading-8 text-white/80">
                  <p>Thank you for being our safe place.</p>
                  <p>Thank you for all the trips, the volleyball madness, the snacks, and the gossip.</p>
                  <p>Thank you for being the kind of soul that makes life glow.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Memory Timeline" title="Moments that shaped us" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {timeline.map((item, idx) => (
                <motion.article key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <div className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">{item.year}</div>
                  <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-4 text-white/70">{item.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/15 to-transparent p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-gold">
                <FaBasketballBall className="text-3xl" />
                <h3 className="font-display text-3xl">Volleyball Era</h3>
              </div>
              <p className="mt-6 text-white/75">The rallies, the boldness, the funny moments, and the scoreboard of our favorite memories.</p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-ink/70 p-6">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/60">
                  <span>Score</span>
                  <span className="text-gold">2 - 1</span>
                </div>
                <div className="mt-5 h-3 rounded-full bg-white/10">
                  <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-gold to-amber-300" />
                </div>
                <p className="mt-5 text-white/70">Every match felt like a movie scene with a ridiculous ending and a beautiful memory.</p>
              </div>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {memories.map((item, idx) => (
                <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <div className="mb-4 text-gold"><FaRocket /></div>
                  <h4 className="text-xl text-white">{item.title}</h4>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Food Memories</p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl">Ganthiya, tea, snacks, and all the stories</h3>
            </motion.div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {['Ganthiya', 'Tea', 'Cold Drinks'].map((item, idx) => (
                <motion.div key={item} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }} className="rounded-[1.5rem] border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-6 text-center backdrop-blur-xl">
                  <div className="mb-4 flex justify-center text-gold"><FaUtensils className="text-3xl" /></div>
                  <h4 className="text-2xl text-white">{item}</h4>
                  <p className="mt-3 text-white/70">Each bite was a little celebration with a story attached.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Travel Journey</p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl">Pavagadh • Dakor • Vadtal</h3>
            </motion.div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {['Pavagadh', 'Dakor', 'Vadtal'].map((place, idx) => (
                <motion.div key={place} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <div className="mb-4 text-gold"><FaMapMarkedAlt className="text-2xl" /></div>
                  <h4 className="text-2xl text-white">{place}</h4>
                  <p className="mt-3 text-white/70">Every destination felt brighter because you were there.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-black/60 p-8 backdrop-blur-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Gossip Section</p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl">The funniest chats in the universe</h3>
            </motion.div>
            <div className="mt-12 space-y-4 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              {[
                { from: 'You', text: 'Kaushikbhai, you are impossible.' },
                { from: 'Kaushikbhai', text: 'And you love it 😎' },
                { from: 'You', text: 'The snacks were better because you were there.' },
                { from: 'Kaushikbhai', text: 'Always the main character of the story.' },
              ].map((chat, idx) => (
                <motion.div key={chat.text} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs rounded-2xl border px-4 py-3 ${idx % 2 === 0 ? 'border-gold/20 bg-gold/10' : 'border-white/10 bg-white/10'}`}>
                    <div className="mb-1 text-xs uppercase tracking-[0.3em] text-gold">{chat.from}</div>
                    <p className="text-sm text-white/80">{chat.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-gold/20 bg-[radial-gradient(circle_at_top,_rgba(212,168,77,0.16),_transparent_50%)] p-8 backdrop-blur-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Sensation Era</p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl">We were the sensation</h3>
            </motion.div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-ink/70 p-8">
                <h4 className="font-display text-5xl text-gold">We were</h4>
                <p className="mt-4 text-3xl uppercase tracking-[0.3em] text-white/80">The sensation</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8">
                <p className="text-lg leading-8 text-white/80">The glow, the energy, the charm — every moment felt bigger because your presence made everything unforgettable.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Gallery" title="Moments frozen in time" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((image, idx) => (
                <motion.figure key={image.title} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -8, rotate: -2, scale: 1.02 }} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
                  <img src={image.src} alt={image.title} className="h-60 w-full rounded-[1rem] object-cover" />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">
            <SectionHeading eyebrow="Why You're Special" title="The reasons we adore you" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {['Big Brother', 'Travel Partner', 'Food Buddy', 'Guide', 'Support System', 'Crazy Friend'].map((reason, idx) => (
                <motion.div key={reason} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.06 }} className="rounded-[1.5rem] border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-6 text-center backdrop-blur-xl">
                  <div className="mb-4 flex justify-center text-gold"><HiSparkles className="text-2xl" /></div>
                  <h4 className="text-xl text-white">{reason}</h4>
                  <p className="mt-3 text-white/70">A small but shining reason why you mean the world to us.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-gold/20 bg-[radial-gradient(circle_at_top,_rgba(212,168,77,0.18),_transparent_50%)] p-8 backdrop-blur-2xl">
            <SectionHeading eyebrow="Birthday Wishes" title="May this year shine brighter" />
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} className="mt-10 rounded-[2rem] border border-white/10 bg-black/50 p-8 text-center">
              <p className="font-signature text-4xl text-gold sm:text-6xl">Happy Birthday Kaushikbhai</p>
              <p className="mt-6 text-lg leading-8 text-white/75">Some people become friends. Some become family. Thank you for becoming ours.</p>
            </motion.div>
          </div>
        </section>

        <section className="relative px-6 py-24 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-black to-[#111] p-8 text-center backdrop-blur-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Final Scene</p>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl">Thank you for becoming ours</h3>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">You make ordinary moments feel bright, tender, and full of wonder. We love you deeply and celebrate you with all our heart.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} className="mt-10 flex flex-wrap justify-center gap-4">
              <button onClick={triggerConfetti} className="rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-gold backdrop-blur-xl transition hover:scale-105">
                Replay Journey
              </button>
              <button className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl transition hover:scale-105">
                Love • Vani • Alpa
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
