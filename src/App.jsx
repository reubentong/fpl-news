import React, { useMemo, useState } from "react";

const articles = [
  {
    id: 1,
    category: "Breaking",
    title: "Rumble in Reu's Tumble",
    image: "/images/lead-story.jpg",
    summary:
      "Star-hungry George and Reuben slog it out for a second and third, respectively",
body: `The title race has become a private heavyweight scrap between George and Reuben, with both managers now so far clear of the chasing pack that the rest of the league has been reduced to background scenery.

Since the redraft, George has surged into dangerous form while Reuben has suffered what insiders are calling a “tumble” — a phrase carrying both tactical meaning and irritable digestive undertones.

But the collapse narrative has not held. In recent weeks, the pair have gone blow for blow, top score for top score, breaking records and trading ridiculous gameweeks like two men trying to make excellence personally annoying.

Behind it all sits the league’s most exclusive institution: the winners-only chat, occupied solely by Reuben, George and Jim. Sources describe it as smug, historic, and legally impossible for the rest of the league to access.

Jonnie, one manager openly consumed by jealousy, has repeatedly branded it the “winners jerkle” — a phrase he appears to believe is criticism, though members insist it only proves why he remains outside.

George wants another crown. Reuben wants the third star. Jim watches from the velvet rope. Jonnie wants the whole thing investigated.

The rest, as ever, are technically involved but emotionally irrelevant.`},
{
  id: 2,
  category: "Investigation",
  title: "Balding Bloke MISSING After Haircut, Katsu and Asahi",
  image: "/images/jb.jpg",
  summary:
    "A lunchtime trim became a welfare incident after one man combined limited coverage, Japanese curry and beer.",
  body: `A receding man has gone missing after what began as a routine lunchtime haircut and ended, inevitably, with Japanese curry, Asahi and radio silence.

Witnesses say the haircut was “brave”, “efficient” and “good crown-work”, with one source adding that the barber “worked mainly from memory”. The subject was then spotted eating katsu where verything seemed calm. The curry was flowing. The Asahi was cold. Then silence. Jonathan Blanchard's colleagues grew concerned after he stopped replying on teams, though experts quickly noted this matched a known pattern: man eats too much, man goes horizontal, man becomes legally unavailable.

This is not his first food-related disappearance. Previous records show he has had to go to bed after overcommitting to naan. Search teams are checking sofas, beds, dark rooms and anywhere a freshly trimmed forehead might be reflecting light.

Police are not treating the disappearance as suspicious. They are treating it as friday lunch.`
},
{
  id: 3,
  category: "Breaking",
  title: "Man Under Scrutiny After Ducklings Take First Flight",
  image: "/images/duck-conspiracy.png",
  summary:
    "A duck rescue has become a welfare storm after newborn birds entered the river via unexpected aviation.",
  body: `Waterfowl enthusiast Josh Lord is facing scrutiny after a rescued duck’s newly hatched ducklings were introduced to the river in what witnesses are calling “their first flight”.

What began as a kind-hearted rescue has raised serious questions about altitude, technique and whether ducklings should be airborne before they have emotionally prepared for it. Witnesses say the tiny birds were not so much placed into the water as briefly promoted to cabin crew. One observer described the release as “a long-haul flight in duckling terms”, adding that there was “noticeable airtime” before splashdown. Lord insists the operation was gentle and successful, noting that all ducklings landed safely and immediately began swimming.

Critics, however, say the landings had “serious Ryanair energy”: technically successful, but loud, sudden, and not something anyone would choose twice. RSPCA officials have not commented, though imaginary investigators are reviewing footage to determine whether the ducklings were released, launched, or simply introduced to gravity ahead of schedule. The mother duck is believed to be safe, but has reportedly asked why her children’s first trip to the river included a departure gate.

At the time of publication, all ducklings were unharmed, the river had accepted custody, and Lord remained under pressure to confirm whether future releases will be by hand, boat, or budget airline.`
},
{
  id: 4,
  category: "Lifestyle",
  title: "Midlands Couple Finally Put a Date on It",
  image: "/images/daix.png",
  summary:
    "After a decade together and two years engaged, Britain’s least surprising wedding has been formally upgraded to a wine holiday.",
  body: `After a decade together, two years engaged, and most people already assuming this was happening eventually, Reuben and Amna have finally confirmed the details everyone technically knew were coming.

The wedding will take place at the beautiful Château d’Aix in June 2027 giving guests plenty of time to save the date, book annual leave, and pretend they are going for the ceremony rather than the vinyard nextdoor.

In a bold move, the couple are inviting friends and family to celebrate across a long weekend, meaning the event has now officially crossed the line from “wedding” into “holiday with ceremony in the middle”.

Invites will be sent out soon, which in wedding terms means: yes, it is real, no, you do not need to panic yet, and please stop asking for the link.

Sources close to the couple say the mood is romantic, relaxed and dangerously continental, with early expectations of sunshine, good food, better wine and at least one guest asking whether the vineyard “does pints”.

For Reuben and Amna, it is the next chapter in a story already ten years deep.

For everyone else, it is very simple:

Pack a thin suit, pace yourself, and prepare for a wedding that is mostly a break to rural france.`
},
{
  id: 5,
  category: "History",
  title: "Picked by YOU: Top Nazi Leaders that aren't Hitler",
  summary:
    "We've had enough of the blue-haired brigade. Let's bring sexy back!",
  poll: {
    question: "Who is your top Nazi figure other than Adolf Hitler?",
    options: [
      "Heinrich Himmler — head of the SS and central architect of the Holocaust",
      "Joseph Goebbels — propaganda minister of Nazi Germany",
      "Hermann Göring — senior Nazi leader and Luftwaffe commander",
      "Reinhard Heydrich — senior SS official and key organiser of the Holocaust",
      "Adolf Eichmann — SS officer central to the deportation of Jews to death camps",
      "Rudolf Hess — Hitler’s deputy until his 1941 flight to Britain",
    ],
  },
  image: "/images/bruno.png",
  body: `Disclaimer: This poll is presented for historical discussion only. The Nazi regime
  was responsible for genocide, mass persecution and aggressive war. Inclusion in
  this poll does not imply admiration, endorsement, humour or moral equivalence.
  The question concerns public infamy and historical responsibility.`,
},
{
  id: 6,
  category: "Sport",
  title: "Divorced, Beheaded, Won't Survive",
  image: "/images/mgw.png",
  summary:
    "Spurs divorce Tudor, Forest changed wives, Morgan Gibbs-White thrives",
  body: `Earlier in the season, Morgan Gibbs-White stayed the course at Nottingham Forest, leaving Spurs with nothing but an unsigned contract, a sad headline and a Romano catchphrase in need of counselling.

Fabrizio said “Here we go.” Forest said “No you don’t.” Spurs said absolutely nothing, mainly because they had just seen the size of Marinakis’ balls and decided silence was safer.

Since, Frank gone, Tudor divorced & in a time where calm is needed italian leadership is turned to.

Forest no bettwe onto their 4th manager, somehow, are still standing whilst battling on the continental front with Nuno 2.0, Vitor Pereira.

Spurs, meanwhile, have moved on to De Zerbi, giving them fresh ideas, renewed hope and roughly six weeks before everyone remembers they are still Spurs.

The split-shirt image tells the story: Forest red, stubborn and still holding their talisman. Spurs white, worried and looking like a club that has just opened the fixture list with one eye closed.

Forest kept MGW. Spurs kept the receipt.

Sources close to Tottenham insist there is “no crisis”, which traditionally means a spreadsheet called Relegation Permutations FINAL final v3 has already been shared in the group chat.

For Forest, it is survival, pride and proof that not every transfer rumour becomes reality.

For Spurs, it is another episode in the long-running documentary: How Do They Keep Doing This?

Here we go?

No.

Here we go down.`
},
{
  id: 7,
  category: "Business",
  title: "Fake Imports Crackdown",
  image: "/images/shirts.png",
  summary:
    "Fake football shirts face crackdown as officials bravely ignore war, poverty and £90 polyester.",
  body: `The government has announced a crackdown on fake World Cup shirts, finally tackling the issue keeping Britain awake at night: blokes buying England tops for £14.99. Even some Liverpool fans are panic buying United shirts.

Officials say counterfeit kits damage the game. Fans say charging £90 for a shirt made of cling film and regret damages the soul. The move comes just as the group placed a major order through online Chinese kit-baron Tim. The clobber cartel leader's real name is not known, but is understood to have had a few stock issues, however sources say he is working children overtime to save these football obsessed westerners.

Critics argue there are bigger global issues than fake football shirts. Supporters of the crackdown argue they work for people who sell real ones. At the time of publication, the shirts were cheap, the outrage was real, and Tim remained the people’s quartermaster.`},
{
  id: 8,
  category: "Quiz",
  title: "Tenaball: Assist Kings",
  image: "/images/tenable.png",
  summary:
    "Can you reveal the Premier League single-season assist kings before Bruno ruins the board?",
  tenable: {
    question: "Players with the most assists in a single Premier League season",
    answers: [
      {
        player: "Kevin De Bruyne",
        assists: 20,
        season: "2019-20",
      },
      {
        player: "Thierry Henry",
        assists: 20,
        season: "2002-03",
      },
      {
        player: "Mohamed Salah",
        assists: 18,
        season: "2024-25",
      },
      {
        player: "Mesut Özil",
        assists: 19,
        season: "2015-16",
      },
      {
        player: "Cesc Fàbregas",
        assists: 18,
        season: "2014-15",
      },
      {
        player: "Frank Lampard",
        assists: 18,
        season: "2004-05",
      },
      {
        player: "Bruno Fernandes",
        assists: 18,
        season: "2025-26, ongoing",
      },
      {
        player: "Eric Cantona",
        assists: 16,
        season: "1992-93",
      },
      {
        player: "Eden Hazard",
        assists: 15,
        season: "2012-13",
      },
      {
        player: "Leroy Sané",
        assists: 15,
        season: "2018-19",
      },
    ],
  },
  body: `Welcome to Tenaball, the legally distinct football quiz where memory, agenda and Barclays nostalgia collide.

This week's board asks contestants to reveal the Premier League players with the highest single-season assist totals — creators, stat-padders, corner merchants and men who made finishing look easier than it was. There is added tension this year as Bruno Fernandes threatens to barge further into the conversation, despite looking like a man who argues with parking meters. The answers are already hidden on the board. Click to reveal them one by one, then immediately pretend you knew the lot.

No lifelines. No VAR. No sympathy for anyone who forgets KDB.`
}
];

