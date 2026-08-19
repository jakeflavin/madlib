import type { Tale } from '@/types'
import { afraidKnight } from './afraid-knight'
import { cinderCrown } from './cinder-crown'
import { cloudCartographer } from './cloud-cartographer'
import { emberFell } from './ember-fell'
import { frostwoodPact } from './frostwood-pact'
import { lanternBelow } from './lantern-below'
import { phoenixLighthouse } from './phoenix-lighthouse'
import { roadsideLibrary } from './roadside-library'
import { tollBridgeTroll } from './toll-bridge-troll'
import { tumbledownWitch } from './tumbledown-witch'
import { unicornDelivery } from './unicorn-delivery'
import { wanderingTeahouse } from './wandering-teahouse'

/** Every story in the book. Add a file here and it appears in the app. */
export const TALES: Tale[] = [
  emberFell,
  cinderCrown,
  frostwoodPact,
  lanternBelow,
  cloudCartographer,
  wanderingTeahouse,
  afraidKnight,
  tumbledownWitch,
  unicornDelivery,
  tollBridgeTroll,
  roadsideLibrary,
  phoenixLighthouse,
]

export function findTale(id: string): Tale | undefined {
  return TALES.find((tale) => tale.id === id)
}
