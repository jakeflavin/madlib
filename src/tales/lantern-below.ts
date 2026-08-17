import type { Tale } from '../types'

export const lanternBelow: Tale = {
  id: 'lantern-below',
  title: 'The Lantern Below the Sea',
  kicker: 'A tale of tides and trades',
  blurb:
    'Down where the light gives up, a drowned city keeps its bargains. One diver goes down to break one.',
  minutes: 6,
  tags: ['sea', 'family', 'adventure'],
  accent: '#4FE3C1',
  emblem: 'wave',
  slots: [
    { id: 'hero', kind: 'name', label: "The diver's name" },
    { id: 'port', kind: 'place', label: 'The harbour town' },
    { id: 'sibling', kind: 'name', label: "The sibling's name" },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    {
      id: 'sea-animal',
      kind: 'animal',
      hint: 'It does not have to live in the sea. It will anyway.',
    },
    { id: 'noun1', kind: 'noun', hint: 'What the diver trades away' },
    { id: 'noun2', kind: 'noun', hint: 'What is inside the lantern' },
    { id: 'color1', kind: 'color' },
    { id: 'color2', kind: 'color' },
    { id: 'verb1', kind: 'verb' },
    { id: 'verb2', kind: 'verb' },
    { id: 'verbing1', kind: 'verb-ing' },
    { id: 'verbpast1', kind: 'verb-past' },
    { id: 'adv1', kind: 'adverb' },
    { id: 'adv2', kind: 'adverb' },
    { id: 'num1', kind: 'number' },
    { id: 'food1', kind: 'food' },
    { id: 'plural1', kind: 'plural-noun' },
    { id: 'plural2', kind: 'plural-noun', hint: 'What the drowned city is built from' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word', hint: 'The word that opens the gate' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
    { id: 'warden', kind: 'name', label: "The Tidewarden's name" },
  ],
  chapters: [
    {
      title: 'I. The Rule of the Harbour',
      body: `Everyone in [[port]] learns the rule before they learn to swim: *the sea takes, and the sea trades, but the sea never gives.*

The harbour had grown rich on that rule. Dive to the drowned city, find the Tidewarden, offer something you love — and the sea would hand back whatever you asked for. A good catch. A fair wind. A fever broken in the night.

The price was never money. The price was always something [[adj1]] enough to hurt.

[[hero]] had been diving since she was nine and had never once made a trade. Her mother had made three. Her grandmother, allegedly, had made [[num1]], which explained why the old woman could no longer remember her own name and smiled at the harbour wall as though it were an old friend.

Then, in the spring, [[sibling]] went out on the morning boat and did not come back on the evening one.

They found the boat. They found the nets, the oars, and a single [[noun1]] floating in a slick of [[color1]] water. They did not find [[sibling]].

For [[num1]] days [[hero]] sat on the end of the pier, not eating, not sleeping, refusing every bowl of [[food1]] the neighbours brought, with an old [[sea-animal]] from the fish market sitting beside her because it had decided — [[adv1]], and without consulting anyone — that she should not be alone.

On the eleventh night, she stood up, walked to the boat shed, and started checking her lines.`,
    },
    {
      title: 'II. Down Where the Light Gives Up',
      body: `The descent takes a long time when you do it properly, and [[hero]] did not do it properly.

She went down the anchor chain in the dark, hand over hand, past the depth where the water turns [[color2]] and the pressure sits on your chest like a sleeping [[sea-animal]]. Past the wrecks. Past the [[adj2]] cold that gets into the joints of your [[bodypart]] and stays there for a week.

And then, below all of it, the lights.

The drowned city spread across the seabed for miles — towers and terraces and long curving streets, all of it built from [[plural2]] that glowed faintly from within, so the whole place looked like a lantern somebody had dropped and never bothered to pick up. Shoals of [[adj3]] silver fish moved through the windows the way starlings move through a barn.

At the centre stood the gate. It had no door. It had a word, cut deep into the stone above the arch in letters as tall as [[hero]] herself.

She read it aloud, and the water swallowed her voice and gave it back changed: **[[magic]]**.

The gate opened with a [[sound1]] that she felt in her teeth.

On the other side, seated on a chair grown out of the floor, waiting the way something waits when it has waited for four thousand years and expects to wait longer, was the Tidewarden.`,
    },
    {
      title: 'III. The Tidewarden',
      body: `[[warden]] was not a monster, which was somehow worse.

[[warden]] had a face — kind, tired, [[adj1]] — and hair that drifted like weed, and hands folded in a lap the way a village [[occupation1]] folds their hands before delivering bad news. When [[warden]] spoke, [[hero]] heard it inside her own skull rather than her ears.

*You have come for the boy.*

"I've come for my brother."

*Yes.* A pause. *They are not always the same thing. What have you brought?*

[[hero]] opened her fist. Inside was the [[noun1]] — the one from the slick of [[color1]] water, the one that had been in [[sibling]]'s pocket since they were both small enough to fit in the same bunk.

*That is his,* said [[warden]], [[adv2]]. *It buys nothing. You may only trade what is yours.*

"[[exclaim]]" said [[hero]], which came out as a stream of bubbles.

*You have three things I would take.* [[warden]] lifted one hand and counted them off, [[adv1]], as though reading a shipping ledger. *Your name. Your memory of him. Or your ability to [[verb1]] — which, I should say, you have loved more than anything in your life, including the boy.*

The city glowed. The fish turned. Somewhere far above, [[hero]]'s boat rocked in the swell with nobody in it.

She had known, walking to the boat shed, that it would be something like this. She had thought she was ready.`,
    },
    {
      title: 'IV. The Wrong Question',
      body: `Here is the part the harbour songs leave out.

[[hero]] did not choose. [[hero]] sat down on the glowing floor of a drowned city, put her head in her hands, and asked a question that no diver from [[port]] had thought to ask in four thousand years of [[verbing1]] down here and handing over the things they loved.

"Why do you want them?"

[[warden]] went very still.

*What?*

"The trades. The names, the memories, the — all of it. You've been taking them since before my town existed. You must have a mountain of the stuff by now. What do you *do* with it?"

For a long moment the only sound was the [[sound1]] of the current through the towers.

Then [[warden]] rose, and crossed the hall, and opened a door that [[hero]] had not noticed, and inside was a room the size of a cathedral, filled floor to ceiling with lanterns. Thousands of them. [[num1]] thousand, maybe more, each one holding a small [[color2]] light, each light no bigger than a [[noun2]].

*I keep them,* said [[warden]]. *That is all. I have never once been asked. They come, they give, they leave, and they never ask, and I have kept every single one because it is not mine to spend.*

The Tidewarden's [[adj2]] tired face turned toward her.

*Four thousand years, child. You are the first.*`,
    },
    {
      title: 'V. What the Sea Gave Back',
      body: `They made a different bargain. It took most of the night to hammer out, and both of them, at various points, had to stop and start again.

[[hero]] gave up her ability to [[verb1]] — freely, without haggling, because it had been the price all along and she was not going to pretend otherwise. [[warden]] gave back [[sibling]], who had been asleep in a [[adj3]] chamber under the eastern tower and who woke up complaining, at length, about a crick in his [[bodypart]].

And then [[hero]] made the Tidewarden promise the thing that actually mattered.

The lanterns come up now. [[num1]] a year, on the first calm night of spring, they rise through the dark water and break the surface off [[port]] like [[plural1]] made of light — and the families row out to meet them, and take back a name, a memory, a stolen small [[adj1]] gift their great-grandmother traded away in a bad winter, and they [[verb2]] all the way home with it held against their chests.

The harbour had to learn a new rule, and the old people grumbled about it for years.

*The sea takes, and the sea trades — and the sea gives back, if somebody bothers to ask.*

[[hero]] never dove again. She keeps a shop on the front at [[port]], sells [[food1]] to the boat crews, and is the only person in town who can look out at the [[color2]] water at dusk without any fear at all. Her brother says she is [[adj1]] about it. She says he is welcome to swim home.

And in the room under the sea, the shelves are [[verbing1]] a little emptier every spring, and the Tidewarden — who [[verbpast1]] the first time a family shouted *thank you* up at the moon — has started, [[adv2]], to keep a list of everyone who still needs to be asked.`,
    },
  ],
}