const tickerItems = [
  "BREAKING: RSPCA called as man throws ducks in sewage",
  "LIVE: Mid-season favourite crumbling",
  "ALERT: 2 blokes battle over follicle matters",
  "JUST IN: Nazi Mt. Rushmore poll",
];

const feed = [
  "TODO",
  // "Trending now: the 1:58am transfer nobody can justify",
  // "Panel verdict: 'underlying numbers' defence collapses under basic scrutiny",
  // "League table watch: suspicious confidence from mid-table managers",
  // "Coming up: power rankings, excuses special, and another captaincy crisis",
];

const leagueBulletin = [
  "Fine-doping has rocked the league, with managers deliberately missing bogey teams, hiding transfer lists and posting nonsense in the Draft Room chat to rack up penalties.",
  "The motive is simple: avoid being last and cheapest, because apparently even financial incompetence is now a tactic.",
  "George leads the league by two points, can he hold his nerve? Probably.",
  "Reuben has quietly turned around a horrible post-redraft slump, could a 'Brobbery' be on the cards.",
  "Jonnie has officially exited the title race again, pending immediate re-entry after one win.",
  "Jack is creeping towards the podium, raising fears that Daynamo Dresden may soon ruin a record.",
  "Matthew and Daniel remain locked together, though Daniel’s midfield has been referred to the Hague for crimes against squad balance.",
  "Trio Tristan, Josh and Jim continue their proud battle to be crowned King Kong.",
  "Ben remains bottom with no hope in sight, but sources confirm the soap is excellent.",
];

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f7f3eb 0%, #f3efe7 100%)",
    color: "#18181b",
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
  },
  topbar: {
    background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
    color: "white",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
  },
