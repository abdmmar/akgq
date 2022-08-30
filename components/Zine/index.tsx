import AKGQGallery from './AKGQGallery'
import BehindTheScene from './BehindTheScene'
import Cover from './Cover'
import DisiniKitaBerjumpa from './DisiniKitaBerjumpa'
import Editorial from './Editorial'
import Epilog from './Epilog'
import PhotoDump from './PhotoDump'
import SemogaKitaBerjumpa from './CeritaDong'
import SharingSession from './SharingSession'
import ShoutOut from './ShoutOut'
import SpotifyPlaylist from './SpotifyPlaylist'

const Zine = () => {
  return (
    <main>
      <Cover />
      <Editorial />
      <ShoutOut />
      <BehindTheScene />
      <SemogaKitaBerjumpa />
      <SharingSession />
      <DisiniKitaBerjumpa />
      <PhotoDump />
      <AKGQGallery />
      <Epilog />
      <SpotifyPlaylist />
    </main>
  )
}

export default Zine
