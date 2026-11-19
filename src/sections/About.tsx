import Reveal from '../components/Reveal'; import Img from '../components/Img'
const points=[['Історія компанії','Тут буде розповідь про історію ТОВ «АЛІОН-ТРАНС».'],['Досвід роботи','Тут буде інформація про досвід — тільки підтверджені факти.'],
['Принципи співпраці','Відкритість, відповідальність і дотримання домовленостей.'],['Переваги','Індивідуальний підхід до кожного вантажу та клієнта.']]
export default function About(){
  return <section id="about" className="sec bg-bg2"><div className="wrap grid md:grid-cols-2 gap-12 items-center">
    <Reveal><div className="aspect-[4/5] md:aspect-[4/5] border border-white/10"><Img src="" alt="Транспорт ТОВ «АЛІОН-ТРАНС»"/></div></Reveal>
    <Reveal delay={.1}><p className="text-accent text-sm font-display tracking-widest mb-4">ПРО КОМПАНІЮ</p>
      <h2 className="h2">Більше, ніж просто перевезення</h2>
      <p className="mt-6 text-muted">ТОВ «АЛІОН-ТРАНС» — транспортно-логістична компанія, що спеціалізується на міжнародних вантажних перевезеннях.</p>
      <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">{points.map(([t,d])=><div key={t} className="py-5 grid sm:grid-cols-[180px_1fr] gap-2"><dt className="font-display font-bold">{t}</dt><dd className="text-muted text-sm">{d}</dd></div>)}</dl>
    </Reveal></div></section>
}
