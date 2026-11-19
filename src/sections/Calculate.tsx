import { FormEvent, useState } from 'react'; import { Loader2, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'; import { site } from '../config/site'
type F={[k:string]:string}
const fields:[string,string,string,boolean,string?][]=[
 ['name',"Ім'я",'text',true],['company','Компанія','text',false],['phone','Телефон','tel',true],['email','Email','email',true],
 ['from','Країна відправлення','text',true],['to','Країна доставки','text',true],['cargo','Тип вантажу','text',true],
 ['weight','Вага вантажу (кг)','number',false],['volume',"Об'єм вантажу (м³)",'number',false],['date','Дата перевезення','date',false]]
export default function Calculate(){
  const [v,setV]=useState<F>({}); const [e,setE]=useState<F>({}); const [consent,setC]=useState(false)
  const [st,setSt]=useState<'idle'|'loading'|'ok'|'fail'>('idle')
  const validate=()=>{const x:F={}
    fields.forEach(([k,l,,req])=>{if(req&&!v[k]?.trim())x[k]='Обов’язкове поле'})
    if(v.phone&&!/^\+?[0-9\s()\-]{9,18}$/.test(v.phone))x.phone='Невірний номер телефону'
    if(v.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email))x.email='Невірний email'
    if(!consent)x.consent='Потрібна згода на обробку персональних даних'
    setE(x);return !Object.keys(x).length}
  const submit=async(ev:FormEvent)=>{ev.preventDefault();if(st==='loading'||st==='ok'||!validate())return
    if(!site.formEndpoint){setSt('fail');return}
    setSt('loading')
    try{const r=await fetch(site.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({...v,consent:true,subject:'Нова заявка на розрахунок — АЛІОН-ТРАНС'})})
      setSt(r.ok?'ok':'fail')}catch{setSt('fail')}}
  const inp=(k:string,l:string,t:string,req:boolean)=><div key={k}><label htmlFor={k} className="text-xs text-muted">{l}{req&&' *'}</label>
    <input id={k} type={t} className={`field mt-1 ${e[k]?'border-red-500':''}`} value={v[k]??''} onChange={ev=>setV({...v,[k]:ev.target.value})} aria-invalid={!!e[k]}/>
    {e[k]&&<p role="alert" className="text-red-400 text-xs mt-1">{e[k]}</p>}</div>
  return <section id="calculate" className="sec bg-bg2"><div className="wrap grid lg:grid-cols-[1fr_1.2fr] gap-12">
    <Reveal><h2 className="h2">Маєте вантаж? Ми допоможемо з доставкою</h2>
      <p className="mt-6 text-muted">Залиште заявку, і наш менеджер зв'яжеться з вами для уточнення деталей та розрахунку вартості перевезення.</p></Reveal>
    <Reveal delay={.1}>{st==='ok'?<div className="bg-card p-10 text-center"><CheckCircle2 className="mx-auto text-accent" size={48}/><h3 className="text-2xl font-bold mt-4">Дякуємо! Заявку надіслано</h3><p className="text-muted mt-2">Менеджер зв'яжеться з вами найближчим часом.</p></div>:
    <form onSubmit={submit} noValidate className="bg-card p-6 md:p-10 grid sm:grid-cols-2 gap-4">
      {fields.map(([k,l,t,req])=>inp(k,l,t,req))}
      <div className="sm:col-span-2"><label htmlFor="info" className="text-xs text-muted">Додаткова інформація</label><textarea id="info" rows={3} className="field mt-1 py-3" value={v.info??''} onChange={ev=>setV({...v,info:ev.target.value})}/></div>
      <div className="sm:col-span-2"><label className="flex gap-3 text-sm text-muted items-start"><input type="checkbox" checked={consent} onChange={ev=>setC(ev.target.checked)} className="mt-1 accent-[#FF6B24] w-5 h-5"/>
        <span>Погоджуюсь на обробку персональних даних згідно з <a href={site.privacyUrl} className="underline">політикою конфіденційності</a></span></label>
        {e.consent&&<p role="alert" className="text-red-400 text-xs mt-1">{e.consent}</p>}</div>
      {st==='fail'&&<p role="alert" className="sm:col-span-2 text-red-400 text-sm">Не вдалося надіслати{!site.formEndpoint?' (не налаштовано VITE_FORM_ENDPOINT)':''}. Спробуйте ще раз або зателефонуйте нам.</p>}
      <button type="submit" disabled={st==='loading'} className="btn btn-a sm:col-span-2 disabled:opacity-60">{st==='loading'?<><Loader2 className="animate-spin" size={18}/>НАДСИЛАЄМО…</>:'НАДІСЛАТИ ЗАПИТ'}</button>
    </form>}</Reveal></div></section>
}
