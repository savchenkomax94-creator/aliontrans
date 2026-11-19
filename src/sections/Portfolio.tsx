import { useEffect, useState } from 'react'; import { AnimatePresence, motion } from 'framer-motion'; import { X } from 'lucide-react'
import Reveal from '../components/Reveal'; import Img from '../components/Img'; import { portfolio } from '../data/content'
const spans=['md:col-span-2 md:row-span-2','','','md:col-span-2','']
export default function Portfolio(){
  const [sel,setSel]=useState<number|null>(null)
  useEffect(()=>{const k=(e:KeyboardEvent)=>e.key==='Escape'&&setSel(null);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[])
  const it=sel!==null?portfolio[sel]:null
  return <section id="portfolio" className="sec"><div className="wrap">
    <Reveal><h2 className="h2 max-w-3xl">Наші перевезення — наш досвід</h2></Reveal>
    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-3">{portfolio.map((p,i)=>
      <Reveal key={i} delay={i*.05} className={`${spans[i%spans.length]}`}>
        <button onClick={()=>setSel(i)} className="group relative w-full h-full overflow-hidden text-left" aria-label={`Збільшити: ${p.title}`}>
          <div className="w-full h-full transition duration-700 group-hover:scale-110"><Img src={p.img} alt={p.title}/></div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition"/>
          <span className="absolute bottom-3 left-3 right-3 text-sm font-display opacity-0 group-hover:opacity-100 transition">{p.title}</span></button></Reveal>)}</div></div>
    <AnimatePresence>{it&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="dialog" aria-modal="true" onClick={()=>setSel(null)} className="fixed inset-0 z-[60] bg-black/90 grid place-items-center p-5">
      <button className="absolute top-5 right-5 p-3" aria-label="Закрити"><X/></button>
      <div onClick={e=>e.stopPropagation()} className="max-w-4xl w-full"><div className="aspect-video"><Img src={it.img} alt={it.title}/></div>
        <h3 className="mt-4 text-xl font-bold">{it.title}</h3>{(it.cargo||it.route)&&<p className="text-muted text-sm mt-1">{[it.cargo,it.route].filter(Boolean).join(' · ')}</p>}</div></motion.div>}</AnimatePresence>
  </section>
}
