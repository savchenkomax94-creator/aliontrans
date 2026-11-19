import Logo from '../components/Logo'; import { nav, site } from '../config/site'
export default function Footer(){
  return <footer className="bg-bg2 border-t border-white/10 py-12"><div className="wrap grid md:grid-cols-3 gap-8 text-sm">
    <div><Logo/><p className="mt-4 text-muted max-w-xs">{site.legalName} — міжнародні транспортні перевезення для бізнесу.</p></div>
    <nav aria-label="Футер" className="grid grid-cols-2 gap-2 text-muted">{nav.map(([l,h])=><a key={h} href={h} className="hover:text-white py-1">{l}</a>)}</nav>
    <div className="text-muted space-y-2"><a className="block hover:text-white" href={`tel:${site.phone}`}>{site.phoneLabel}</a><a className="block hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
      {site.telegram&&<a className="block hover:text-white" href={site.telegram}>Telegram</a>}<a className="block hover:text-white" href={site.privacyUrl}>Політика конфіденційності</a></div>
  </div><p className="wrap mt-10 text-xs text-muted">© {new Date().getFullYear()} {site.legalName}. Усі права захищені.</p></footer>
}
