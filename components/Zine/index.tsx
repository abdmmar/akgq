import BehindTheScene from './BehindTheScene'
import Cover from './Cover'
import Editorial from './Editorial'
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
    </main>
  )
}

export default Zine
