import type { Tale } from '@/types'

export const wanderingTeahouse: Tale = {
  id: 'wandering-teahouse',
  title: 'The Wandering Teahouse',
  kicker: 'A tale of spirits and second helpings',
  blurb:
    'It appears at the crossroads for one night a year. The rule is simple: everyone gets fed, and nobody asks what anybody is.',
  minutes: 7,
  tags: ['enchantments', 'creatures'],
  accent: '#F2A0BE',
  character: 'fairy',
  slots: [
    { id: 'hero', kind: 'name', label: "The new cook's name" },
    { id: 'village', kind: 'place', label: 'The nearest village' },
    { id: 'owner', kind: 'name', label: "The teahouse owner's name" },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'animal1', kind: 'animal', hint: 'The spirit who arrives first' },
    { id: 'animal2', kind: 'animal' },
    { id: 'food1', kind: 'food', hint: 'The house speciality' },
    { id: 'food2', kind: 'food' },
    { id: 'food3', kind: 'food', hint: 'What the hero cooks at the end' },
    { id: 'noun1', kind: 'noun', hint: 'What hangs above the door' },
    { id: 'noun2', kind: 'noun' },
    { id: 'color1', kind: 'color' },
    { id: 'verb1', kind: 'verb' },
    { id: 'verb2', kind: 'verb' },
    { id: 'verbing1', kind: 'verb-ing' },
    { id: 'verbpast1', kind: 'verb-past' },
    { id: 'adv1', kind: 'adverb' },
    { id: 'adv2', kind: 'adverb' },
    { id: 'num1', kind: 'number' },
    { id: 'plural1', kind: 'plural-noun' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word', hint: 'Written on the paper lantern' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
  ],
  chapters: [
    {
      title: 'I. One Night a Year',
      body: `The teahouse comes to the crossroads outside [[village]] on the last night of autumn, and it has done so for longer than the village has had a name.

You can miss it. Most people do. It sits in the fold of the road where the lantern light bends, and if you are not looking for the [[noun1]] hanging above its door — [[color1]], swinging in a wind that isn't there — you will walk straight past and get home and never know.

[[hero]] was not looking for it. [[hero]] was seventeen, freshly and [[adv1]] sacked from an apprenticeship with the village [[occupation1]], and walking home in the dark composing an explanation for their mother that got worse every time they rehearsed it.

Then: warm light, the smell of [[food1]], and a small [[adj1]] woman in the doorway saying, "You're late."

"I'm sorry?"

"You're the new cook. You're late." She looked [[hero]] up and down. "You can cook, I assume?"

"I— a bit. My grandmother taught me. I'm not—"

"Excellent." She was already walking back inside. "I'm [[owner]]. There are three rules. One: everybody who comes in gets fed. Two: nobody asks what anybody *is*. Three—" she paused at the kitchen door, and something in her face went briefly, [[adj2]] serious "—when the bell rings at midnight, you do not go outside. Aprons are on the hook. We open in ten minutes."

[[hero]] should have run. [[hero]] put on the apron.`,
    },
    {
      title: 'II. The Guests',
      body: `The first customer came in at dusk and was, unmistakably, a [[animal1]].

Not a person dressed as one. A [[animal1]] — [[num1]] feet tall, wearing a travelling coat, and folding itself into a booth with the weary sigh of somebody who has walked a very long way. It ordered [[food2]] and a pot of tea and read a newspaper in a language made entirely of spirals.

"Rule two," said [[owner]], not looking up from the stove.

"I didn't say anything!"

"You were *thinking* loudly."

After that they came all night. A woman made of river water who left wet rings on every table. A pair of [[plural1]] that argued about the bill for an hour. Something in the corner booth that [[hero]] never once managed to look at directly — the eye slid off it, [[adv1]], like a hand off wet glass — and which ate three bowls of [[food1]] and tipped extravagantly.

And [[hero]] cooked. [[hero]] cooked until their [[bodypart]] ached, until the [[adj3]] steam had soaked through the apron, and somewhere around the fourth hour discovered a thing that they would spend the rest of their life being quietly [[adj4]] about: they were *good at this*.

"Where do they all come from?" [[hero]] asked, [[verbing1]] at the sink.

[[owner]] was quiet for a moment. "Nowhere, mostly. That's rather the point. There is nowhere in the world that will serve most of them. So one night a year, there is here."`,
    },
    {
      title: 'III. The Bell at Midnight',
      body: `The bell rang at midnight.

The whole room stopped. The newspaper of spirals lowered. The river-woman went still, and the thing in the corner booth made a small unhappy [[sound1]] and slid further into shadow.

Outside, someone was knocking.

"Rule three," said [[owner]], and her voice had gone completely flat. "Nobody moves."

The knocking went on. And then, through the door, a voice — a child's voice, thin and cold and [[adj1]] — said: *"Please. I'm so hungry."*

[[hero]] took one step toward the door and found [[owner]]'s hand locked around their wrist like a manacle.

"It is not a child."

"You don't know that—"

"I have known it for two hundred and forty years." [[owner]]'s grip did not loosen. "It comes every year. It has taken [[num1]] cooks off my staff by sounding exactly like that. It is not hungry. It is not a child. It is a thing that learned what we can't refuse and *wears it*."

"[[exclaim]]" said [[hero]], because the knocking had stopped, and now there was breathing at the crack under the door, and it did not sound like a child at all.

They waited. The clock crawled. And at last, [[adv2]], the thing outside went away down the road, and the whole teahouse let out a breath as one, and the [[animal1]] raised its newspaper again with hands that shook.`,
    },
    {
      title: 'IV. Rule One',
      body: `[[hero]] worked the teahouse for six years.

Six single nights, spread across six autumns, and between them a life: a market stall in [[village]], a reputation, a small warm shop with [[num1]] tables, a battered [[noun2]] over the counter for luck, and a queue out the door on market day. But it was the crossroads nights that [[hero]] lived for, and it was [[owner]] who taught them everything — the knife work, the timing, the trick of getting a [[animal2]] to admit what it actually wants to eat rather than what it thinks it should order.

And every year, at midnight, the bell. And every year, the voice at the door.

In the seventh year, [[hero]] came to the crossroads and found [[owner]] sitting on the step, looking older than she had ever looked, with the [[color1]] [[noun1]] unlit above her.

"I'm finished," she said. "Two hundred and forty-seven years is enough. The house needs someone. It won't come back without a cook."

"Then I'll cook."

"You'll cook *alone*. Do you understand? Rules one, two and three, and the third one is the only one that has ever mattered—"

"I've been thinking about rule three," said [[hero]], sitting down beside her on the step. "It contradicts rule one."

[[owner]] turned and stared.

"*Everybody who comes in gets fed*," said [[hero]]. "That's rule one. It's the first rule for a reason. And for two hundred and forty-seven years there has been one thing standing outside your door on the coldest night of the year, and every single year you have refused to feed it, and every single year it has come back. Doesn't that strike you as—"

"It is a *monster*."

"It's a monster that has never once come in through a window," said [[hero]]. "It knocks. Two hundred and forty-seven times, it has *knocked*."`,
    },
    {
      title: 'V. What Was Actually at the Door',
      body: `[[hero]] cooked all that night with one pot kept back on the corner of the stove.

Not [[food1]] — that was the house dish, and this needed to be something else. Something that took hours. [[food3]], made the long way, the way [[hero]]'s grandmother had made it on the nights when nobody in the house had anything else to give.

At midnight the bell rang. The room froze. The knocking came, and the thin cold voice said *please, I'm so hungry*, and every guest in the teahouse turned to look at the new cook standing behind the counter with a bowl in both hands.

[[owner]], from the corner booth, said [[hero]]'s name once, [[adv1]].

[[hero]] opened the door.

There was nothing there that looked like a child. There was a shape — [[adj3]], and wrong, and difficult to hold in the eye, the way a word is difficult to hold when you have repeated it too many times — and it filled the whole doorway, and it had been waiting out there in the dark for two hundred and forty-seven years.

[[hero]] put the bowl down on the step and did not [[verb1]] and did not look away.

"It's [[food3]]," [[hero]] said. "It's hot. There's more inside if you want it, and there's a booth free, and nobody in here is going to ask you what you are. That's rule two. We're quite strict about it."

The shape in the doorway did not move for a very long time.

Then it made a sound that no one in the teahouse ever agreed on afterwards — the [[animal1]] said it was a [[sound1]], the river-woman insisted it was weeping — and it [[verbpast1]], slowly, down onto the step. And it picked up the bowl in something like hands. And it ate.

It comes in now. It sits in the second booth from the door, where it can see the road, and it never orders anything but [[food3]], and it has never once told anybody its name.

The teahouse still travels. It still finds the fold in the lantern light outside [[village]] on the last night of autumn, and the [[color1]] [[noun1]] above the door still swings in a wind that isn't there, and if you look closely you can see the word painted on it — **[[magic]]** — which [[owner]] always claimed meant nothing at all and which [[hero]], who is [[adj2]] and grey now and still working the stove, will tell you means something much simpler.

*Come in. Sit anywhere. Everybody eats.*

There is a fourth rule these days, added in [[hero]]'s hand beneath the other three, and it is the one the staff are told to [[verb2]] by above all others: **the thing at the door is somebody's guest too.**`,
    },
  ],
}
