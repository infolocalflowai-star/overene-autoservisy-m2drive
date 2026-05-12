import { useEffect } from 'react'

export default function PageMeta({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)

      let og = document.querySelector('meta[property="og:description"]')
      if (og) og.setAttribute('content', description)

      let ogt = document.querySelector('meta[property="og:title"]')
      if (ogt && title) ogt.setAttribute('content', title)
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }
  }, [title, description, canonical])

  return null
}