topbarInner: {
  maxWidth: 1260,
  margin: "0 auto",
  padding: "20px 28px 18px 28px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 18,
},
  brand: {
    fontSize: "38px",
    fontWeight: 900,
    letterSpacing: "0.2px",
    margin: 0,
    lineHeight: 1.05,
  },
  strap: {
    color: "#d8b68a",
    fontSize: 11,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1.8,
    marginBottom: 8,
  },
  tickerWrap: {
    background: "linear-gradient(90deg, #6f1d1b, #9a2d26)",
    color: "#fff8ef",
    overflow: "hidden",
    whiteSpace: "nowrap",
    padding: "11px 0",
    fontWeight: 700,
    fontSize: 14,
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  },
  tickerTrack: {
    display: "inline-block",
    paddingLeft: "100%",
    animation: "ticker 26s linear infinite",
  },
  container: {
    maxWidth: 1260,
    margin: "0 auto",
    padding: 28,
  },
  hero: {
    background: "linear-gradient(135deg, #151515 0%, #27211d 58%, #55201c 100%)",
    color: "white",
    borderRadius: 28,
    padding: 38,
    marginBottom: 28,
    boxShadow: "0 24px 70px rgba(0,0,0,0.18)",
    border: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
  },
heroTitle: {
  fontSize: 48,
  lineHeight: 1.04,
  margin: "0 auto 14px auto",
  fontWeight: 900,
  maxWidth: 760,
},
heroKicker: {
  color: "#d8b68a",
  textTransform: "uppercase",
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: 2.4,
  marginBottom: 14,
},
  button: {
    background: "linear-gradient(135deg, #84211d, #ab2e26)",
    color: "white",
    border: 0,
    borderRadius: 12,
    padding: "12px 18px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(132,33,29,0.18)",
    transition: "all 0.18s ease",
  },
  subtleButton: {
    background: "rgba(255,255,255,0.78)",
    color: "#1c1917",
    border: "1px solid rgba(24,24,27,0.08)",
    borderRadius: 12,
    padding: "12px 18px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(0,0,0,0.05)",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 24,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 900,
    margin: "0 0 18px 0",
    color: "#18181b",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
  },
  card: {
    background: "rgba(255,255,255,0.78)",
    borderRadius: 22,
    padding: 20,
    boxShadow: "0 12px 32px rgba(0,0,0,0.07)",
    border: "1px solid rgba(24,24,27,0.08)",
    backdropFilter: "blur(8px)",
  },
  category: {
    color: "#8b231d",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1.4,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 1.18,
    margin: "0 0 10px 0",
    fontWeight: 900,
    color: "#18181b",
  },
  cardSummary: {
    color: "#57534e",
    fontSize: 15,
    lineHeight: 1.7,
    marginBottom: 14,
  },
  sidebarBox: {
    background: "rgba(255,255,255,0.78)",
    borderRadius: 22,
    padding: 20,
    boxShadow: "0 12px 32px rgba(0,0,0,0.07)",
    border: "1px solid rgba(24,24,27,0.08)",
    backdropFilter: "blur(8px)",
    marginBottom: 18,
  },
  feedItem: {
    padding: "11px 0",
    borderBottom: "1px solid #ece6dc",
    fontWeight: 700,
    fontSize: 14,
    color: "#292524",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.72)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backdropFilter: "blur(4px)",
  },
  modal: {
    background: "#fffdf8",
    width: "100%",
    maxWidth: 920,
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: 28,
    padding: 32,
    boxShadow: "0 24px 80px rgba(0,0,0,0.36)",
    border: "1px solid rgba(24,24,27,0.08)",
  },
  modalTitle: {
    fontSize: 40,
    lineHeight: 1.06,
    margin: "8px 0 14px 0",
    fontWeight: 900,
    color: "#18181b",
  },
  modalBody: {
    fontSize: 17,
    color: "#44403c",
    lineHeight: 1.9,
    whiteSpace: "pre-line",
  },
  closeRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
