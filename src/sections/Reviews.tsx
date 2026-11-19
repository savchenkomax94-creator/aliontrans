import { useState } from 'react'; import { AnimatePresence, motion } from 'framer-motion'; import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'; import { reviews } from '../data/content'
export default function Reviews(){
  const [i,setI]=useState(0); const n=reviews.length; const r=reviews[i]
  return <section id="reviews" className="sec"><div className="wrap"><Reveal><h2 className="h2 max-w-3xl">Відгуки наших партнерів</h2></Reveal>
    <div className="mt-12 bg-card p-8 md:p-14 min-h-[300px] relative"><span className="absolute top-4 left-8 text-8xl text-accent font-display leading-none">“</span>
      <AnimatePresence mode="wait"><motion.figure key={i} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} transition={{duration:.3}} className="pt-10">
        <blockquote className="text-xl md:text-3xl font-display leading-snug">{r.text}</blockquote>
        <figcaption className="mt-8 text-sm"><b>{r.name}</b><span className="text-muted"> · {r.role}, {r.company}</span></figcaption></motion.figure></AnimatePresence>
      <div className="mt-8 flex gap-3"><button aria-label="Попередній" onClick={()=>setI((i-1+n)%n)} className="w-12 h-12 border border-white/20 grid place-items-center hover:border-accent"><ChevronLeft/></button>
        <button aria-label="Наступний" onClick={()=>setI((i+1)%n)} className="w-12 h-12 border border-white/20 grid place-items-center hover:border-accent"><ChevronRight/></button></div></div></div></section>
}
