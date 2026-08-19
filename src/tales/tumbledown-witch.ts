import type { Tale } from '@/types'

export const tumbledownWitch: Tale = {
  id: 'tumbledown-witch',
  title: 'The Witch of Tumbledown Lane',
  kicker: 'A tale of hats and hearsay',
  blurb:
    'Everyone on the lane agrees she is a witch. Nobody on the lane has ever knocked on her door. One kid finally does.',
  minutes: 6,
  tags: ['magic', 'friendship', 'family'],
  accent: '#6FC5C0',
  character: 'witch',
  slots: [
    { id: 'kid', kind: 'name', label: "The child's name" },
    { id: 'witch', kind: 'name', label: "The witch's name" },
    { id: 'town', kind: 'place', label: 'The town' },
    { id: 'adj1', kind: 'adjective', hint: 'What the neighbours call her' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'animal1', kind: 'animal', hint: 'Her supposed familiar' },
    { id: 'animal2', kind: 'animal' },
    { id: 'noun1', kind: 'noun', hint: 'What she is rumoured to keep in the shed' },
    { id: 'noun2', kind: 'noun' },
    { id: 'food1', kind: 'food', hint: 'What her house actually smells of' },
    { id: 'food2', kind: 'food' },
    { id: 'verb1', kind: 'verb' },
    { id: 'verb2', kind: 'verb' },
    { id: 'verbing1', kind: 'verb-ing' },
    { id: 'verbpast1', kind: 'verb-past' },
    { id: 'adv1', kind: 'adverb' },
    { id: 'adv2', kind: 'adverb' },
    { id: 'num1', kind: 'number' },
    { id: 'plural1', kind: 'plural-noun' },
    { id: 'plural2', kind: 'plural-noun' },
    { id: 'color1', kind: 'color' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'occupation1', kind: 'occupation' },
  ],
  chapters: [
    {
      title: 'I. What Everyone Knew',
      body: `Everyone in [[town]] knew about the house at the end of Tumbledown Lane.

They knew a [[adj1]] old woman lived there. They knew she never came to market and never came to church and had never once, in living memory, said good morning to anybody. They knew she kept a [[animal1]] that watched the road, and a shed full of [[noun1]], and that on certain nights her chimney put out smoke the colour of [[color1]].

They knew all of this the way a town knows things: from each other, at length, and without ever once checking.

[[kid]] was nine, and had heard the story [[num1]] hundred times, and had reached the age where a story you have heard that often starts to develop holes.

"But has anyone *been* there?" [[kid]] asked at supper.

"Absolutely not," said [[kid]]'s father, [[adv1]] buttering bread.

"Then how do we know about the shed?"

There was a pause of the particular kind that happens when a nine-year-old asks the one question nobody has bothered with.

"Eat your [[food2]]," said [[kid]]'s father.

So on Saturday, with the specific courage of a person who has been told to eat their [[food2]] instead of receiving an answer, [[kid]] walked to the end of Tumbledown Lane and knocked on the [[adj2]] green door.

It opened immediately, which was the most frightening thing that had ever happened.`,
    },
    {
      title: 'II. The Inside of the House',
      body: `"[[exclaim]]" said the old woman. "A customer. Finally. Wipe your feet."

The house did not smell of anything wicked. The house smelled overwhelmingly of [[food1]], because there were [[num1]] trays of it cooling on every flat surface, and because the oven was clearly the most-used object in the building.

The [[animal1]] on the windowsill opened one eye, decided [[kid]] was not interesting, and went back to sleep.

"You're [[witch]]," said [[kid]].

"I am."

"Everyone says you're a witch."

"I am that too," said [[witch]], [[adv2]] moving a tray. "Don't look so [[adj3]]. It's a job, not a personality. Sit down, you're blocking the light."

[[kid]] sat. There was a chair, which had a cushion, which had been embroidered by somebody with a great deal of patience and not very much skill.

"What do witches actually do?"

"This," said [[witch]], gesturing at the trays. "Mostly this. People in this town have been leaving requests under that rock by my gate for forty-one years. A sick child. A bad back. A cow that won't calve. I make what they need, I put it under the rock at night, and in the morning it's gone and a coin is there instead, and nobody has to admit to anybody that they came."

She said it without any bitterness at all, which somehow made it much worse.

"Forty-one years?"

"Forty-one years."

"And nobody knocks?"

"You knocked," said [[witch]], and put a plate of [[food1]] in front of [[kid]], and turned away rather quickly to deal with something at the stove that did not need dealing with.`,
    },
    {
      title: 'III. The Shed',
      body: `[[kid]] came back on Sunday. And Tuesday. And most days after that.

There was, it turned out, a great deal to learn. How to tell one dried leaf from another by smell alone. Why you never pick anything on the third day of rain. What the difference is between a remedy and a wish, and why [[witch]] would only ever sell the first one.

"A wish is a thing you want somebody else to do for you," she said, [[verbing1]] a bundle of stalks. "A remedy is a thing you do yourself with help. I am help. I am not a shortcut, and anyone who tells you otherwise is either lying or selling something."

They got to the shed in the second month.

[[kid]] had built it up so much that the truth was almost disappointing: no cauldron, no bones, no [[noun1]] at all. Just shelves, and jars, and a workbench, and — filling one entire wall, floor to ceiling — paper.

Letters. Thousands of them. Bundled by year, tied with string.

"Every request," said [[witch]]. "Every single one, since I started. I keep them because somebody ought to. There are people in this town who have written to me eleven times and crossed the road when they saw me coming, and that is fine, and I am not angry, and I still know what their handwriting looks like."

[[kid]] read one at random. It was from a [[occupation1]] on the north end, asking, in badly spelled desperation, for something to help a daughter sleep.

It was dated the year [[kid]] was born.

"That's my mother's writing," said [[kid]].`,
    },
    {
      title: 'IV. The Night the Lane Came Down',
      body: `The trouble arrived in autumn, as trouble does, and it arrived in the shape of a rumour.

A child on the east side fell ill — properly ill, the kind that empties a house of sleep — and somebody said the word *witch*, and somebody else agreed, and by the second night there were [[plural1]] and torches at the bottom of Tumbledown Lane and a noise like a [[sound1]] coming off the crowd.

[[witch]] watched from the window with her arms folded and did not look remotely surprised.

"It happens about every fifteen years," she said. "Go out the back."

"No," said [[kid]].

"Don't be [[adj4]]—"

"*No.*"

And [[kid]] went out the front door instead, and stood on the step of the [[adj2]] green house in front of a crowd that included two teachers, a baker, an uncle, and both parents, and said the following, at a volume that surprised everybody including [[kid]]:

"She made the thing that fixed my mother's sleep the year I was born. It's in a letter in her shed. There's one in there from nearly all of you. She's been leaving medicine under a rock for forty-one years because none of you will [[verb1]] up this lane in daylight, and now you're here with torches, and I would like *somebody* to explain that to me, because I'm nine and it doesn't make any sense."

The crowd did what crowds do when a child says something true out loud in a clear voice. It got very quiet, and then it got very interested in its own boots, and then — slowly, in ones and twos, without anybody quite giving the order — it [[verbpast1]] back down the lane.

The baker was last. He stood at the gate a long moment, and then said, to nobody in particular, "It was for my back. Nineteen years ago. Worked, and all."

And he went home.`,
    },
    {
      title: 'V. Tumbledown Lane, Now',
      body: `The sick child recovered, incidentally. It was a fever, and it broke on the fourth day, and it had nothing to do with anybody.

But something else in [[town]] broke that week too, and did not mend the same way it had been before.

People started knocking. Not all at once — [[town]] is not that sort of place — but one at a time, awkwardly, usually with a [[noun2]] held out in front of them like a shield, saying things like "I was passing" and "no rush, of course." [[witch]] made them all sit in the embroidered chair. She was rude to every single one of them. They kept coming.

The rock by the gate is still there. Nobody uses it now, which [[witch]] claims is a great inconvenience, since she now has to make conversation, and she is seventy-eight and has no talent for it whatsoever.

[[kid]] is twenty-three and has the shed.

The letters are still on the wall — all of them, still tied by year — and there is a new bundle now, started the winter after the torches, and this one is not requests. This one is thank-yous. It is thinner than the others. It is growing.

They still argue about the [[animal1]], who is fifteen and enormous and has never done a magical thing in its life, but who sits on the gatepost every morning watching the lane with the air of something that has seen a [[animal2]] or two in its time and was not impressed by either.

And the word carved into the doorstep — put there by [[kid]], badly, with a chisel, on a night when [[witch]] was asleep — says **[[magic]]**, which means nothing at all in any language, and which [[witch]] pretended to be furious about for a fortnight, and which she has [[adv1]] refused to let anybody sand off since.

The trays of [[food1]] still come out of that oven every morning. There are always [[plural2]] on the counter for anyone who turns up. And the green door, which was shut for forty-one years, now spends most of the day propped open with a [[noun2]] — because, as [[witch]] puts it, [[adv2]] and with enormous satisfaction, you never know who's finally going to [[verb2]] up the lane.`,
    },
  ],
}
