import AKGQGallery from './AKGQGallery'
import BehindTheScene from './BehindTheScene'
import Cover from './Cover'
import DisiniKitaBerjumpa from './DisiniKitaBerjumpa'
import Editorial from './Editorial'
import PhotoDump from './PhotoDump'
import SemogaKitaBerjumpa from './SemogaKitaBerjumpa'
import SharingSession from './SharingSession'
import ShoutOut from './ShoutOut'

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
    </main>
  )
}

export default Zine
