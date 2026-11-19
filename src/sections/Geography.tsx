import Reveal from '../components/Reveal'; import { countries, routes } from '../data/content'
// Проекція в рамці Європи: lon -12..45, lat 34..72
const P=(lon:number,lat:number)=>({x:((lon+12)/57)*800,y:((72-lat)/38)*500})
export default function Geography(){
  const by=Object.fromEntries(countries.map(c=>[c.name,c]))
  return <section id="geography" className="sec bg-bg2"><div className="wrap">
    <Reveal><h2 className="h2 max-w-3xl">Географія міжнародних перевезень</h2></Reveal>
    <Reveal delay={.1}><div className="mt-12 border border-white/10 bg-bg p-4"><svg viewBox="0 0 800 500" className="w-full h-auto" role="img" aria-label="Карта маршрутів">
      {Array.from({length:21*13}).map((_,i)=><circle key={i} cx={(i%21)*40+10} cy={Math.floor(i/21)*40+10} r="1.6" fill="#33363c"/>)}
      {routes.map((r,i)=>{const a=by[r.from],b=by[r.to];if(!a||!b)return null;const p=P(a.lon,a.lat),q=P(b.lon,b.lat)
        return <path key={i} d={`M${p.x} ${p.y} Q${(p.x+q.x)/2} ${Math.min(p.y,q.y)-60} ${q.x} ${q.y}`} stroke="#FF6B24" strokeWidth="1.5" fill="none" strokeDasharray="5 5"/>})}
      {countries.map(c=>{const p=P(c.lon,c.lat);return <g key={c.name}><circle cx={p.x} cy={p.y} r="6" fill="#FF6B24"/><text x={p.x+12} y={p.y+4} fill="#fff" fontSize="14">{c.name}</text></g>})}
      {!countries.length&&<text x="400" y="250" textAnchor="middle" fill="#A5A7AC" fontSize="16">Країни та маршрути додаються у src/data/content.ts</text>}
    </svg></div></Reveal></div></section>
}
