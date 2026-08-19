import type { Tale } from '@/types'

export const tollBridgeTroll: Tale = {
  id: 'toll-bridge-troll',
  title: 'The Troll Under the Toll Bridge',
  kicker: 'A tale of paperwork and boulders',
  blurb:
    'The troll has held the bridge for four hundred years. The village has just formed a committee. Only one of them is enjoying this.',
  minutes: 6,
  tags: ['friendship', 'adventure', 'family'],
  accent: '#C6D870',
  character: 'troll',
  slots: [
    { id: 'troll', kind: 'name', label: "The troll's name" },
    { id: 'clerk', kind: 'name', label: "The village clerk's name" },
    { id: 'village', kind: 'place', label: 'The village' },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'noun1', kind: 'noun', hint: 'What the toll is paid in' },
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
    { id: 'plural2', kind: 'plural-noun' },
    { id: 'color1', kind: 'color' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
  ],
  chapters: [
    {
      title: 'I. Item Four: The Bridge',
      body: `The village of [[village]] had exactly one problem, and it had been the fourth item on every meeting agenda for four hundred years.

**ITEM FOUR: THE BRIDGE.**

The bridge was the only way across the river. Under the bridge lived a troll. To cross the bridge you paid the troll one [[noun1]], and if you did not have a [[noun1]] the troll would rise up out of the dark with a noise like a [[sound1]] and say, in a voice you felt in your [[bodypart]] rather than heard, **"THE TOLL."**

Nobody had ever failed to find a [[noun1]] after that.

"It's [[num1]] a year in lost trade," said the head of the committee, at the meeting where all this went wrong. "We should drive it off."

"With what?" said [[clerk]], who was the village clerk, who was twenty-six, and who had read every minute of every meeting since the year 1400 because somebody had to file them.

"With — with force!"

"It's eleven feet tall and made largely of rock."

"Then with *cleverness*."

"It has held a bridge for four hundred years against a village that produces one clever idea per generation. I'd call that a settled question."

The committee, [[adv1]], voted to send [[clerk]] to negotiate. This was not because [[clerk]] was the bravest. It was because [[clerk]] had been [[adj1]] in a meeting, and [[village]] has always had a firm view about that.`,
    },
    {
      title: 'II. The Negotiation',
      body: `[[clerk]] went down to the bridge at dusk with a folding stool, a lantern, a wedge of [[food1]], and four hundred years of minutes in a satchel.

"Hello," said [[clerk]], to the dark under the arch. "I'd like to discuss item four."

**"THE TOLL,"** said the dark.

"Yes. That's the item." [[clerk]] set up the stool. "I've brought the paperwork."

There was a long pause, and then a sound like a quarry clearing its throat, and then the troll came out — slowly, and with the [[adj2]] care of something very heavy that has learned what happens when it hurries — and looked at the folding stool, and the lantern, and the small human sitting on one holding the other.

**"YOU ARE NOT RUNNING."**

"I'm on a stool."

**"THE OTHERS RUN."**

"The others didn't bring a stool," said [[clerk]], and opened the satchel. "Right. Question one. Why a [[noun1]]? Specifically. Four hundred years, always a [[noun1]], never anything else. I've checked. It's in every single record."

The troll sat down. The bank went down about a foot where it sat.

**"IT IS THE TOLL,"** it said, but less certainly.

"Yes, but *why*?"

And the troll — whose name, it turned out after some coaxing, was [[troll]] — said something that [[clerk]] wrote down word for word, and which is the reason the whole thing turned out the way it did.

**"I DO NOT REMEMBER. I ONLY REMEMBER THAT I WAS TOLD TO HOLD THE BRIDGE. SO I HOLD THE BRIDGE."**`,
    },
    {
      title: 'III. Four Hundred Years of Minutes',
      body: `[[clerk]] came back the next night. And the night after.

They went through the minutes together, which took eleven weeks, because [[troll]] read [[adv2]] and because a great deal of it was about drainage. [[clerk]] brought [[food1]] every time. [[troll]] would not eat it in company for the first month and then ate it constantly thereafter and developed strong opinions about [[food2]], which it had never encountered and considered [[adj3]].

They found it in the eighth week, under a pressed flower somebody had used as a [[noun2]] four centuries earlier. A single line, in the minutes of the year 1412, in handwriting so [[adj4]] that four hundred years of clerks had skipped it:

*Resolved: the stone-fellow of the ford to be paid one [[noun1]] the crossing, in exchange for holding the bridge against the raiders from the north, until such time as the danger is past.*

[[clerk]] read it twice, and then sat back on the folding stool, and said, quietly, "Oh, no."

**"WHAT."**

"[[troll]], the raiders from the north stopped coming in fourteen—" [[clerk]] checked, and checked again. "1489. They stopped in 1489. There's a whole entry about a feast."

**"WHAT."**

"Nobody told you. Nobody — [[troll]], nobody came down here and *told* you. You've been holding a bridge against an enemy that's been gone for three hundred and thirty years, and every single generation of this village decided the easier thing was to keep paying you a [[noun1]] and complain about it at meetings."

There was a silence under the bridge that went on a very long time.

**"[[exclaim]]"** said [[troll]], eventually, which was not a word it had known it knew.`,
    },
    {
      title: 'IV. Item Four, Amended',
      body: `The meeting was standing room only. It is still talked about.

[[clerk]] read the 1412 resolution out loud. Then read the 1489 entry about the feast. Then put both on the table, and said the thing the committee had been waiting four hundred years for somebody to say, which was: "The contract was completed in 1489. We owe him back pay."

The room went up like a barn.

The argument lasted [[num1]] hours. There was shouting about precedent, and shouting about money, and shouting from a [[occupation1]] at the back about drainage, because there is always shouting about drainage. Somebody suggested the whole thing be referred to a sub-committee, and [[clerk]] said something in reply that is not recorded in the minutes because [[clerk]] wrote the minutes.

At half past two in the morning, they voted.

And that is how the village of [[village]] came to abolish the toll, and to owe one troll three hundred and thirty years of arrears, and — because nobody had three hundred and thirty years of arrears lying about — to settle the debt with the only asset it had spare: the water meadow, the mill house on it, and the fishing rights on that stretch of river in perpetuity.

[[troll]] moved out from under the bridge in the spring. It took [[num1]] carts and most of the village to shift the boulders it had been sleeping among, several of which turned out to be [[plural1]] it had been collecting, and one of which turned out to be a [[animal1]] that had been asleep since roughly 1600 and was extremely annoyed about being woken.`,
    },
    {
      title: 'V. The Mill House on the Meadow',
      body: `[[troll]] still holds the bridge. That surprised everybody.

Not for a toll — the toll is gone, and there is a sign at each end saying so, and every child in [[village]] learns the story of item four before they learn the river's name. [[troll]] holds it because after four hundred years a thing becomes less like a job and more like a shape you have grown into, and because — as [[troll]] explained once, [[adv1]], over [[food2]] — *somebody should be watching the water, and I am good at it, and I have nothing else to do on a Tuesday.*

Twice it has pulled a cart out of the river in flood. Once it stood in the current all night with a rope round its waist while the village got a herd across. Nobody pays it. That is precisely the point, and if you suggest otherwise at a meeting you will be [[verbpast1]] out of the hall.

The mill house on the meadow has a [[color1]] door that is eleven feet tall, and a garden that is entirely [[plural2]], and a chimney that smokes on cold mornings.

[[clerk]] is fifty-three now, and still the clerk, and still files everything, and still goes down to the bridge on the first Tuesday of the month with a folding stool and a satchel. They read the minutes together. They argue about drainage. It is, both of them agree, an [[adj2]] way to spend an evening.

And at the top of every agenda in [[village]], where item four used to be, there is now a single line that no clerk since has been willing to remove — because [[clerk]] put it there, and because the word at the end of it is not a word at all, but is what [[troll]] said out loud in the dark under a bridge on the night it found out it could stop:

**ITEM FOUR: ASK. THEN [[verb1]]. THEN [[verb2]]. [[magic]].**

Underneath, in a much later hand, somebody has written the only footnote in four hundred years of village records that anyone actually reads: *and if a thing has been [[verbing1]] alone at its post for a very long time, go down there and tell it the war is over. Somebody has to.*`,
    },
  ],
}