heroInner: {
  display: "grid",
  gridTemplateColumns: "1.25fr 0.75fr",
  gap: 24,
  alignItems: "center",
  textAlign: "left",
},

heroImageWrap: {
  position: "relative",
  borderRadius: 24,
  overflow: "hidden",
  minHeight: 250,
  maxHeight: "none",
  background: "#111",
  boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
  border: "1px solid rgba(255,255,255,0.12)",
},

heroImage: {
  width: "100%",
  height: "auto",
  maxHeight: 280,
  objectFit: "contain",
  display: "block",
},

articleImage: {
  width: "100%",
  height: "auto",
  maxHeight: 260,
  objectFit: "contain",
  borderRadius: 16,
  marginBottom: 14,
  border: "1px solid #e7e1d7",
  background: "#111",
},

heroCopy: {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
},

heroImageBadge: {
  position: "absolute",
  left: 16,
  bottom: 16,
  background: "rgba(0,0,0,0.72)",
  color: "white",
  padding: "8px 12px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: 1,
  border: "1px solid rgba(255,255,255,0.14)",
},
brandBlock: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
},

headerActions: {
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
  justifyContent: "flex-end",
},

loginButton: {
  background: "rgba(255,255,255,0.08)",
  color: "#fff8ef",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: 12,
  padding: "10px 14px",
  fontWeight: 900,
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: 12,
  letterSpacing: 1,
},

subscribeButton: {
  background: "linear-gradient(135deg, #d8b68a, #f4d19a)",
  color: "#171717",
  border: 0,
  borderRadius: 12,
  padding: "10px 14px",
  fontWeight: 900,
  cursor: "pointer",
  textTransform: "uppercase",
  fontSize: 12,
  letterSpacing: 1,
  boxShadow: "0 8px 20px rgba(216,182,138,0.22)",
},
modalImage: {
  width: "100%",
  maxHeight: "none",
  height: "auto",
  objectFit: "contain",
  borderRadius: 20,
  margin: "16px 0 20px 0",
  border: "1px solid #e7e1d7",
  background: "#111",
},
pollBox: {
  margin: "22px 0",
  padding: 22,
  borderRadius: 22,
  background: "linear-gradient(135deg, #18181b 0%, #292524 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 14px 34px rgba(0,0,0,0.16)",
  color: "white",
},

pollKicker: {
  color: "#d8b68a",
  fontSize: 12,
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: 1.8,
  marginBottom: 8,
},

pollQuestion: {
  fontSize: 22,
  lineHeight: 1.25,
  fontWeight: 900,
  margin: "0 0 16px 0",
},

pollOptions: {
  display: "grid",
  gap: 10,
},

pollOption: {
  width: "100%",
  textAlign: "left",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff8ef",
  fontSize: 15,
  lineHeight: 1.55,
  fontWeight: 700,
  cursor: "pointer",
},

pollNote: {
  marginTop: 14,
  color: "#d6d3d1",
  fontSize: 13,
  lineHeight: 1.6,
},
clipGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 18,
},

clipCard: {
  background: "rgba(255,255,255,0.78)",
  borderRadius: 22,
  padding: 16,
  boxShadow: "0 12px 32px rgba(0,0,0,0.07)",
  border: "1px solid rgba(24,24,27,0.08)",
  backdropFilter: "blur(8px)",
},

clipFrame: {
  position: "relative",
  borderRadius: 18,
  overflow: "hidden",
  background: "#111",
  marginBottom: 14,
  border: "1px solid #e7e1d7",
},

clipVideo: {
  width: "100%",
  height: 300,
  objectFit: "contain",
  display: "block",
  background: "#111",
},

clipBadge: {
  position: "absolute",
  top: 12,
  left: 12,
  background: "linear-gradient(135deg, #84211d, #ab2e26)",
  color: "white",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: 1,
},

clipLength: {
  position: "absolute",
  right: 12,
  bottom: 12,
  background: "rgba(0,0,0,0.78)",
  color: "white",
  padding: "5px 9px",
  borderRadius: 9,
  fontSize: 12,
  fontWeight: 800,
  border: "1px solid rgba(255,255,255,0.12)",
},

clipTitle: {
  fontSize: 24,
  lineHeight: 1.12,
  margin: "0 0 8px 0",
  fontWeight: 900,
  color: "#18181b",
},

clipSummary: {
  color: "#57534e",
  fontSize: 15,
  lineHeight: 1.65,
  margin: 0,
},
tenableBox: {
  margin: "22px 0",
  padding: 22,
  borderRadius: 22,
  background: "linear-gradient(135deg, #18181b 0%, #292524 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 14px 34px rgba(0,0,0,0.16)",
  color: "white",
},

