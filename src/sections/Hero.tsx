import { motion } from 'framer-motion'; import { site } from '../config/site'
const up=(d:number)=>({initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:d,ease:'easeOut' as const}})
export default function Hero(){
  return <section id="top" className="relative min-h-screen flex items-end md:items-center pt-24 pb-16 overflow-hidden">
    {site.heroImage?<img src={site.heroImage} alt="Вантажний автомобіль на міжнародній трасі" className="absolute inset-0 w-full h-full object-cover"/>
      :<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#2a1a12,#101113_65%)]"/>}
    <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20"/><div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg"/>
    <div className="wrap relative">
      <motion.div {...up(.1)} className="w-12 h-[3px] bg-accent mb-8"/>
      <motion.h1 {...up(.2)} className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[.95] uppercase">Логістика,<br/>якій <span className="text-accent">довіряють</span></motion.h1>
      <motion.p {...up(.4)} className="mt-8 max-w-xl text-lg text-muted">Міжнародні транспортні перевезення для бізнесу. Надійність, відповідальність та індивідуальний підхід до кожного вантажу.</motion.p>
      <motion.div {...up(.6)} className="mt-10 flex flex-col sm:flex-row gap-4">
        <a href="#calculate" className="btn btn-a">РОЗРАХУВАТИ ВАРТІСТЬ</a><a href="#about" className="btn btn-o">ДІЗНАТИСЯ ПРО НАС</a></motion.div>
    </div></section>
}
