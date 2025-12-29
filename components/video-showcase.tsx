"use client"

import { useLanguage } from "@/contexts/language-context"

export function VideoShowcase() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12 md:py-16">
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/iN3I5C6xWxU?autoplay=1&mute=1&loop=1&playlist=iN3I5C6xWxU&controls=0&showinfo=0&rel=0&modestbranding=1"
          title={t.video.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </section>
  )
}

export default VideoShowcase
