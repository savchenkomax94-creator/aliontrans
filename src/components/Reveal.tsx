import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Reveal({ children, delay=0, className='' }:{children:ReactNode;delay?:number;className?:string}) {
  const r = useReducedMotion()
  return <motion.div className={className} initial={r?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}}
    viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay,ease:'easeOut'}}>{children}</motion.div>
}