tenableKicker: {
  color: "#d8b68a",
  fontSize: 12,
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: 1.8,
  marginBottom: 8,
},

tenableQuestion: {
  fontSize: 22,
  lineHeight: 1.25,
  fontWeight: 900,
  margin: "0 0 16px 0",
},

tenableGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 10,
},

tenableTile: {
  minHeight: 58,
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff8ef",
  fontSize: 15,
  lineHeight: 1.35,
  fontWeight: 900,
  cursor: "pointer",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: 10,
},

tenableTileRevealed: {
  background: "linear-gradient(135deg, #d8b68a, #f4d19a)",
  color: "#18181b",
},

tenableNumber: {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.28)",
  color: "white",
  fontWeight: 900,
  flexShrink: 0,
},

tenableNumberRevealed: {
  background: "#18181b",
  color: "#f4d19a",
},

tenableHiddenText: {
  letterSpacing: 0.5,
  opacity: 0.9,
},

tenableNote: {
  marginTop: 14,
  color: "#d6d3d1",
  fontSize: 13,
  lineHeight: 1.6,
},
};

function TenableBoard({ tenable }) {
  const [revealed, setRevealed] = useState([]);

  const toggleAnswer = (index) => {
    setRevealed((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <div style={styles.tenableBox}>
      <div style={styles.tenableKicker}>Football Tenable</div>
      <h3 style={styles.tenableQuestion}>{tenable.question}</h3>

      <div style={styles.tenableGrid} className="tenable-grid">
        {tenable.answers.map((answer, index) => {
          const isRevealed = revealed.includes(index);

          return (
            <button
              key={index}
              style={{
                ...styles.tenableTile,
                ...(isRevealed ? styles.tenableTileRevealed : {}),
              }}
              onClick={() => toggleAnswer(index)}
            >
              <span
                style={{
                  ...styles.tenableNumber,
                  ...(isRevealed ? styles.tenableNumberRevealed : {}),
                }}
              >
                {index + 1}
              </span>

              <span>
{isRevealed ? (
  <span>
    {answer.player}
    <span style={{ opacity: 0.75 }}>
      {" "}
      — {answer.assists} assists, {answer.season}
    </span>
  </span>
) : (
  <span style={styles.tenableHiddenText}>
    {answer.assists} assists — {answer.season}
  </span>
)}
              </span>
            </button>
          );
        })}
      </div>

<div style={styles.tenableNote}>
  Click each tile to reveal the assist king.
</div>
    </div>
  );
}

function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.closeRow}>
          <div style={styles.category}>{article.category}</div>
          <button style={styles.button} onClick={onClose}>
            Close
          </button>
        </div>

        <h2 style={styles.modalTitle}>{article.title}</h2>

        <p style={{ ...styles.cardSummary, fontSize: 17 }}>
          {article.summary}
        </p>

        {article.image && (
          <img src={article.image} alt={article.title} style={styles.modalImage} />
        )}

        {article.poll && (
          <div style={styles.pollBox}>
            <div style={styles.pollKicker}>Reader poll</div>

            <h3 style={styles.pollQuestion}>{article.poll.question}</h3>

            <div style={styles.pollOptions}>
              {article.poll.options.map((option, index) => (
                <button
                  key={index}
                  style={styles.pollOption}
                  onClick={() => alert(`Vote recorded: ${option}`)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div style={styles.pollNote}>
              This poll is for historical discussion only. It is not an endorsement,
              celebration or ranking of merit.
            </div>
          </div>
        )}
{article.tenable && <TenableBoard tenable={article.tenable} />}
        <div style={styles.modalBody}>{article.body}</div>
      </div>
    </div>
  );
}

function SocialCard({ post }) {
  return (
    <div style={{ ...styles.card, marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7d221e, #b13328)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            flexShrink: 0,
            boxShadow: "0 8px 18px rgba(125,34,30,0.18)",
          }}
        >
          {post.name.charAt(0)}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              marginBottom: 4,
            }}
          >
            <div>
              <div style={{ fontWeight: 900, color: "#18181b" }}>{post.name}</div>
              <div style={{ color: "#78716c", fontSize: 14 }}>{post.handle}</div>
            </div>
            <div
              style={{
                color: "#8b231d",
                fontWeight: 800,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Live
            </div>
          </div>

          <div style={{ fontSize: 17, lineHeight: 1.72, color: "#1f2937" }}>
            {post.post}
          </div>
        </div>
      </div>

      {post.image && (
        <img
          src={post.image}
          alt={post.name}
          style={{
            width: "100%",
            height: 340,
            objectFit: "cover",
            borderRadius: 16,
            marginTop: 10,
            border: "1px solid #e7e1d7",
          }}
        />
      )}
    </div>
  );
}

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("news");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const text = `${article.title} ${article.summary} ${article.category}`.toLowerCase();
      return text.includes(query.toLowerCase());
    });
  }, [query]);

