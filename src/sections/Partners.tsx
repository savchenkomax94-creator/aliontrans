import Reveal from '../components/Reveal'; import { partners } from '../data/content'
export default function Partners(){
  return <section id="partners" className="sec bg-bg2"><div className="wrap"><Reveal><h2 className="h2">Нам довіряють</h2></Reveal>
    <Reveal delay={.1}><div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
      {partners.length?partners.map(p=><div key={p.name} className="bg-bg2 h-28 grid place-items-center p-6"><img src={p.logo} alt={p.name} loading="lazy" className="max-h-12 opacity-70 hover:opacity-100 transition"/></div>)
        :Array.from({length:4}).map((_,i)=><div key={i} className="bg-bg2 h-28 grid place-items-center text-muted text-xs">логотип партнера</div>)}</div></Reveal></div></section>
}
