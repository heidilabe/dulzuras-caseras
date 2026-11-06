import { useState } from 'react'
import { HERO_PHOTO, WHATSAPP_LINK, products } from './data.js'

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12.04 2.5a9.42 9.42 0 0 0-8.1 14.2L2.5 21.5l4.93-1.4a9.42 9.42 0 1 0 4.61-17.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.35 7.42c-.2-.45-.42-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.9 3.03 4.7 4.13 2.33.92 2.8.74 3.3.69.5-.05 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.3-.07-.12-.25-.19-.53-.33-.28-.14-1.63-.8-1.88-.9-.25-.09-.44-.14-.62.14-.19.28-.72.9-.88 1.08-.16.19-.33.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.74-1.38-1.65-1.54-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05Z"
        fill="currentColor"
      />
    </svg>
  )
}

function HeartIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 20.2S3.8 15.4 3.8 9.5A4.5 4.5 0 0 1 12 6.6a4.5 4.5 0 0 1 8.2 2.9c0 5.9-8.2 10.7-8.2 10.7Z"
        fill="currentColor"
      />
    </svg>
  )
}

function CoverImage() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="cover-placeholder" role="img" aria-label="Portada de Dulzuras Caseras">
        <span className="placeholder-mark" aria-hidden="true">
          <HeartIcon size={28} />
        </span>
        <strong>Dulzuras Caseras</strong>
        <small>public/portada.png</small>
      </div>
    )
  }

  return (
    <img
      className="cover-image"
      src={HERO_PHOTO}
      alt="Portada de Dulzuras Caseras"
      loading="eager"
      onError={() => setFailed(true)}
    />
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="page-header">
        <span className="brand-mark" aria-hidden="true">
          <HeartIcon size={20} />
        </span>
        <h1>Dulzuras Caseras</h1>
      </header>

      <main>
        <div className="container">
          <section className="cover" aria-label="Portada principal">
            <div className="cover-frame">
              <CoverImage />
            </div>
          </section>

          <section className="menu" aria-labelledby="menu-title">
            <h2 className="sr-only" id="menu-title">
              Productos y precios
            </h2>

            <div className="price-list">
              {products.map((product) => (
                <article className="price-row" key={product.id}>
                  <div className="price-info">
                    <h3>{product.name}</h3>
                    {product.detail && <p>{product.detail}</p>}
                  </div>
                  <span className="price">{product.price}</span>
                </article>
              ))}
            </div>

            <a
              className="whatsapp-button"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={24} />
              <span>Consultar y reservar por WhatsApp</span>
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}
