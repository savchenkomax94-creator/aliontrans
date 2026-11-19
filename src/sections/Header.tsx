import { useState } from 'react'; import { Menu, X } from 'lucide-react'; import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../components/Logo'; import { nav } from '../config/site'
export default function Header(){
  const [o,setO]=useState(false)
  return <header className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur border-b border-white/10">
    <div className="wrap h-[72px] flex items-center justify-between">
      <a href="#top" aria-label="На головну"><Logo/></a>
      <nav aria-label="Головна навігація" className="hidden lg:flex gap-7 text-sm text-muted">
        {nav.map(([l,h])=><a key={h} href={h} className="hover:text-white transition">{l}</a>)}</nav>
      <a href="#contacts" className="btn btn-a hidden lg:inline-flex">Зв'язатися</a>
      <button className="lg:hidden p-3 -mr-3" aria-label={o?'Закрити меню':'Відкрити меню'} aria-expanded={o} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button>
    </div>
    <AnimatePresence>{o&&<motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="lg:hidden bg-bg2 overflow-hidden">
      <nav className="wrap py-4 flex flex-col">{nav.map(([l,h])=><a key={h} href={h} onClick={()=>setO(false)} className="py-4 border-b border-white/10 font-display text-lg">{l}</a>)}
      <a href="#contacts" onClick={()=>setO(false)} className="btn btn-a my-5">Зв'язатися</a></nav></motion.div>}</AnimatePresence>
  </header>
}