const videos = [
  {
    title: "SOFT BODIES, THEY'RE ALRIGHT..",
    summary:
      "New footage appears to show tiny birds being introduced to the river with what experts are calling 'unnecessary verticality'.",
    length: "0:14",
    tag: "Viral",
    image: "/images/duck-conspiracy.png",
    clip: "/videos/duckies.mp4",
  },
      {
    title: "Public curry funding race heating up",
    summary:
      "More fines being added as the season closes and the end of season curry draws near.",
    length: "1:10",
    tag: "Exclusive",
    image: "/videos/wheelspin.mp4",
    clip: "/videos/wheelspin.mp4",
  },
  {
    title: "MAN PLEASURES GUINNESS",
    summary:
      "WARNING FOR WOMEN: have a mop at the ready as sigma-male shows phalangic talent",
    length: "0:04",
    tag: "Hot today",
    image: "/images/guinness.mp4",
    clip: "/videos/guinness.mp4",
  },
  {
    title: "APE AWAY DAYS",
    summary:
      "Traveling ape, turned documentor, spots the continental male trying to impress strangers.",
    length: "0:08",
    tag: "International",
    image: "/videos/dancers.mp4",
    clip: "/videos/dancers.mp4",
  },
  {
    title: "Delight as Spectrum Proves No Barrier",
    summary:
      "Autistic `Fin Vs History` fan swaps fedora for Antioch.",
    length: "0:06",
    tag: "Warming",
    image: "/videos/dansnow.mp4",
    clip: "/videos/dansnow.mp4",
  },
    {
    title: "Domino's bike TOPPLES Wyvern",
    summary:
      "Half time entertainment in football dropping, despite fans being price-gauged, with strange race around Brisbane Road.",
    length: "0:29",
    tag: "Exclusive",
    image: "/videos/orient.mp4",
    clip: "/videos/orient.mp4",
  },
];

  const socialPosts = [
    {
      handle: "@xGandVibes",
      name: "Dudes yapping",
      post: "How do you tell man to stop sending messages when their team is playing? Forest arent even a big club #PutTheFriesInTheBag",
      image:
        "/images/fries.png",
    },
    {
      handle: "@ZzodegaardstanzZ",
      name: "ArteTAX",
      post: "Our sweet gunners seem to be burning out. Mikel given them more pens!!!!",
    },
    {
      handle: "@SandraShawEN",
      name: "Mull it over?",
      post: "Does anyone really like their mullet or secretly regret it? Maybe their sister does? #ALABAMA",
      image:
        "/images/mullet.png",
    },
    {
      handle: "@ApeusMaximus96",
      name: "gon hostipal",
      post: "ive hurt since ive dun this. gon to drs to untwist me Ballz. tell Luceh Sum1",
      image: "/images/blur.png"
    },
  ];

const latestHeadlines = [
  "Fine-doping scandal erupts as managers deliberately break rules to avoid being cheapest",
  "George top by two points and still somehow acting like he is being hunted by wolves",
  "Jonnie officially exits title race for the seventh time this season",
  "Fans ask James, what are you doing to our once great institution?",
  "Ben remains bottom, no hope in sight. But he makes great soap",
];

  const monthlyForm = [
  {
    manager: "George: Kinder Mbuemo ⭐",
    points: 67,
    record: "W-L-L-W-W",
    trend: "Steady",
    note: "Insufferable form. Still nervous for some reason",
  },
  {
    manager: "Reu: Boly and Clyde ⭐⭐",
    points: 65,
    record: "L-L-W-W-W",
    trend: "Steady",
    note: "Awful post-redraft form turning around.",
  },
  {
    manager: "Jonnie: Mr Main Character",
    points: 57,
    record: "W-W-L-W-L",
    trend: "Steady",
    note: "Shows character but has 'officially' dipped out of the title race.",
  },
  {
    manager: "Jack: Daynamo Dresden",
    points: 54,
    record: "W-L-L-L-W",
    trend: "Up",
    note: "Catching up to third. A late podium charge?",
  },
  {
    manager: "Matthew: BEYRELY LEGAL",
    points: 51,
    record: "W-W-L-L-L",
    trend: "Down",
    note: "Is he even here? Does he want to be?",
  },
    {
    manager: "Daniel: Utter Stoke Nonsense",
    points: 51,
    record: "L-L-W-L-W",
    trend: "Steady",
    note: "Currently raigbaiting everyone's GWs, wtf is that midfield.",
  },
    {
    manager: "Tristan: Dust to Dier",
    points: 43,
    record: "L-W-W-W-L",
    trend: "Up",
    note: "Fighting to be the best ape",
  },
      {
    manager: "Josh: Lord's legends",
    points: 43,
    record: "W-W-W-L-W",
    trend: "Down",
    note: "A good redraft pulls him away from total embarassment.",
  },
        {
    manager: "Jim: Big Ape ⭐⭐",
    points: 41,
    record: "L-W-L-W-L",
    trend: "Down",
    note: "This once great manager is lucky the below exists.",
  },
        {
    manager: "Ben: The Clown",
    points: 34,
    record: "L-L-W-L-L",
    trend: "Steady",
    note: "Last must be freeing, I hope.",
  },
];

