export default function Img({ src, alt, className='' }:{src:string;alt:string;className?:string}) {
  return src ? <img src={src} alt={alt} loading="lazy" className={`object-cover w-full h-full ${className}`} />
    : <div role="img" aria-label={alt} className={`w-full h-full bg-gradient-to-br from-card to-bg2 grid place-items-center text-muted text-xs ${className}`}>фото буде додано</div>
}
