"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    { value: 60, label: t.about.stats.projectsDelivered, prefix: "+" },
    { value: 40, label: t.about.stats.satisfiedClients, prefix: "+" },
    { value: 100, label: t.about.stats.resultsCommitment, suffix: "%" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCounter key={index} value={stat.value} label={stat.label} prefix={stat.prefix} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({
  value,
  label,
  prefix = "",
  suffix = "",
}: {
  value: number
  label: string
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div
      ref={ref}
      className={`text-center space-y-2 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-6xl md:text-7xl font-bold text-primary">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  )
}
