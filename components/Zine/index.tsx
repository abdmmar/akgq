import dynamic from 'next/dynamic'

import BehindTheScene from './BehindTheScene'
import Cover from './Cover'
import Editorial from './Editorial'
import Epilog from './Epilog'
import CeritaDong from './CeritaDong'
import SpotifyPlaylist from './SpotifyPlaylist'
import KataSiKetua from './KataSiKetua'

import useOnScreen from 'hooks/useOnScreen'

const ShoutOut = dynamic(() => import('./ShoutOut'))
const PhotoDump = dynamic(() => import('./PhotoDump'))
const AKGQGallery = dynamic(() => import('./AKGQGallery'))
const SharingSession = dynamic(() => import('./SharingSession'))
const DisiniKitaBerjumpa = dynamic(() => import('./DisiniKitaBerjumpa'))

const Zine = () => {
  const dkb = useOnScreen()
  const gallery = useOnScreen()
  const shoutout = useOnScreen()
  const photoDump = useOnScreen()
  const sharingSession = useOnScreen()

  return (
    <main>
      <Cover />
      <Editorial />
      <SpotifyPlaylist />
      <KataSiKetua />
      <div ref={shoutout.elementRef}>{shoutout.isSeen ? <ShoutOut /> : null}</div>
      <BehindTheScene />
      <CeritaDong />
      <div ref={sharingSession.elementRef}>{sharingSession.isSeen ? <SharingSession /> : null}</div>
      <div ref={dkb.elementRef}>{dkb.isSeen ? <DisiniKitaBerjumpa /> : null}</div>
      <div ref={photoDump.elementRef}>{photoDump.isSeen ? <PhotoDump /> : null}</div>
      <div ref={gallery.elementRef}>{gallery.isSeen ? <AKGQGallery /> : null}</div>
      <Epilog />
    </main>
  )
}

export default Zine
