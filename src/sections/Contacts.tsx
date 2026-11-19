import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'; import Reveal from '../components/Reveal'; import { site } from '../config/site'
export default function Contacts(){
  const rows=[[Phone,site.phoneLabel,`tel:${site.phone}`],[Mail,site.email,`mailto:${site.email}`],[MapPin,site.address,'']] as const
  return <section id="contacts" className="sec"><div className="wrap grid md:grid-cols-2 gap-12">
    <Reveal><h2 className="h2">Будемо раді співпраці</h2>
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        {site.telegram&&<a href={site.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-a"><Send size={18}/>Telegram</a>}
        {site.whatsapp&&<a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-o"><MessageCircle size={18}/>WhatsApp</a>}
        <a href={`tel:${site.phone}`} className="btn btn-o"><Phone size={18}/>Подзвонити</a></div></Reveal>
    <Reveal delay={.1}><ul className="divide-y divide-white/10 border-y border-white/10">{rows.map(([I,t,h],i)=><li key={i} className="py-5 flex items-center gap-4"><I className="text-accent shrink-0"/>
      {h?<a href={h} className="font-display text-lg hover:text-accent">{t}</a>:<span className="font-display text-lg">{t}</span>}</li>)}</ul></Reveal></div></section>
}
