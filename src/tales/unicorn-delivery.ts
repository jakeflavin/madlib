import type { Tale } from '../types'

export const unicornDelivery: Tale = {
  id: 'unicorn-delivery',
  title: 'The Last Unicorn Delivery',
  kicker: 'A tale of parcels and hooves',
  blurb:
    'Sign here, please. The courier has one week, four hundred miles, and a unicorn foal who will not stop eating the paperwork.',
  minutes: 6,
  tags: ['adventure', 'magic', 'friendship'],
  accent: '#DCA9E8',
  character: 'unicorn',
  slots: [
    { id: 'courier', kind: 'name', label: "The courier's name" },
    { id: 'foal', kind: 'name', label: 'What the courier names the foal' },
    { id: 'start', kind: 'place', label: 'Where the delivery starts' },
    { id: 'end', kind: 'place', label: 'Where it has to get to' },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'noun1', kind: 'noun', hint: 'What the foal will not stop eating' },
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
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation', hint: 'Who is waiting at the other end' },
  ],
  chapters: [
    {
      title: 'I. One Parcel, Do Not Fold',
      body: `The docket said: **ONE (1) LIVE CONSIGNMENT. HANDLE WITH CARE. DO NOT NAME.**

[[courier]] had been running parcels out of [[start]] for [[num1]] years and had carried some [[adj1]] cargo in that time — a box that ticked, a crate that apologised, and once, memorably, a [[noun2]] that had to be kept upside down — but never anything with a heartbeat.

The crate in the yard was breathing.

"It's a foal," said the dispatcher, not meeting anybody's eye. "Last one anybody's seen in sixty years. It goes to [[end]] by the first of the month and it goes there alive, and the fee is four years' wages, and before you ask: yes, that is because seven other couriers said no."

"Why did they say no?"

"Because the road to [[end]] goes through the Hollow, and because everyone between here and there would pay a great deal for what's in that crate. Sign at the bottom."

[[courier]] signed at the bottom.

The crate opened at the first waystation, because the breathing had gone [[adj2]] and quiet, and [[courier]] was not able to leave it alone. Inside was something the size of a large dog, the [[color1]] of nothing in particular, with legs it clearly had not been issued instructions for and a horn about as long as a thumb.

It looked up. It [[verbpast1]]. Then it ate [[courier]]'s docket.

"[[exclaim]] That's — that's the *paperwork*—"

Rule one, broken by lunchtime. And rule two went at supper, when [[courier]] said, out loud and without meaning to, "All right, [[foal]], budge over."`,
    },
    {
      title: 'II. Four Hundred Miles, Give or Take',
      body: `Travelling with a unicorn foal is not what the songs suggest.

[[foal]] ate: the docket, the spare docket, two maps, a [[noun1]], most of a hat, and — over the course of one appalling night outside a village whose name [[courier]] refuses to say — an entire washing line of somebody's [[plural1]]. [[foal]] could not be left alone for eleven seconds. [[foal]] made a noise like a [[sound1]] whenever the cart went over a bridge, which, on the road to [[end]], is [[num1]] times a day.

And [[foal]] glowed. Not [[adv1]] — just enough that travelling by night was out of the question, which meant travelling by day, which meant being seen.

They were seen on the fourth day.

The riders came out of a stand of trees at the crossroads, [[num1]] of them, in no uniform anybody could name, and their leader was almost apologetic about it.

"You've something in that cart that isn't yours," he said. "Nothing personal. There's a market for it."

"It's a delivery," said [[courier]].

"It's a *fortune*."

What happened next is disputed. [[courier]] maintains that the cart hit a rut. The riders maintained, later and at length, that the [[adj3]] little thing in the back stood up on legs it barely controlled, looked directly at them, and made the air taste like a thunderstorm — and that their horses, who were sensible, unanimously decided to be somewhere else.

The riders left on foot. One of them was still going when he passed a [[occupation1]] two villages later, and could not explain what he was running from, and did not stop.`,
    },
    {
      title: 'III. The Hollow',
      body: `The Hollow could not be gone around. That was the whole trouble with the Hollow.

It is a stretch of road [[num1]] miles long where the trees lean in and the light goes [[adj4]] and green, and where — this is documented, this is in the almanac — a traveller's sense of direction simply stops working. People have gone in at the north end and come out the north end four days later, thinner and unwilling to discuss it.

"Right," said [[courier]], at the tree line, to a foal who was busy [[verbing1]] at a butterfly. "Here's the plan. There is no plan."

They went in.

The first hour was fine. The second hour was fine in a way that made [[courier]]'s [[bodypart]] prickle. In the third hour the road forked where no fork had been on any map, and both forks looked identical, and [[courier]] stood between them for a long time feeling the specific dread of a person who knows they are about to guess.

[[foal]] walked past, took the left one without hesitating, and looked back like a creature waiting for a slow companion.

"You know where you're going?"

[[foal]] did not answer, being a horse.

But it did not stop, either. It walked the whole Hollow — through the fork, past the standing stone, over the stream that runs the wrong way — and it never once slowed, and behind it [[courier]] walked with a hand on a warm flank and did not let go, and at dusk on the second day the trees opened and there was sky and a road going where a road should go.

"[[magic]]," said [[courier]], softly, which is what people in [[start]] say instead of thank you when they don't know who to thank.`,
    },
    {
      title: 'IV. The First of the Month',
      body: `They came into [[end]] with a day to spare, filthy, and — [[courier]] would admit this to nobody — not in any hurry at all.

The last night on the road, [[courier]] cooked the last of the [[food1]] over a small fire and shared it, because a unicorn foal will eat [[food1]] and also anything else, and sat up long after there was any reason to.

"Here's the thing," [[courier]] said to a sleeping animal. "I've been doing sums. Four years' wages. A house with a door that shuts. And I keep getting to the same problem, which is that I have to hand you to somebody in the morning and I don't know a single thing about them except that they're rich enough to buy you."

[[foal]] snored.

"That's what I thought."

The address on the docket — the surviving corner of it — was a house on the hill, and the [[occupation1]] who opened the door was not what [[courier]] had spent a week dreading. She was about eighty. She looked at the cart, and then at [[courier]], and then she sat down on her own steps rather suddenly.

"Sixty-one years," she said. "I've been paying people to look since I was nineteen. Everyone said they were gone."

"They're not gone. There's one. It eats paperwork."

"Bring it in."

"Ma'am—" [[courier]] stopped, and started again, because the next bit needed saying [[adv2]] and there was no good way to do it. "Ma'am, what happens to it here?"

The old woman looked up, and looked, for a second, extremely [[adj1]].

"Nothing happens to it here," she said. "There are four hundred acres behind this house with a wall round them and not one road through, and I've been keeping it empty for sixty-one years on the off chance. Nothing *happens* to it. That's the entire point."`,
    },
    {
      title: 'V. The Standing Delivery',
      body: `[[courier]] took the fee. Anyone who says otherwise is romanticising.

But the house with a door that shuts got bought in [[end]] rather than [[start]], eleven miles from a wall with four hundred acres behind it, and the courier who bought it took an odd sort of standing contract that the guild has never known how to file.

Once a month, a cart goes up the hill. It carries feed, and post, and — because a certain [[adj3]] animal now weighs as much as a cart itself and has views — a sack of [[food2]] that costs more than it ought to. The old woman is ninety-one now and comes out to the gate in all weathers. She and [[courier]] argue about the price of feed. It is, by all accounts, the high point of both their months.

There are three unicorns behind the wall these days. Nobody is quite sure how, and nobody who knows is telling, and the almanac has been quietly updated.

The Hollow is still there, and still impossible, and [[courier]] has walked it [[num1]] more times since — always with a hand on a warm flank, always taking the fork the [[animal1]] would not have taken, always coming out the far side at dusk.

The original docket, or what survives of it, hangs framed in the hallway of the house at the bottom of the hill. Most of it is missing. The corner that remains reads, in official guild lettering:

**DO NOT [[verb1]]. DO NOT FOLD. DO NOT NAME.**

Underneath, in [[courier]]'s handwriting, somebody has added: *Two out of three. Would [[verb2]] again.*`,
    },
  ],
}
