import type { Tale } from '../types'

export const cloudCartographer: Tale = {
  id: 'cloud-cartographer',
  title: 'The Cartographer of Clouds',
  kicker: 'A tale of sky islands and bad maps',
  blurb:
    'The sky islands are drifting apart, the charts are all wrong, and the only person who noticed is nineteen and nobody important.',
  minutes: 6,
  tags: ['sky', 'adventure', 'friendship'],
  accent: '#B9A7DC',
  character: 'castle',
  slots: [
    { id: 'hero', kind: 'name', label: "The mapmaker's name" },
    { id: 'island', kind: 'place', label: 'The home island' },
    { id: 'captain', kind: 'name', label: "The airship captain's name" },
    { id: 'ship', kind: 'noun', label: 'Noun', hint: 'The airship is named after this' },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'animal1', kind: 'animal', hint: 'It is enormous and it swims through the air' },
    { id: 'animal2', kind: 'animal', hint: "The ship's mascot" },
    { id: 'noun1', kind: 'noun', hint: 'The instrument nobody else can read' },
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
    { id: 'plural2', kind: 'plural-noun' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
  ],
  chapters: [
    {
      title: 'I. The Islands Are Moving',
      body: `Nobody argues that the sky islands drift. That is simply how the world works: [[num1]] hundred chunks of rock and forest and cathedral, hanging in the blue, sliding [[adv1]] past each other on currents that the Guild has charted for four centuries.

The argument was about *how fast*.

[[hero]] was nineteen, worked in the map cellars of [[island]] for a wage that would embarrass a [[occupation1]], and had spent two years doing something no apprentice was supposed to do: checking the old charts against the sky.

The results were [[adj1]]. They were also unambiguous.

"They're separating," [[hero]] told the Guild board, standing on a stool because the lectern was too tall, holding up a [[noun1]] that only about four people alive could actually read. "Not drifting — *separating*. Every island is moving away from every other island, and the rate is increasing. In eleven years [[island]] will be out of range of every trade route on this chart. In twenty we won't be able to see another island at all."

The board thanked [[hero]] for the presentation.

The board noted that the [[noun1]] was an antique of uncertain calibration.

The board suggested — [[adv2]], and with great politeness — that a junior apprentice might focus on lettering practice, and then the board went to lunch, where there was a great deal of very good [[food1]] and no further discussion of the end of the world.`,
    },
    {
      title: 'II. The Airship at the Bottom of the Yard',
      body: `You cannot prove the sky is coming apart from a cellar. You have to go out to the edge and measure it.

Nobody in the Guild would fly [[hero]] to the edge. So [[hero]] went down to the scrapyard docks, where the ships that could not pass inspection were tethered, and found the [[ship]].

She was [[adj2]]. Her envelope had been patched [[num1]] times in three different colours, mostly [[color1]]. Her mascot — a fat, ill-tempered [[animal2]] with strong opinions about strangers — was asleep on the wheel. And her captain, [[captain]], listened to the whole pitch from a hammock without opening both eyes.

"So you want me to fly you past the last charted island," said [[captain]], "into a region my grandmother described as *deeply inadvisable*, so you can wave an antique [[noun1]] at the horizon and prove the Guild wrong."

"Yes."

"With no money."

"...Yes."

[[captain]] sat up. "[[exclaim]] Finally. Something interesting."

They cast off at dawn, which is the traditional time for making an enormous mistake, and the [[ship]] rose through the morning [[color2]] haze with her patched envelope groaning and her mascot [[verbing1]] furiously at the receding dock.`,
    },
    {
      title: 'III. The Skywhale Road',
      body: `Three days out, past the last island anyone had bothered to name, they found the reason the charts were wrong.

It began as a shadow under the cloud deck — vast, slow, moving against the wind. Then it surfaced, and the entire crew of the [[ship]] went silent at once.

An [[animal1]], if an [[animal1]] were four hundred feet long and made largely of light. It rolled through the cloud with a [[sound1]] so low that [[hero]] felt it in the bones of their [[bodypart]] rather than heard it, and behind it came another, and another, until there were [[num1]] of them, moving in a slow [[adj3]] procession toward the deep sky.

"Migration," said [[captain]], very quietly. "My grandmother saw this once. Nobody believed her either."

And [[hero]] — who had spent two years being told that the numbers were an error — pulled out the [[noun1]], took a reading, took another, and started laughing in a way that worried everyone on deck.

"It's *them*," they said. "They aren't following the currents. They *are* the currents. The islands don't drift on wind, they drift on whatever these things leave behind — and the herd is leaving. Look at the heading. They've been turning for a decade. The islands are following them out."

"Following them where?"

[[hero]] looked up from the instrument, and the answer was written all over their face, [[adj1]] and cold: "Apart. They're following them apart."`,
    },
    {
      title: 'IV. What You Do With a True Map',
      body: `Getting home was the hard part. It always is.

They lost the aft engine on the fourth night. They lost most of the [[food1]] to a leak, and after that it was ship's biscuit and [[plural1]] scavenged from a supply cache that had been abandoned since before [[captain]] was born. On the seventh day the [[animal2]] ate the last of the ration book and then [[verbpast1]] in the galley, which [[captain]] declared, [[adv1]], to be an act of piracy.

But [[hero]] mapped the whole way back.

Every reading. Every heading. Every one of the [[num1]] great drifting shapes and the wake each one left in the sky. By the time [[island]] came up over the horizon — smaller, [[hero]] noted grimly, than it should have been — there were forty pages of the truest chart anyone had made in four hundred years, and the only remaining question was what to do with it.

"The Guild will bury it," said [[captain]]. "You know they will. They'll thank you, they'll file it, and in eleven years they'll be very surprised."

"I know."

"So?"

So [[hero]] did not take the chart to the Guild.

[[hero]] took it to the printers on the dock road, and spent every coin the crew had left, and by the following week there were two thousand copies of *The True Drift of the Sky Islands* nailed to every harbour post, tavern wall and school door from [[island]] to the far reach — free, unsigned, and impossible to bury.

You cannot [[verb2]] a fact that two thousand people are already holding in their hands.`,
    },
    {
      title: 'V. The Long Rope',
      body: `The Guild was [[adj2]] about it for approximately six weeks, which is how long it took every other cartographer in the sky to check the numbers and find them correct.

After that, things moved quickly.

They call it the Long Rope now: [[num1]] hundred miles of cable, anchor and living bridge, spun island to island over eleven years by more people than any history book can list — dockhands, [[plural2]], schoolchildren, retired [[occupation1]]s, three rival nations and one extremely reluctant Guild board. It does not stop the drift. Nothing stops the drift. It simply means that when the islands go, they go *together*, tethered in a great slow constellation that will still be one world in a thousand years.

[[hero]] never took the Guild seat they were offered. [[hero]] flew, instead — on the [[ship]], patched now in four colours instead of three, with [[captain]] in the hammock and the [[animal2]] asleep on the wheel — out along the herd road every spring, [[verbing1]] alongside the great [[color1]] shapes, keeping the chart current.

They say the crew shouts something at the herd when they pass. Some old bit of dockyard nonsense. It sounds like **[[magic]]**, and it means, roughly: *we saw you, we are still here, do not [[verb1]] too far ahead of us*.

And every year the [[animal1]]s roll over in the cloud and answer with that low [[adj3]] [[sound1]] that you feel instead of hear — which the crew of the [[ship]] have always chosen to interpret, [[adv2]], as *keep up*.`,
    },
  ],
}