const monthlyAwards = [
  {
    title: "Fine-Doping Scandal",
    winner: "Multiple managers",
    text: "Bogey teams missed, transfer lists vanished and the Draft Room chat polluted — all in a desperate attempt not to finish last and cheapest.",
  },
  {
    title: "Manager of the Month",
    winner: "George",
    text: "Top of the table, top dog & can't stop scoring big points. Can he make it?",
  },
  {
    title: "Comeback Threat",
    winner: "Reuben",
    text: "Awful post-redraft form has suddenly turned into wins, points and a worrying sense that the third star nonsense may not be dead.",
  },
  {
    title: "Main Character Collapse",
    winner: "Jonnie",
    text: "Has officially left the title race, subject to immediate re-entry upon any fixture swings.",
  },
  {
    title: "Best Ape Battle",
    winner: "Tristan, Josh & Jim",
    text: "Three managers locked in a guerilla warfare to decide who is the king of the jungle.",
  },
  {
    title: "Public Service Award",
    winner: "Ben",
    text: "Bravely occupying last place so several other managers can continue pretending they are having acceptable seasons.",
  },
];

const leadImage = "/images/lead-story.jpg";

const handleMemeRedirect = (type) => {
  const memeLinks = {
    login: "https://gatherguests.com/amna-and-reuben",
    subscribe: "https://monzo.me/reubentong?h=bPZ601&account_type=personal",
  };

  window.location.href = memeLinks[type];
};

  const renderNewsTab = () => (
    <div style={styles.layout} className="main-layout">
      <section>
        <h3 style={styles.sectionTitle}>Latest outrage</h3>
        <div style={styles.grid} className="article-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} style={styles.card}>
              {article.image && (
  <img src={article.image} alt={article.title} style={styles.articleImage} />
)}
              <div style={styles.category}>{article.category}</div>
              <h4 style={styles.cardTitle}>{article.title}</h4>
              <p style={styles.cardSummary}>{article.summary}</p>
              <button style={styles.button} onClick={() => setSelectedArticle(article)}>
                Read
              </button>
            </article>
          ))}
        </div>
      </section>

      <aside>
      <div style={styles.sidebarBox}>
        <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>League bulletin</h3>

        {leagueBulletin.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.feedItem,
              borderBottom:
                index === leagueBulletin.length - 1 ? "none" : styles.feedItem.borderBottom,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={styles.sidebarBox}>
        <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Tonight's outrage</h3>
        <p style={{ ...styles.cardSummary, marginBottom: 10 }}>
          "Fine-doping has exposed the moral bankruptcy at the heart of this once-proud league."
        </p>
        <p style={{ ...styles.cardSummary, marginBottom: 0 }}>
          More coverage when the next manager pretends they forgot the rules by accident. 
          Text your thoughts @ 0121
        </p>
      </div>

      <div style={styles.sidebarBox}>
        <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Pressure watch</h3>
        <ol
          style={{
            margin: 0,
            paddingLeft: 18,
            color: "#44403c",
            lineHeight: 1.9,
            fontWeight: 700,
          }}
        >
          <li>George — two-point lead, emotional security fraying</li>
          <li>Reuben — groom turned bridesmaid</li>
          <li>Jonnie — title race exit currently under appeal</li>
          <li>Jack — podium creep causing institutional concern</li>
          <li>404 Manager Not Found</li>
          <li>404 Manager Not Found</li>
          <li>Battle of the Apes - together strong</li>
          <li>Ben - shitting not quitting</li>
        </ol>
      </div>
      </aside>
    </div>
  );

