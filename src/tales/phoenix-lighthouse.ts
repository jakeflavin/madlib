import type { Tale } from '@/types'

export const phoenixLighthouse: Tale = {
  id: 'phoenix-lighthouse',
  title: 'The Phoenix and the Lighthouse Keeper',
  kicker: 'A tale of last nights and first mornings',
  blurb:
    'The light is being switched off for good on Friday. Something enormous and on fire has opinions about that.',
  minutes: 6,
  tags: ['sea', 'friendship', 'magic'],
  accent: '#EE6B5E',
  character: 'phoenix',
  slots: [
    { id: 'keeper', kind: 'name', label: "The keeper's name" },
    { id: 'bird', kind: 'name', label: 'What the keeper calls the bird' },
    { id: 'coast', kind: 'place', label: 'The stretch of coast' },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'noun1', kind: 'noun', hint: 'What the keeper has polished for forty years' },
    { id: 'noun2', kind: 'noun' },
    { id: 'animal1', kind: 'animal' },
    { id: 'verb1', kind: 'verb' },
    { id: 'verb2', kind: 'verb' },
    { id: 'verbing1', kind: 'verb-ing' },
    { id: 'verbpast1', kind: 'verb-past' },
    { id: 'adv1', kind: 'adverb' },
    { id: 'adv2', kind: 'adverb' },
    { id: 'num1', kind: 'number' },
    { id: 'food1', kind: 'food' },
    { id: 'food2', kind: 'food' },
    { id: 'plural1', kind: 'plural-noun' },
    { id: 'color1', kind: 'color' },
    { id: 'color2', kind: 'color' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
  ],
  chapters: [
    {
      title: 'I. Notice of Decommission',
      body: `The letter came on a Tuesday and used the word *decommission* [[num1]] times.

[[keeper]] read it at the kitchen table of a lighthouse at the end of [[coast]], where the wind comes off the water in a way that gets into the [[bodypart]] and stays, and where [[keeper]] had kept the light for forty-one years.

Ships had satellites now. The letter explained this [[adv1]], as though to a child. The light would be extinguished on Friday. The keeper's post was abolished. There was a form.

[[keeper]] went up the [[num1]] steps that night as usual, and polished the [[noun1]] as usual — forty-one years of the same cloth on the same brass, until it threw back a face that was [[adj1]] and getting old — and lit the light, and sat with it, and did not sleep.

On Wednesday something landed on the gallery rail.

It was the size of a rowing boat. It was [[color1]] going on [[color2]], and it was, unmistakably and inconveniently, on fire — not burning, exactly, but *lit*, the way a coal is lit, all the way through. It folded wings that took a long time to fold, looked in through the glass at a small human holding a polishing cloth, and made a sound like a [[sound1]] heard from underwater.

"[[exclaim]]," said [[keeper]], with enormous restraint.`,
    },
    {
      title: 'II. Nesting Behaviour',
      body: `It would not leave.

It sat on the rail through Wednesday night and all of Thursday, turning its head to follow the beam as it swept, and every time [[keeper]] came up the stairs it shuffled a little closer to the glass.

[[keeper]] tried shouting. Then a broom. Then, on the theory that it had worked with a [[animal1]] once, a bowl of [[food1]], which the bird ignored with the flat contempt of a creature that has not eaten in three hundred years and has no intention of starting now.

On Thursday afternoon [[keeper]] gave up, sat down on the gallery with a mug, and said out loud what had been circling all week.

"They're switching it off tomorrow. So if you're here for the light, you've picked a [[adj2]] time."

The bird turned its head.

"Forty-one years," [[keeper]] said, to a bird. "My father before that. There's a ledger downstairs with every ship that ever passed, and eleven that didn't, and I know all eleven names. And on Friday a man from the department comes with a form, and after that it's just a tower."

The bird made the underwater sound again, and — [[adv2]], the way an old thing does anything — laid its head down on the rail.

That was when [[keeper]] noticed that it was dimming.

Not going out. Dimming: the deep [[color1]] going grey at the edges, like a fire at four in the morning, and it had been doing it since it arrived and [[keeper]] had been too busy shouting to see it.

"Oh," said [[keeper]]. "You're not here for the light. You're here to *use* it."`,
    },
    {
      title: 'III. What the Light Was Actually For',
      body: `Here is what [[keeper]] worked out that night, sitting on a cold gallery with a dying bird, going through forty-one years of the ledger by lamplight.

Every [[num1]] years, since the tower was built, there is an entry in the keeper's log that makes no sense. A night with no ships. Weather described as *[[adj3]]*. And in the margin, in every keeper's different hand — [[keeper]]'s father's, and his mother's before that, and back and back — the same three words:

*The big one.*

Nobody had ever written down what it meant. Keepers are like that. You do not put a thing in the official log if you think the department will read it and take your tower away.

But there were other marks. Little sketches. A shape on the rail. Wings that took a long time to fold.

"You come here to burn down," said [[keeper]], to a bird that was now barely [[color2]] at all. "And then you come back up. And you've been doing it off this light for two hundred years, and every single keeper before me saw it and wrote three words and said nothing, because who would believe them."

The bird did not answer, being a bird, and being nearly out.

[[keeper]] looked at the beam sweeping over the water. Looked at the letter on the table downstairs with the word *Friday* in it.

Then went and got the [[noun2]], and the cloth, and started polishing the [[noun1]] again — at two in the morning, on the last night, on a light that was being switched off in fourteen hours — because it was the only useful thing there was to do and because the beam had to be as bright as forty-one years could make it.`,
    },
    {
      title: 'IV. Friday',
      body: `The man from the department arrived at ten with a clipboard and a [[adj4]] expression and found the gate chained.

[[keeper]] shouted down from the gallery that there was a nesting seabird of protected status on the rail and that the site was therefore closed pending survey, which was a lie constructed out of three separate regulations and was, [[keeper]] later admitted, the finest piece of work of an otherwise quiet career.

The man from the department went away to check. That bought a day.

The [[occupation1]] from the village bought two more, by parking a tractor across the road and losing the key with great sincerity. The harbourmaster bought a fourth. By Monday there were [[num1]] people from [[coast]] on the headland with flasks and [[food2]] and folding chairs, because word had gone round, and because a coast that has spent two hundred years pretending not to see something is a coast that would quite like, just once, to see it properly.

It happened on the Tuesday, at moonrise, and everybody there agrees on the following:

That the bird went out completely — no glow, nothing, just a grey shape on a rail. That the beam came round. That it fell on the bird and *stayed*, because [[keeper]] had stopped the rotation with a hand on the gear, and held it, and the whole headland heard the motor complaining.

And that after a minute, or an hour, the grey shape took a breath.

The light that came off it was not [[color1]]. It was white, and it went up the tower and out over the water for [[num1]] miles, and three villages down the coast reported the sky going bright, and every dog in [[coast]] began [[verbing1]] at once.

When people could see again the bird was standing on the rail, enormous and appalling and new, and [[keeper]] was flat on the gallery floor laughing with both hands over both eyes.`,
    },
    {
      title: 'V. Station Number Fourteen, Reactivated',
      body: `The department is not a monster. It is a department. It took four months.

But it turns out there is a heading in the regulations for a site of recurring natural phenomenon, and it turns out that eleven villages, one harbourmaster, [[num1]] letters and a photograph that nobody has ever been able to explain will move a department if applied steadily.

Station Fourteen is lit. It is the only decommissioned light on the whole coast to have been switched back on, and the paperwork calls it a *cultural and ecological monitoring installation*, and [[keeper]] calls it the lighthouse, because that is what it is.

The bird — [[bird]], now, because after a while you have to call a thing something — comes back every year or so. It sits on the rail. It ignores [[food1]] with the same contempt. It has never once made a sound anybody can spell, and it lets exactly one person within arm's reach, and that person is now seventy-three and climbs the [[num1]] steps more slowly than they used to.

There is a second cloth on the hook by the [[noun1]] these days. It belongs to the [[occupation1]]'s youngest, who is nineteen, who has been coming up the tower since the night of the tractor, and who will have the light when the time comes.

The log is honest now. That was [[keeper]]'s condition for the whole arrangement — that after two hundred years of *the big one* scribbled in margins, somebody would finally write it down properly, with dates and drawings and the plain sentence: **the light is for the ships, and it is also for [[bird]], and it has always been for both.**

The last page of the old ledger has one more line on it, added the morning after, in handwriting that is not quite steady.

*They can turn a thing off. They cannot make it stop being needed. Ask before you [[verb1]] the switch — and if something has come a long way to [[verb2]] by your light, keep it burning, and to blazes with the form.*

Underneath that, smaller: **[[magic]]** — which is what [[keeper]]'s father used to say instead of goodnight, going down the stairs, leaving the light [[verbpast1]] behind him, sweeping out over the [[plural1]] and the black water and everything out there still trying to find its way home.`,
    },
  ],
}
