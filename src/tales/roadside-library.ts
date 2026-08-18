import type { Tale } from '../types'

export const roadsideLibrary: Tale = {
  id: 'roadside-library',
  title: 'The Library at the End of the Road',
  kicker: 'A tale of shelves and stubborn books',
  blurb:
    'It turns up where somebody needs it, stays until they are finished, and then it is gone. This time it will not leave.',
  minutes: 6,
  tags: ['magic', 'adventure', 'family'],
  accent: '#D7A96B',
  character: 'book',
  slots: [
    { id: 'reader', kind: 'name', label: "The reader's name" },
    { id: 'keeper', kind: 'name', label: "The librarian's name" },
    { id: 'town', kind: 'place', label: 'The town it appears outside' },
    { id: 'adj1', kind: 'adjective' },
    { id: 'adj2', kind: 'adjective' },
    { id: 'adj3', kind: 'adjective' },
    { id: 'adj4', kind: 'adjective' },
    { id: 'noun1', kind: 'noun', hint: 'What the overdue book is about' },
    { id: 'noun2', kind: 'noun' },
    { id: 'animal1', kind: 'animal', hint: 'It lives in the reference section' },
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
    { id: 'color1', kind: 'color' },
    { id: 'sound1', kind: 'sound' },
    { id: 'exclaim', kind: 'exclamation' },
    { id: 'magic', kind: 'magic-word', hint: 'Stamped inside every front cover' },
    { id: 'bodypart', kind: 'body-part' },
    { id: 'occupation1', kind: 'occupation' },
    { id: 'sibling', kind: 'name', label: "The reader's brother or sister" },
  ],
  chapters: [
    {
      title: 'I. It Was Not There on Tuesday',
      body: `The library turned up at the end of the Mill Road on a Wednesday, in a field that had been empty since before anyone in [[town]] was born.

It was long and low and [[adj1]], with a [[color1]] door and forty windows and a chimney putting out smoke, and it had not been there on Tuesday, and the grass under it was not flattened, which is the detail that bothered people most.

[[town]] did what towns do. It sent a [[occupation1]] to look, then a committee, then nobody, and by the second week everybody had settled into pretending it had always been there — which is easier than it sounds and is how most strange things survive.

[[reader]] was eleven, and went in on the third day, because the sign on the [[color1]] door said **OPEN** and because [[reader]]'s brother [[sibling]] had been in hospital in the city for two months and the house was too quiet to sit in.

Inside there were shelves to the ceiling and a smell of dust and [[food1]], and a [[animal1]] asleep in the reference section, and a woman at a desk who looked up and said, without any surprise at all:

"You're the one. Good. I was starting to worry."

"The one what?"

"The one it came for," said [[keeper]], and stamped something [[adv1]]. "It doesn't turn up for towns. It turns up for people. Borrowing limit is [[num1]] books, the [[animal1]] bites if you wake it, and nothing goes out of the building until it's finished with you."`,
    },
    {
      title: 'II. The Shelf That Knew',
      body: `The first book [[reader]] took off a shelf was about [[noun1]].

That was odd, because [[reader]] had not been looking for a book about [[noun1]]. [[reader]] had been looking for something with a dragon in it. But the shelf had put it right at eye level, and the spine was worn in the exact way a spine gets worn when somebody has read it [[num1]] times, and it opened by itself to a page about halfway through.

The stamp inside the front cover said one word: **[[magic]]**.

"What does that mean?"

"Nothing," said [[keeper]]. "It's not a word. It's just what the press did. Every book in here has it."

The book about [[noun1]] was not what [[reader]] expected either. It was, in a roundabout way, about waiting. About how waiting is a thing you *do* rather than a thing that happens to you, and about how people who are good at it are usually the ones who have found something to hold on to while they do it.

[[reader]] read it in four days, on the floor between the stacks, and cried [[adv2]] at the end where nobody could see, and put it back.

The shelf immediately offered another one.

That went on for a month. The library never once gave [[reader]] the book that had been asked for. It gave the one that was needed, which is a much ruder thing to do, and [[reader]] complained about it constantly and came back every single day.`,
    },
    {
      title: 'III. What the Librarian Was For',
      body: `[[keeper]] had been the librarian for a hundred and nine years, which she mentioned the way other people mention the weather.

"Doesn't it get lonely?"

"Enormously," she said. "That's rather the design. If I had a town I'd stay in it, and then the library would stop moving, and then it would only ever help the people who happened to live near it, and what use is that?"

She was [[adj2]] about most things and [[adj3]] about exactly one: books that had not come back.

"[[num1]] of them out there," she said, tapping a ledger the size of a table. "Every one lent to somebody who needed it and never finished with it. That's the only way a book leaves this building — the borrower dies, or gives up, or moves on before the book's done its work. And every one of those is a person I couldn't help, and the ledger doesn't let me forget a single name."

[[reader]] looked at the ledger for a while. It was very long.

"What happens when the library's finished with me?"

"It goes," said [[keeper]], not unkindly. "Overnight. Somewhere else, for somebody else."

"That's a [[adj4]] way to run a library."

"It is," agreed [[keeper]], and closed the ledger with a [[sound1]]. "Ask me why I've stayed a hundred and nine years."`,
    },
    {
      title: 'IV. The Book That Would Not Go Back',
      body: `[[sibling]] came home in the spring. Thin, and slow on the stairs, and home.

And that night the library did not leave — but every window in it lit up at once, [[adv1]], and the whole of [[town]] came out into the road to look at a building that had begun, very gently, to fade.

[[reader]] ran. Ran the whole Mill Road with a [[bodypart]] burning and got through the [[color1]] door as the shelves were going soft at the edges, and found [[keeper]] standing in the middle of it all with the ledger in her arms, perfectly calm.

"It's finished with you," she said. "That's a good thing. That's the *best* thing. Go home."

"[[exclaim]] No — wait — I've still got one out."

[[keeper]] went very still.

"You what?"

[[reader]] pulled it out of a coat: the first one. The [[adj1]] book about [[noun1]], worn at the spine, taken off the shelf on the third day and never actually returned, because [[reader]] had put it *back on the shelf* but had never handed it over, and had come back for it every morning since, and had — this is the part [[reader]] could barely say out loud — been reading it to [[sibling]] down the telephone in the hospital, a chapter a night, for two months.

"It's not finished," said [[reader]]. "He's not finished. He's on chapter nine."

The fading stopped.

It stopped so abruptly that a shelf of [[plural1]] fell over, and the [[animal1]] shot out of the reference section [[verbing1]] like something possessed, and [[keeper]] sat down on the floor of her own library and laughed until she had to hold on to a table.

"A hundred and nine years," she said, "and nobody has *ever* thought of that."`,
    },
    {
      title: 'V. The Longest Loan on Record',
      body: `The library is still at the end of the Mill Road. It has been there eleven years.

It is, [[keeper]] insists, still technically mid-loan. There is one book out. It is being read very, very slowly — a chapter whenever somebody feels like it, sometimes none for a month — and as long as it is not finished the building cannot go anywhere, and every so often [[keeper]] mutters about the [[adj4]] cheek of it and then goes and makes more tea.

[[town]] has stopped pretending. There is a path worn across the field now, and a bicycle rack, and a sign the council paid for. On Thursdays the [[occupation1]] runs a reading hour for anyone under seven, and the [[animal1]] attends, and bites nobody, and has become unbearable about it.

They have started on the ledger.

That was [[sibling]]'s idea — he is nineteen now, and walks fine, and has the sort of stubbornness you only get from two months of ceilings. [[num1]] names, every one a person somewhere who never finished. They write to them. Descendants, mostly; towns that no longer exist; the occasional astonished stranger who finds a letter on the mat asking, politely, whether their great-grandmother ever mentioned a book.

Forty-one have come back so far. Each one arrives, gets stamped, and goes onto a shelf near the door that [[keeper]] will not let anybody else dust.

[[reader]] is twenty-two and is training as the next librarian, which involves a great deal of [[verbing1]] and an oath that has to be sworn at two in the morning for reasons nobody will explain.

"When it does finally leave," [[reader]] asked once, "and I'm on board — will I ever get to [[verb1]] anywhere twice?"

"No," said [[keeper]].

"Then why did you [[verb2]] it? Really?"

And [[keeper]] pointed, without looking up, at the shelf by the door: the forty-one, standing shoulder to shoulder, each with a [[plural2]]-worn spine and a meaningless word stamped inside the cover.

"Because somebody has to go back for the ones who didn't finish," she said. "And because the alternative is a very long list of names in a book, and I have read that book, and I did not care for how it ended."

Then she [[verbpast1]], and put the kettle on, and asked whether anybody had seen the [[noun2]] she was absolutely certain she had left on the desk.`,
    },
  ],
}
