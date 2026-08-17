import type { Tale } from '../types'
import { cinderCrown } from './cinder-crown'
import { cloudCartographer } from './cloud-cartographer'
import { emberFell } from './ember-fell'
import { frostwoodPact } from './frostwood-pact'
import { lanternBelow } from './lantern-below'
import { wanderingTeahouse } from './wandering-teahouse'

/** Every tale on the shelf. Add a file here and it appears in the app. */
export const TALES: Tale[] = [
  emberFell,
  cinderCrown,
  frostwoodPact,
  lanternBelow,
  cloudCartographer,
  wanderingTeahouse,
]

export function findTale(id: string): Tale | undefined {
  return TALES.find((tale) => tale.id === id)
}
