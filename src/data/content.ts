// Тексти, фото, партнери, відгуки, маршрути. Замінюйте без змін у компонентах.
export const services = [
  { title:'Міжнародні вантажні перевезення', text:'Організація автомобільних перевезень між країнами.', img:'' },
  { title:'Організація логістики', text:'Планування маршруту та супровід вантажу на всьому шляху.', img:'' },
  { title:'Перевезення різних типів вантажів', text:'Підбір транспорту під особливості вашого вантажу.', img:'' },
  { title:'Індивідуальні транспортні рішення', text:'Рішення під задачі конкретного бізнесу.', img:'' },
] // img: напр. '/img/service1.webp'
export const countries: { name:string; lon:number; lat:number }[] = [] // { name:'Польща', lon:19, lat:52 }
export const routes: { from:string; to:string }[] = [] // назви зі списку countries
export const portfolio: { img:string; title:string; cargo?:string; route?:string }[] = [
  { img:'', title:'Фото перевезення №1 (замініть)' },{ img:'', title:'Фото перевезення №2 (замініть)' },
  { img:'', title:'Фото перевезення №3 (замініть)' },{ img:'', title:'Фото перевезення №4 (замініть)' },
  { img:'', title:'Фото перевезення №5 (замініть)' },
]
export const partners: { name:string; logo:string }[] = [] // { name:'Компанія', logo:'/img/partner1.svg' }
export const reviews = [
  { text:'Тут буде справжній відгук партнера. Тимчасова заглушка.', name:'Ім’я представника', company:'Компанія', role:'Посада' },
  { text:'Тут буде справжній відгук партнера. Тимчасова заглушка.', name:'Ім’я представника', company:'Компанія', role:'Посада' },
]
