import type { Tale } from '../types'

export const cinderCrown: Tale = {
  id: 'cinder-crown',
  title: 'The Cinder Crown',
  kicker: 'A princess tale with soot on its hem',
  blurb:
    'A scullery maid, a crown that chooses badly, and a ball that everyone will be talking about for the wrong reasons.',
  sigil: '👑',
  minutes: 6,
  hues: ['#c05a8a', '#3b2a6b'],
  slots: [
    { id: 'hero', kind: 'name', label: "The maid's name" },
    { id: 'kingdom', kind: 'place', label: 'The kingdom' },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    {
      id: 'chore',
      kind: 'verb-ing',
      label: 'Verb ending in -ing',
      hint: 'A miserable palace chore',
    },
    { id: 'animal1', kind: 'animal', hint: "Your hero's only friend" },
    { id: 'noun1', kind: 'noun', hint: 'What the crown is actually made of' },
    { id: 'color1', kind: 'color' },
    { id: 'prince', kind: 'name', label: "The heir's name" },
    { id: 'adj3', kind: 'adjective', hint: 'How the heir behaves at parties' },
    { id: 'food1', kind: 'food', hint: 'Served at the ball' },
    { id: 'verb1', kind: 'verb' },
    { id: 'adv1', kind: 'adverb' },
    { id: 'num1', kind: 'number' },
    { id: 'plural1', kind: 'plural-noun' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'noun2', kind: 'noun', hint: 'Left behind on the stairs' },
    { id: 'verbpast1', kind: 'verb-past' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'sound1', kind: 'sound' },
    { id: 'occupation1', kind: 'occupation', hint: 'What the hero would rather be' },
    { id: 'plural2', kind: 'plural-noun' },
    { id: 'color2', kind: 'color' },
    { id: 'adv2', kind: 'adverb' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'food2', kind: 'food' },
    { id: 'verb2', kind: 'verb' },
  ],
  chapters: [
    {
      title: 'I. The Girl Below the Stairs',
      body: `In [[kingdom]], the crown did not pass from parent to child. The crown *chose*.

Once a generation, on the longest night of the year, the Cinder Crown — a battered, [[adj1]] circle of blackened [[noun1]] that looked like something dredged out of a fireplace, because it was — would rise from its cushion and settle on the head of whoever it judged fit to rule.

It had never once chosen badly. It had also never once chosen anyone who wanted the job.

[[hero]] spent the year before the Choosing three floors below the throne room, [[chore]] from before dawn until well after dark, with cracked hands, a permanent smudge of soot across one cheek, and exactly one friend in the world: a [[animal1]] who lived behind the flour barrels and answered — [[adv1]], and only when it suited them — to the name Pudding.

"I don't want a crown," [[hero]] told Pudding, scrubbing at a pot the size of a bathtub. "I want a workshop. I want to be a [[occupation1]]. I want to sleep past four in the morning even one single time before I die."

Pudding, who had opinions about everything, said nothing at all.

Upstairs, the palace was [[verbpast1]] into a frenzy of preparation. There would be a ball on the longest night. There would be [[num1]] hundred guests, mountains of [[food1]], and an heir apparent named [[prince]] who had never been told *no* in his entire [[adj1]] life.`,
    },
    {
      title: 'II. The Heir Apparent',
      body: `Everyone assumed the Crown would choose [[prince]]. [[prince]] assumed it hardest of all.

He was handsome in the way a polished [[noun1]] is handsome — impressive at a distance, and cold to the touch. He was [[adj3]] at parties. He had a laugh he deployed like a weapon and a habit of describing the servants as *the [[plural1]]*, as though they were furniture that occasionally needed [[chore]].

[[hero]] met him exactly once, on the back stairs, carrying a tray of [[food2]] that outweighed her.

He did not step aside. He watched her struggle past with her [[bodypart]] shaking under the weight, and then he said, [[adv1]], "You've got something on your face."

"Soot, Your Highness."

"Yes," he said. "Try not to get it on the guests."

And that — more than the hunger, more than the hours, more than the winter she had spent sleeping on the hearthstones — was the moment [[hero]] decided she was going to that ball.

Not to be seen. Not to dance. Not for love, and certainly not for [[prince]].

She was going because the Cinder Crown would be in that room, and she had spent her whole life being told what she was worth by people who had never once asked her name, and she wanted — just once, for one [[adj2]] evening — to stand in the light and find out for herself.`,
    },
    {
      title: 'III. The Longest Night',
      body: `She got in through the coal chute. Obviously.

There was no fairy godmother. There was a stolen dress two sizes wrong, altered by lamplight with a needle borrowed from the laundry; there were [[num1]] hours of unpicking somebody else's hem; and there was a small [[animal1]] sitting on the windowsill supervising the entire operation with an air of deep [[adj4]] concern.

The gown, when it was finished, was [[color1]]. It was not fashionable. It was, [[hero]] thought, catching herself in the dark glass of the scullery window, rather [[adj2]].

The ballroom smelled of beeswax and [[food1]]. Nobody stopped her. That was the strange part — nobody stopped her, because nobody in [[kingdom]] had ever imagined that the person carrying the coal and the person wearing silk could possibly be the same person. She walked straight past two guards who had eaten breakfast from her hands that morning, and neither of them so much as blinked.

On its cushion at the centre of the room, under the [[num1]] chandeliers, the Cinder Crown sat waiting.

At midnight the bells began, and the whole room turned, and the crown lifted off its cushion with a soft [[sound1]] — and hung there in the air, [[adv2]], turning like a compass needle looking for north.

[[prince]] stepped forward and tilted his head, ready.

The Cinder Crown went straight past him and settled, still warm with ash, on the head of the scullery maid with soot on her cheek.

"[[exclaim]]" said somebody at the back.

It was, in fact, Pudding.`,
    },
    {
      title: 'IV. What the Crown Was For',
      body: `[[prince]] did not take it well.

He said the word *mistake* [[num1]] times in ninety seconds. He said the crown was broken. He said the girl was a thief, that she had been [[chore]] her way into the palace for years, plotting, and that any court in [[kingdom]] would see it.

And then he reached out and tried to [[verb1]] the Cinder Crown off [[hero]]'s head.

The room went very quiet, because the crown had gone [[color2]] — a deep, [[adj4]] glow, like a coal remembering it used to be a fire — and because [[prince]]'s hand had stopped an inch from it, held there by nothing at all.

"You have to *ask*," said [[hero]].

She was shaking. She was aware, distantly, that she was standing in front of six hundred [[plural2]] in a dress she had made herself, wearing the highest authority in the land, with a smudge of soot she had not managed to scrub off. She kept talking anyway.

"That's what it's for. That's what it's *always* been for. It doesn't pick the strongest, or the cleverest, or the one who wants it most. It picks whoever's spent their life asking people what they need — because that's the only skill this job actually requires, and you have never once in your life had to learn it."

The glow faded. The crown cooled. And [[prince]] — furious, humiliated, and for the first time in his life genuinely uncertain — [[verbpast1]] out of the ballroom without another word.`,
    },
    {
      title: 'V. Two Years Later',
      body: `They still tell it wrong, in the taverns. In the popular version there is a fairy, a pumpkin, and a shoe.

Here is what actually happened.

[[hero]] ruled [[kingdom]] for forty-one years. She kept the scullery job open and filled it herself one day a week, which the court found [[adj1]] and the kitchens found genuinely useful. She abolished the coal chute and put in a proper stair. She built [[num1]] workshops in the lower town and staffed them with anyone who wanted to learn a trade, and she made a point of learning one herself — she was, in the end, an extremely mediocre [[occupation1]], and enormously proud of it.

She never married [[prince]]. He went into shipping. By all accounts he was [[adv2]] good at it, and the two of them managed, eventually, to be almost civil at midwinter dinners.

The [[noun2]] she left on the ballroom stairs that night — dropped in the crush, retrieved by a page, never claimed — sits in a glass case in the great hall to this day. Visitors always ask about it. They want it to be a slipper.

It isn't. It never was.

And every longest night, when the bells ring and the court gathers and some poor terrified soul feels the Cinder Crown lift off its cushion and turn toward them, the whole of [[kingdom]] shouts the same [[adj2]] old word at the ceiling — [[magic]] — and then everyone eats far too much [[food1]] and dances until the sun comes up, which is, if you ask the woman who used to sleep on the hearthstones, exactly what a crown is *for*.

Pudding is buried in the rose garden. There is a small stone. It says, simply: **A [[adj4]] friend, who did not [[verb2]] when it mattered.**`,
    },
  ],
}
