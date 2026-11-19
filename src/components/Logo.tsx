import { site } from '../config/site'
export default function Logo({ h=32 }:{h?:number}) {
  return site.logo ? <img src={site.logo} alt={site.name} style={{height:h}} />
    : <span className="font-display font-bold tracking-[.18em] text-lg">АЛІОН<span className="text-accent">-</span>ТРАНС</span>
}
