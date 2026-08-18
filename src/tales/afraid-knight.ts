import type { Tale } from '../types'

export const afraidKnight: Tale = {
  id: 'afraid-knight',
  title: 'The Knight Who Was Afraid of Everything',
  kicker: 'A tale of armour and nerves',
  blurb:
    'Sir Nobody has been frightened of every single thing since birth. The kingdom has run out of other knights.',
  minutes: 6,
  tags: ['adventure', 'friendship', 'magic'],
  accent: '#9AA9E8',
  character: 'knight',
  slots: [
    { id: 'hero', kind: 'name', label: "The knight's name" },
    { id: 'kingdom', kind: 'place', label: 'The kingdom' },
    { id: 'adj1', kind: 'adjective', hint: 'How the knight feels most mornings' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'noun1', kind: 'noun', hint: 'What the knight carries instead of a sword' },
    { id: 'noun2', kind: 'noun' },
    { id: 'animal1', kind: 'animal', hint: "The knight's steed" },
    { id: 'animal2', kind: 'animal' },
    { id: 'verb1', kind: 'verb' },
    { id: 'verb2', kind: 'verb' },
    { id: 'verbing1', kind: 'verb-ing' },
    { id: 'verbpast1', kind: 'verb-past' },
    { id: 'adv1', kind: 'adverb' },
    { id: 'adv2', kind: 'adverb' },
    { id: 'num1', kind: 'number' },
    { id: 'food1', kind: 'food' },
    { id: 'plural1', kind: 'plural-noun', hint: 'What the knight is afraid of' },
    { id: 'plural2', kind: 'plural-noun' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
    { id: 'color1', kind: 'color' },
    { id: 'squire', kind: 'name', label: "The squire's name" },
  ],
  chapters: [
    {
      title: 'I. A Complete List of Fears',
      body: `[[hero]] of [[kingdom]] kept a list.

It was [[num1]] pages long, written in small handwriting, and it was titled *Things That Are Frightening*. It included the dark, deep water, [[plural1]], the sound a floorboard makes at two in the morning, and — in a shaky hand near the bottom — "being asked to do something brave."

[[hero]] was, by every measure the kingdom had, a [[adj1]] knight. The armour fit. The horse — a patient old [[animal1]] named Biscuit — was excellent. But where other knights carried a sword, [[hero]] carried a [[noun1]], because a sword had once been drawn in [[hero]]'s presence and the memory still caused a small unpleasant feeling behind the [[bodypart]].

"You are not a coward," said [[squire]], who was twelve, and who had been assigned as squire because nobody else volunteered. "You just have a very thorough imagination."

"That is the politest thing anyone has ever said to me."

"I'm being paid to be polite."

"Still counts."

Then the summons came from the palace, sealed in [[color1]] wax, and it said what everyone had been dreading for a month: something had moved into the pass above [[kingdom]], the road was closed, and every other knight in the realm was either injured, retired, or pretending to be both.

[[hero]] read it [[num1]] times, sat down on the floor, and said a word that is not in this book.`,
    },
    {
      title: 'II. The Road Up',
      body: `They left at dawn, because [[hero]] had read that brave people leave at dawn and was hoping it would help.

It did not help.

The road up to the pass was [[adj2]] and steep, and every switchback offered something new for the list. A [[animal2]] crossed the path and [[hero]] made a [[sound1]] that startled Biscuit into a trot. A branch fell. A shadow moved. Somewhere below, a bell rang [[adv1]] in a village that was already too far behind them.

"You could turn round," said [[squire]], not unkindly, around midday. "Nobody would know."

"I would know."

"That's the annoying thing about you."

They stopped to eat cold [[food1]] on a rock overlooking the whole valley — the mill, the granary, the [[plural2]] laid out in tidy rows, all of it small enough to cover with a thumb. [[hero]] looked at it for a long time.

"That's why I can't turn round," [[hero]] said finally. "Everyone down there is asleep in their beds thinking somebody's handling it. I'm the somebody. It's a very [[adj3]] feeling and I don't recommend it."

[[squire]] considered this, then handed over the last piece of [[food1]].

"For what it's worth," [[squire]] said, "I think being scared the whole way up and going anyway is a lot more impressive than not being scared."

"[[exclaim]] Don't be nice to me now, I'll cry in the armour and it'll rust."`,
    },
    {
      title: 'III. What Was in the Pass',
      body: `It was not a monster. That was the first shock.

It was a hole.

Not a cave — a *hole*, perfectly round, [[num1]] feet across, punched into the rock wall of the pass like somebody had pressed a coin into wet clay. It hummed. When [[hero]] stepped closer the hum went up a note, and the air in front of it shimmered the way air does over a hot road.

And a voice came out of it. A voice that was extremely polite and extremely tired.

*"Finally. Do you have any idea how long I've been shouting?"*

[[hero]] sat down very suddenly.

*"Don't panic. I'm a door. I have been a door for six hundred years, and about four months ago somebody closed me from the wrong side, and I've been stuck ajar ever since. It's been letting the weather through. I'm told it's ruined the pass. I'm extremely sorry about that."*

"You're a *door*."

*"I'm a very good door. I just can't reach my own handle."*

"[[exclaim]]"

*"Yes."*

[[squire]], who had been [[verbing1]] behind a rock this entire time, put a head out and said: "So we just... shut you?"

*"You'd have to reach inside to do it,"* said the door, [[adv2]]. *"Which does mean putting your arm into a six-hundred-year-old hole in reality. I understand if that's a problem."*

Every single item on [[hero]]'s list stood up at once and began waving.`,
    },
    {
      title: 'IV. The Longest Ten Seconds in the Kingdom',
      body: `Here is what [[hero]] thought about, standing in front of that hole with one gauntlet off.

The village below. The bell. [[squire]] eating cold [[food1]] on a rock and saying the kindest thing anybody had said in years. Biscuit, who was a [[adj4]] old [[animal1]] and deserved a warm stable. The [[num1]] pages of small handwriting in a satchel that had, somehow, come all the way up a mountain.

"I want it on the record," said [[hero]], "that I am absolutely terrified."

*"Noted,"* said the door.

"And that I'm doing it anyway."

*"Also noted. That's usually how it goes, in my experience."*

[[hero]] reached in.

The hole was cold — colder than winter, colder than deep water, cold in a way that felt like standing in a place that had never had a name. Something moved past [[hero]]'s wrist. Something else made a sound like a [[sound1]] played backwards. Fingers closed on a handle that felt like a [[noun2]] made of ice.

"[[magic]]," said [[hero]], because it was the only word available, and it was not a real word, and it did not matter at all.

And [[hero]] pulled.

The pass went silent so fast that [[squire]] fell over and a loose stone [[verbpast1]] down the slope behind them. The shimmer stopped. The hum stopped. The wind that had been screaming through that gap for four months simply — wasn't. And where the hole had been there was nothing but ordinary rock with a faint round mark in it, like the ghost of a coin.

From very far away, and very [[adv1]], something that might have been a door said: *thank you.*`,
    },
    {
      title: 'V. The List, Revised',
      body: `They came down the mountain slowly, because Biscuit was old and because [[hero]]'s hand did not stop shaking until well past supper.

[[kingdom]] threw a feast. Of course it did. There was a parade, and a speech, and a [[occupation1]] wrote a song about it that got almost every detail wrong and was enormously popular for eleven years. The palace offered [[hero]] a promotion, a castle, and a sword with a name.

[[hero]] accepted the promotion, declined the castle, and asked whether the sword could be swapped for something more useful — which is why, to this day, the Order of [[kingdom]] has one knight whose official ceremonial weapon is a [[noun1]], and why every child in the realm knows that story before they know their letters.

The list still exists. It is in a glass case in the great hall, open to the last page, where a second title has been added underneath the first in the same small handwriting.

*Things That Are Frightening — and What I Did About Them.*

The entries are short. **The dark:** *went in anyway.* **Deep water:** *learned to [[verb1]], badly.* **[[plural1]]:** *still working on it.* **Being asked to do something brave:** *turns out this is just what being asked to do something feels like, if you are paying attention.*

[[squire]] runs the Order now, and is [[adj3]] about it, and starts every single training class the same way — by holding up a copy of that list and asking the new recruits which of them has a longer one.

The ones who put their hands up, [[squire]] says, are the ones worth [[verbing1]] with. The ones who don't are either lying or not paying attention, and neither is any use at all when a mountain starts humming.

And every year, on the first cold night of autumn, the Order rides up to the pass and puts a lantern by the round mark in the rock — because a door that spent six hundred years doing its job deserves to have somebody [[verb2]] past occasionally and say hello, and because [[hero]] never could stand the thought of anything being left up there in the dark [[adv2]] on its own.`,
    },
  ],
}
