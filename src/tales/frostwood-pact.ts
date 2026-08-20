import type { Tale } from '@/types'

export const frostwoodPact: Tale = {
  id: 'frostwood-pact',
  title: 'The Frostwood Pact',
  kicker: 'A tale of winter and sisters',
  blurb:
    'The forest has been asleep for nine years. Two sisters go in to wake it, and only one of them wants to.',
  minutes: 6,
  tags: ['enchantments'],
  accent: '#8FC7E8',
  character: 'tree',
  slots: [
    { id: 'elder', kind: 'name', label: 'The older sister' },
    { id: 'younger', kind: 'name', label: 'The younger sister' },
    { id: 'town', kind: 'place', label: 'The town at the forest edge' },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'animal1', kind: 'animal', hint: 'It talks. Of course it talks.' },
    { id: 'noun1', kind: 'noun', hint: 'What the pact was sealed with' },
    { id: 'noun2', kind: 'noun' },
    { id: 'color1', kind: 'color' },
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
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
  ],
  chapters: [
    {
      title: 'I. Nine Years of Snow',
      body: `It had been winter in [[town]] for nine years.

Not a hard winter — a *stopped* one. The same [[num1]] inches of snow on the same rooftops. The same [[color1]] sky. The same frozen apples hanging on the same trees, never falling, never rotting, [[adj1]] and perfect and completely inedible.

The town had adapted, the way towns do. They ate stored [[food1]] and traded for [[food2]] from the valleys. They stopped counting birthdays because it felt like lying. They took down the calendar in the town hall and put up a painting of a [[animal1]] instead, which everyone agreed was less depressing.

And they did not, under any circumstances, go into the Frostwood.

[[elder]] was seventeen when the snow started and twenty-six now, though she did not look it, and that was one of the several things nobody in [[town]] said out loud. [[younger]] had been eight. [[younger]] was still eight — still small, still furious, still wearing the same [[adj2]] wool coat with the torn [[bodypart]] of one sleeve — and had spent nine years watching her older sister lie about why.

"You know," [[younger]] said, one morning that was identical to every other morning. "You've always known. You go out to the tree line every single week and you come back with your boots wet and you tell me you were at the [[occupation1]]'s."

[[elder]] put down her cup, [[adv1]].

"Get your boots," she said. "It's time you saw it."`,
    },
    {
      title: 'II. What Was Under the Snow',
      body: `The Frostwood did not look asleep. That was the first surprise.

It looked *held* — every branch bent under the same weight of ice, every needle furred with frost, and between the trunks a light like the inside of a [[color1]] lantern. Nothing moved. There was no wind. When [[younger]] stamped her foot, the [[sound1]] came back off the trees a half-second late, as though the forest had to think about it first.

They walked for an hour. [[elder]] knew the way without looking.

"Nine years ago," she said, "there was a fire coming up the eastern ridge. The whole valley. It would have taken [[town]] in a night — the mill, the granary, the [[plural1]], all of it, everyone still asleep in their beds."

"I know. I was there. I remember the smoke."

"You remember the smoke stopping."

[[younger]] stopped walking.

"Someone made a pact," [[elder]] said. "With the thing that lives at the middle of this wood. Fire can't cross a forest that's stopped. So the forest stopped — and it took the season with it, and it took a price, and the price was a [[noun1]] freely given by whoever asked."

"What [[noun1]]?"

[[elder]] did not answer. She just kept [[verbing1]] deeper between the trees, and after a moment [[younger]] followed her, and the [[adj3]] cold went into their bones, and up ahead something that was not a tree began, [[adv2]], to turn its head.`,
    },
    {
      title: 'III. The Thing at the Middle',
      body: `It was shaped, more or less, like an enormous [[animal1]] made out of the parts of a forest — antlers of bare branch, a spine of drifted snow, eyes like two holes cut in a [[adj4]] sky.

It knew [[elder]]. That much was obvious immediately.

*You have brought the child,* it said, and its voice was every branch in the wood creaking at once.

"[[exclaim]]" said [[younger]].

"She's not a child," said [[elder]]. "She's seventeen years old and she's been eight for nine of them, because *you* stopped the clock, and I've come to end it."

*The pact holds until the price is paid. You know the price.*

"I've always known the price."

[[younger]] looked between them — the great [[adj1]] shape in the snow and her sister standing in front of it with her chin up, [[adv1]], the way she used to stand between [[younger]] and their father on the bad nights.

And [[younger]], who was not stupid, and who had had nine unmoving years to get very good at arithmetic, said: "It was you. You made the pact. And the price wasn't a [[noun1]] at all, was it."

[[elder]] closed her eyes.

*The price,* said the thing in the wood, almost gently, *was that she would be the only one who kept growing. She asked me to stop the fire. I stopped the world. Someone must remain outside a stopped world to remember there was one — and she volunteered, and she has been [[verbing1]] out here alone every week for nine years to keep the bargain warm.*`,
    },
    {
      title: 'IV. The Argument in the Snow',
      body: `They had it out right there, in front of a god made of branches, at a volume that brought snow down off the boughs for a hundred yards in every direction.

[[younger]] said that nobody had asked her. [[elder]] said there had been no time to ask, that the fire was four miles out and [[verbing1]] closer, that the whole town would have been ash by morning.

[[younger]] said that was not the part she was angry about.

"You were seventeen," she said. "You let it take *nine years of your life* and then you came home and washed the dishes and told me you'd been at the [[occupation1]]'s. Every week. For nine years. You didn't let me carry any of it."

"You were eight."

"I have been eight for a *very long time*, and you have been alone for exactly as long, and those are the same [[adj3]] problem, and you never once let me [[verb1]] beside you."

And [[elder]] — who had held the line at the tree edge for nine years without cracking, through cold and dark and the awful [[adj2]] loneliness of being the only person in the world who was aging — finally, [[adv2]], sat down in the snow and [[verbpast1]].

The thing in the wood watched this with what may, possibly, have been enormous patience.

*A pact,* it observed, *may be renegotiated. If both parties are present.*

Two heads came up at once.

"Both," said [[younger]]. "There are two of us. There have always been two of us. That's the whole point."`,
    },
    {
      title: 'V. Thaw',
      body: `It cost them something. These things always do.

They gave it the [[noun2]] their mother had left them — the only thing of hers that survived — and they gave it the word, the real one, the one [[elder]] had shouted at the fire nine years ago and never said again: **[[magic]]**. And they gave it a promise, which is the only currency that thing has ever actually wanted: that one of them would come back into the wood, every year, on the shortest night, and simply sit with it and talk, because four thousand winters is a long time to be a forest by yourself.

Then the snow began to fall.

Not settle — *fall*. Moving snow, for the first time in nine years, and under it a sound like the whole world clearing its throat: ice cracking off ten thousand branches at once, a [[sound1]] so [[adj4]] that in [[town]], four miles off, every single person came out into the street in their nightclothes to see.

The apples fell. All of them, all at once, [[num1]] years of frozen fruit coming down through the trees like [[plural2]] on a tin roof, and by the time the sisters walked out of the tree line the whole town was standing there in the dark, [[adv1]] laughing, catching them.

[[younger]] turned nine that spring. She was [[adj1]] about it for weeks and made everyone say her age out loud.

The forest gives them a hard winter now, every year — a real one, with wind that gets into your [[bodypart]] and snow you have to [[verb2]] your way through. Nobody in [[town]] complains. On the shortest night they bake [[food2]], and two sisters walk out to the tree line together, and the whole town watches them go and waits up until they come back.`,
    },
  ],
}
