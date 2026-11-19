import Reveal from '../components/Reveal'; import Img from '../components/Img'; import { services } from '../data/content'
export default function Services(){
  return <section id="services" className="sec"><div className="wrap">
    <Reveal><h2 className="h2 max-w-3xl">Комплексні логістичні рішення</h2></Reveal>
    <div className="mt-14 grid md:grid-cols-2 gap-6">{services.map((s,i)=><Reveal key={s.title} delay={i*.08}>
      <article className="group relative h-72 overflow-hidden bg-card"><div className="absolute inset-0 transition duration-700 group-hover:scale-105"><Img src={s.img} alt={s.title}/></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent"/>
        <div className="absolute bottom-0 p-7"><span className="text-accent font-display text-sm">0{i+1}</span><h3 className="text-xl font-bold mt-1">{s.title}</h3><p className="text-sm text-muted mt-2 max-w-sm">{s.text}</p></div>
        <div className="absolute bottom-0 inset-x-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition duration-500"/></article></Reveal>)}</div>
  </div></section>
}
