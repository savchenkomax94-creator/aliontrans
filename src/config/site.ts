// ВСІ контакти та налаштування — тільки тут.
export const site = {
  name: 'АЛІОН-ТРАНС', legalName: 'ТОВ «АЛІОН-ТРАНС»',
  logo: '' as string, // шлях до SVG/PNG/WebP (файл у public/), напр. '/logo.svg'. Порожньо = текстовий варіант
  heroImage: '' as string, // фото для Hero, напр. '/img/hero.webp'
  phone: '+380000000000', phoneLabel: '+38 (0XX) XXX XX XX',
  email: 'info@your-domain.ua', address: 'Адреса буде додана',
  telegram: '', whatsapp: '', // 'https://t.me/username', 'https://wa.me/380XXXXXXXXX'
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? '',
  privacyUrl: '#',
}
export const nav = [
  ['Головна','#top'],['Про компанію','#about'],['Послуги','#services'],['Перевезення','#portfolio'],
  ['Партнери','#partners'],['Відгуки','#reviews'],['Контакти','#contacts'],
] as const
