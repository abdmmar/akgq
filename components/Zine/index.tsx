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
import KataSiKetua from './KataSiKetua'

const Zine = () => {
  return (
    <main>
      <Cover />
      <Editorial />
      <SpotifyPlaylist />
      <KataSiKetua />
      <ShoutOut />
      <BehindTheScene />
      <SemogaKitaBerjumpa />
      <SharingSession />
      <DisiniKitaBerjumpa />
      <PhotoDump />
      <AKGQGallery />
      <Epilog />
    </main>
  )
}

export default Zine
