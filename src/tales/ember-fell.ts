import type { Tale } from '../types'

export const emberFell: Tale = {
  id: 'ember-fell',
  title: 'The Dragon of Ember Fell',
  kicker: 'A tale of wings and stubbornness',
  blurb:
    'Every village needs a dragon slayer. Ember Fell got an apprentice with a bucket, a bad plan and a very large problem in the ravine.',
  minutes: 6,
  tags: ['dragons', 'friendship', 'adventure'],
  accent: '#FF8A4C',
  emblem: 'flame',
  slots: [
    { id: 'hero', kind: 'name', label: "Your hero's name" },
    {
      id: 'village',
      kind: 'place',
      label: 'The village name',
      hint: 'Somewhere windswept and small',
    },
    { id: 'adj1', kind: 'adjective', hint: 'How the grown-ups describe your hero' },
    { id: 'job', kind: 'occupation', hint: 'The family trade your hero is supposed to inherit' },
    { id: 'creature', kind: 'animal' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'noun1', kind: 'noun', hint: 'Whatever your hero carries everywhere' },
    { id: 'verb1', kind: 'verb' },
    { id: 'adv1', kind: 'adverb' },
    { id: 'color1', kind: 'color', hint: "The dragon's scales" },
    { id: 'food1', kind: 'food', hint: 'The pride of the village kitchen' },
    { id: 'num1', kind: 'number' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'dragonname', kind: 'name', label: "The dragon's name" },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'plural1', kind: 'plural-noun' },
    { id: 'verbing1', kind: 'verb-ing' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'verbpast1', kind: 'verb-past' },
    { id: 'noun2', kind: 'noun' },
    { id: 'color2', kind: 'color' },
    { id: 'verb2', kind: 'verb' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'plural2', kind: 'plural-noun' },
    { id: 'food2', kind: 'food' },
    { id: 'magic', kind: 'magic-word', hint: 'The word carved into the old stone' },
    { id: 'adv2', kind: 'adverb' },
  ],
  chapters: [
    {
      title: 'I. The Apprentice Nobody Chose',
      body: `The village of [[village]] clung to the side of a cliff like a barnacle that had made a poor decision, and everyone in it agreed on exactly one thing: [[hero]] was the most [[adj1]] child ever born there.

It was not meant as a compliment. [[hero]] was supposed to become a [[job]], like every [[hero]] before them, and instead spent whole afternoons at the cliff's edge with a [[noun1]] in hand, watching the clouds and forgetting to come home for supper.

"You'll never [[verb1]] your way out of trouble," said Old Marrow, the village elder, [[adv1]] tapping the ground with her cane. "Trouble is [[adj2]], and you are small."

But [[hero]] had seen something the elders refused to discuss. Three nights running, a shape had crossed the moon — [[num1]] times the size of the granary roof, with wings the colour of [[color1]] and a shadow that swallowed the whole square. Each morning the sheep pens stood empty, and each morning the elders declared it the work of a very determined [[creature]].

"A [[creature]]," [[hero]] repeated, "that ate the gate. And the fence. And Bartlett's entire cart of [[food1]]."

Old Marrow did not answer. She only looked at the ravine below the village, where the fog never lifted, and where nobody had gone in living memory.

That night, [[hero]] packed the [[noun1]], a lantern, and enough [[food1]] to feed a small army, and went down into the fog alone.`,
    },
    {
      title: 'II. What Waited in the Fog',
      body: `The ravine smelled of hot stone and old smoke. Every few paces, [[hero]] heard a low [[sound1]] echo off the walls, the way a thundercloud might clear its throat.

Then the fog opened, and there it was.

The dragon lay curled against the rock face, vast and gleaming and unmistakably [[adj2]], its scales the exact [[color1]] of the shape that had crossed the moon. One enormous wing was folded wrong, pinned beneath a slab of fallen cliff. Its eyes — each the size of a cartwheel — opened slowly.

"[[exclaim]]" said [[hero]], which was not the heroic speech they had rehearsed on the way down.

The dragon exhaled. The gust knocked [[hero]] flat, sent the lantern [[verbing1]] across the stones, and scattered the [[food1]] everywhere.

And then the dragon did something no story in [[village]] had prepared anyone for. It sniffed the scattered [[food1]]. It ate a piece. And its enormous tail thumped the ground [[adv1]], like an extremely large and extremely [[adj3]] dog.

[[hero]] sat up very slowly. "You're not eating the sheep because you're cruel," they said. "You're eating the sheep because you're stuck. And starving."

The dragon made a small, embarrassed noise, and looked away.

"Right," said [[hero]], standing, brushing off their knees, and picking up the [[noun1]] with the grim confidence of someone with absolutely no plan. "I'm going to [[verb1]] you out of there. Hold still."`,
    },
    {
      title: 'III. A Very Bad Plan, Executed Beautifully',
      body: `It took [[num1]] days.

[[hero]] came down every dawn with rope, a stolen crowbar and armfuls of [[food2]]. They wedged the [[noun1]] beneath the slab and leaned on it until their [[bodypart]] ached. They hauled. They begged. They said several words that Old Marrow would have washed their mouth out for.

The dragon, for its part, learned patience. It learned to lower its head so [[hero]] could reach the pinned wing. It learned that when [[hero]] said "brace," it meant brace, and when [[hero]] said "[[magic]]," it meant nothing at all except that [[hero]] had run out of real words and was now shouting encouragement.

By the fourth day, [[hero]] had given it a name: [[dragonname]].

By the sixth, [[dragonname]] would lift its enormous [[bodypart]] and let [[hero]] climb it like a staircase.

On the seventh day, the slab moved.

It went with a [[sound1]] that shook loose a rain of [[plural1]] from the ravine walls. [[dragonname]] roared — a sound so [[adj4]] that, up in the village, three shutters [[verbpast1]] clean off their hinges — and then the great [[color1]] wing unfolded, whole and trembling, for the first time in a season.

[[hero]] laughed until they cried, which was undignified, and did not care in the slightest.`,
    },
    {
      title: 'IV. The Village Comes Down the Cliff',
      body: `Of course, the shutters gave them away.

By noon, half of [[village]] stood at the lip of the ravine with pitchforks, torches, and an assortment of [[plural2]] that nobody could reasonably call weapons. At the front, [[adv2]] waving her cane, stood Old Marrow.

"Step away from the beast, child!"

[[hero]] did not step away. [[hero]] stepped in front of it — all of them, the whole [[adj1]] armful of them, one small figure against a wall of [[color1]] scales.

"Her name is [[dragonname]]," they said. "She has been trapped down here since the spring storms. She ate the sheep because she could not fly to hunt. She has not hurt one single person in [[village]], and she has had a hundred chances."

"It is a monster," said Old Marrow.

"She is *hungry*," said [[hero]]. "There's a difference, and the fact that you can't see it says more about you than it does about her."

The crowd shifted. Somebody's torch guttered. And into that silence, [[dragonname]] lowered her enormous head — down, and down, and down — until her jaw rested on the stones at Old Marrow's feet, gentle as a cat laying a gift on a doorstep.

Old Marrow stared. Then, [[adv1]], with the stiffness of a woman doing something she would deny for the rest of her life, she reached out and put one weathered hand on the dragon's snout.

"Well," she said. "She's a [[adj3]] great thing, isn't she."`,
    },
    {
      title: 'V. What Ember Fell Is Known For Now',
      body: `They fed her, in the end. The whole village did.

It took every wheel of [[food2]] in the storehouse and most of Bartlett's replacement cart of [[food1]], and when [[dragonname]] finally rose into the sky over the ravine — [[verbing1]] in a spiral so wide it blotted out the afternoon — the entire population of [[village]] stood on the cliff and cheered like [[adj4]] fools.

She came back. She always came back.

By midsummer she was hauling timber up the cliff face in an afternoon, work that had taken the village a month. By autumn she had chased off the raiders who came up the coast road, without a single drop of blood spilled — it turns out that men with swords will [[verb2]] a remarkable distance when a [[adj2]] dragon lands on the beach and simply looks at them.

And [[hero]]? [[hero]] never did become a [[job]].

They became something the old maps had no word for: the one who goes down into the fog first. The one who asks *why* before reaching for a pitchfork. Children in [[village]] still learn the story before they learn their letters, and it always ends the same way — with a small [[adj1]] child, a stolen crowbar, and a [[noun2]] carved from [[color2]] stone at the cliff's edge, where a child once decided that a monster might only be someone nobody had bothered to ask.

The word on the stone is [[magic]].

Nobody remembers what it means. Everybody says it anyway, [[adv2]], every time they need to be braver than they are.`,
    },
  ],
}