const renderVideoTab = () => (
  <div>
    <h3 style={styles.sectionTitle}>Viral clips</h3>

    <div style={{ ...styles.sidebarBox, marginBottom: 18 }}>
      <div style={styles.category}>Now circulating</div>
      <p style={{ ...styles.cardSummary, marginBottom: 0 }}>
        Grainy footage, suspicious edits, and clips your legal team would strongly prefer you did not forward.
      </p>
    </div>

    <div style={styles.clipGrid} className="clip-grid">
      {videos.map((video, index) => (
        <div key={index} style={styles.clipCard}>
          <div style={styles.clipFrame}>
            <video
              src={video.clip}
              poster={video.image}
              controls
              playsInline
              preload="metadata"
              style={styles.clipVideo}
            />

            <div style={styles.clipBadge}>{video.tag}</div>
            <div style={styles.clipLength}>{video.length}</div>
          </div>

          <h4 style={styles.clipTitle}>{video.title}</h4>
          <p style={styles.clipSummary}>{video.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

  const renderSocialTab = () => (
    <div style={styles.layout} className="main-layout">
      <section>
        <h3 style={styles.sectionTitle}>Social feed</h3>
        {socialPosts.map((post, index) => (
          <SocialCard key={index} post={post} />
        ))}
      </section>

      <aside>
        <div style={styles.sidebarBox}>
          <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Trending topics</h3>
          <div style={{ color: "#44403c", lineHeight: 1.95, fontWeight: 700 }}>
            <div>#GEOvJB</div>
            <div>#AreMulletsCool</div>
            <div>#StraitOfHomos</div>
            <div>#DuckableOffence</div>
          </div>
        </div>

        <div style={styles.sidebarBox}>
          <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Most shared</h3>
          {latestHeadlines.map((headline, index) => (
            <div
              key={index}
              style={{
                ...styles.feedItem,
                borderBottom:
                  index === latestHeadlines.length - 1 ? "none" : styles.feedItem.borderBottom,
              }}
            >
              {headline}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );

  const renderSportsTab = () => (
  <div style={styles.layout} className="main-layout">
    <section>
      <h3 style={styles.sectionTitle}>Last month in the league</h3>

      <div style={{ ...styles.card, marginBottom: 18 }}>
        <div style={{ ...styles.category, marginBottom: 14 }}>Form table</div>

        <div style={{ display: "grid", gap: 10 }}>
          {monthlyForm.map((row, index) => (
            <div
              key={row.manager}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1.2fr 100px 120px 110px",
                gap: 12,
                alignItems: "center",
                padding: "12px 0",
                borderBottom:
                  index === monthlyForm.length - 1 ? "none" : "1px solid #ece6dc",
              }}
            >
              <div style={{ fontWeight: 900, color: "#8b231d" }}>#{index + 1}</div>
              <div>
                <div style={{ fontWeight: 900, color: "#18181b" }}>{row.manager}</div>
                <div style={{ fontSize: 13, color: "#78716c" }}>{row.note}</div>
              </div>
              <div style={{ fontWeight: 800 }}>{row.points} pts</div>
              <div style={{ color: "#44403c", fontWeight: 700 }}>{row.record}</div>
              <div
                style={{
                  fontWeight: 800,
                  color:
                    row.trend === "Up"
                      ? "#166534"
                      : row.trend === "Down"
                      ? "#b91c1c"
                      : "#57534e",
                }}
              >
                {row.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <aside>
      <div style={styles.sidebarBox}>
        <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Monthly awards</h3>
        {monthlyAwards.map((award, index) => (
          <div
            key={index}
            style={{
              padding: "12px 0",
              borderBottom:
                index === monthlyAwards.length - 1 ? "none" : "1px solid #ece6dc",
            }}
          >
            <div style={{ ...styles.category, marginBottom: 6 }}>{award.title}</div>
            <div style={{ fontWeight: 900, marginBottom: 4 }}>{award.winner}</div>
            <div style={{ color: "#57534e", lineHeight: 1.6, fontSize: 14 }}>
              {award.text}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.sidebarBox}>
        <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Power metric</h3>
        <div style={{ color: "#44403c", lineHeight: 1.9, fontWeight: 700 }}>
          <div>Confidence index: all time low</div>
          <div>Bench regret: season peak</div>
          <div>Fine admission: elevated</div>
          <div>General Patter: completely out of pocket</div>
        </div>
      </div>
    </aside>
  </div>
);

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
@media (max-width: 900px) {
  .main-layout { grid-template-columns: 1fr !important; }
  .article-grid { grid-template-columns: 1fr !important; }
  .clip-grid { grid-template-columns: 1fr !important; }
  .hero-inner { grid-template-columns: 1fr !important; text-align: center !important; }
  .hero-title { font-size: 32px !important; }
  .tab-row { flex-wrap: wrap; }
  .topbar-inner { flex-direction: column !important; align-items: flex-start !important; }
  .tenable-grid { grid-template-columns: 1fr !important; }
}
        input::placeholder { color: #9ca3af; }
      `}</style>

      <header>
<div style={styles.topbar}>
<div style={styles.topbarInner} className="topbar-inner">
      <div style={styles.brandBlock}>
      <div style={styles.strap}>Draft News, twenty-four hours a day</div>
      <h1 style={styles.brand}>The Daily Gremlin</h1>
    </div>

    <div style={styles.headerActions}>
      <button
        style={styles.loginButton}
        onClick={() => handleMemeRedirect("login")}
      >
        Login
      </button>

      <button
        style={styles.subscribeButton}
        onClick={() => handleMemeRedirect("subscribe")}
      >
        Subscribe
      </button>
    </div>
  </div>
</div>

        <div style={styles.tickerWrap}>
          <div style={styles.tickerTrack}>
            {tickerItems.concat(tickerItems).map((item, index) => (
              <span key={index} style={{ marginRight: 40 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main style={styles.container}>
<section style={styles.hero}>
  <div style={styles.heroInner} className="hero-inner">
    <div style={styles.heroCopy}>
      <div style={styles.heroKicker}>Lead story</div>

      <h2 style={styles.heroTitle} className="hero-title">
        Rumble in Reu's Tumble
      </h2>

      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <button style={styles.button} onClick={() => setSelectedArticle(articles[0])}>
          Read top story
        </button>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search scandals..."
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.1)",
            minWidth: 240,
            maxWidth: 280,
            fontSize: 14,
            background: "rgba(255,255,255,0.92)",
            color: "#1c1917",
            outline: "none",
          }}
        />
      </div>
    </div>

    <div style={styles.heroImageWrap}>
      <img src={leadImage} alt="Lead story" style={styles.heroImage} />
      <div style={styles.heroImageBadge}>Gremlin exclusive</div>
    </div>
  </div>
</section>

        <div style={{ display: "flex", gap: 10, marginBottom: 24 }} className="tab-row">
          {[
            ["news", "News"],
            ["video", "Viral Clips"],
            ["social", "Social Feed"],
            ["league", "League"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={
                activeTab === key
                  ? styles.button
                  : styles.subtleButton
              }
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === "news" && renderNewsTab()}
        {activeTab === "video" && renderVideoTab()}
        {activeTab === "social" && renderSocialTab()}
        {activeTab === "league" && renderSportsTab()}
      </main>

      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}