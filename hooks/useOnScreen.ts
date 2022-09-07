import * as React from 'react'

const useOnScreen = () => {
  const elementRef = React.useRef<HTMLDivElement>(null)
  const [isSeen, setIsSeen] = React.useState(false)

  React.useEffect(() => {
    const el = elementRef.current
    const observer = new IntersectionObserver(([entry]) => {
      if (!isSeen) {
        setIsSeen(entry.isIntersecting)
      }
    })

    if (el) {
      observer.observe(el)
    }

    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }
  }, [isSeen])

  return { elementRef, isSeen }
}

export default useOnScreen
