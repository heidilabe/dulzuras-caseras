export const WHATSAPP_NUMBER = '56967511878'

export const WHATSAPP_MESSAGE =
  'Hola, quisiera consultar por sus productos, precios y disponibilidad para realizar una reserva.'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const HERO_PHOTO = '/portada.png'

export const products = [
  {
    id: 'kuchen',
    name: 'Kuchen',
    detail: null,
    price: '$10.000',
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    detail: '6 unidades',
    price: '$3.000',
  },
]
