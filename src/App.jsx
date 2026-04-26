import React, { useMemo, useState } from "react";

const articles = [
  {
    id: 1,
    category: "Breaking",
    title: "League in Turmoil After Ben Claims His Fifth-Round Pick Was 'Generational'",
    summary:
      "Pundits are calling for calm after a completely ordinary midfielder was described as a draft-day masterstroke.",
    body: `A furious row has broken out across the league after Ben referred to his fifth-round selection as a 'generational talent'. Critics say the player in question is, at best, decent. Supporters argue that confidence is part of the game.\n\nThe WhatsApp chat descended into chaos within minutes, with one manager posting three laughing emojis, another demanding a statistical breakdown, and a third insisting that 'this will age well'. It probably won't.\n\nStill, Ben remains defiant. 'You'll all see,' he said, before immediately offering the player in a trade.`,
  },
  {
    id: 2,
    category: "Exclusive",
    title: "Dave Denies Panic Transfer Was Panic Transfer Despite Completing It at 1:58am",
    summary:
      "Late-night activity raises questions about process, patience, and whether anyone should be trusted with the app after midnight.",
    body: `Dave has strongly rejected accusations that his latest transfer move was driven by panic, even though he completed it two minutes before 2am and followed it with the message: 'I've had to act fast'.\n\nSources close to the situation say there was no new information, no injury update, and no tactical revelation. There was, however, a sudden emotional reaction to someone else's screenshot.\n\nAnalysts say the move may yet work out, but concerns remain over the broader principle of allowing vibes to govern squad planning.`,
  },
  {
    id: 3,
    category: "Opinion",
    title: "Opinion: Triple Captain Talk Has Completely Destroyed Standards in This League",
    summary:
      "What was once a strategic discussion has become a festival of overreaction, false certainty, and suspicious fixture optimism.",
    body: `There was a time when fantasy football discussion involved careful reasoning. That time has passed.\n\nNow every chip conversation turns instantly into a sermon. One decent fixture is enough for someone to call it a 'season-defining moment', while every hesitation is treated like cowardice.\n\nThe result is a culture in which nobody can simply wait and see. Everything must be announced, defended, and dramatically over-framed. It is exhausting. It is also, regrettably, excellent content.`,
  },
  {
    id: 4,
    category: "Investigation",
    title: "Serious Questions Asked After Rob Starts Talking About 'Underlying Numbers' Again",
    summary:
      "Not for the first time, the league has been forced to listen to an argument involving xG, heatmaps, and complete delusion.",
    body: `Rob's latest defence of a terrible asset has centred on what he describes as 'encouraging underlying numbers'. Observers note that while the charts look colourful, the player's actual returns remain deeply theoretical.\n\nThe debate has reopened a long-running divide in the league between managers who watch games, managers who watch numbers, and managers who watch neither but talk the loudest.\n\nFor now, the argument continues. Nobody has changed their mind, but several people have become more annoying.`,
  },
  {
    id: 5,
    category: "Feature",
    title: "Price Drop Emergency Declared After Squad Value Falls By £0.1",
    summary:
      "A minor market movement triggers major emotional scenes and at least four messages containing the phrase 'this changes everything'.",
    body: `Emergency procedures were activated this morning after one manager discovered a 0.1 drop in squad value and reacted as though the financial system itself had collapsed.\n\nWitnesses report frantic calculations, premature wildcard talk, and one especially dramatic voice note that began with the words: 'Right, so basically we're finished.'\n\nExperts have since confirmed that everyone will probably survive. The manager concerned has not commented, mainly because he is still rebuilding his team planner.`,
  },
  {
    id: 6,
    category: "Culture",
    title: "Power Ranking the League's Excuses, from 'Unlucky' to 'The Game Has Gone'",
    summary:
      "A full review of the explanations managers reach for when their punts collapse in public.",
    body: `Every bad gameweek creates fallout, but only the elite excuse-makers can turn failure into performance art.\n\nAt number one is the timeless classic: 'unlucky'. Flexible, familiar, and impossible to disprove. A close second is 'the fixtures lied', followed by the increasingly desperate 'I still think the process was right'.\n\nAt the bottom sits the most dramatic line of all: 'the game has gone'. Usually delivered after benching twelve points. Always sincere. Never helpful.`,
  },
];

const tickerItems = [
  "BREAKING: Emergency summit called after another benching disaster",
  "LIVE: Tom says his team is 'set up nicely' despite obvious structural flaws",
  "ALERT: One manager already discussing wildcard strategy in week two",
  "JUST IN: Trade offer described by sources as 'personally offensive'",
];

const feed = [
  "Most read: Ben's outrageous self-appraisal sparks backlash",
  "Trending now: the 1:58am transfer nobody can justify",
  "Panel verdict: 'underlying numbers' defence collapses under basic scrutiny",
  "League table watch: suspicious confidence from mid-table managers",
  "Coming up: power rankings, excuses special, and another captaincy crisis",
];

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f4f5",
    color: "#111827",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  topbar: {
    background: "#111111",
    color: "white",
    padding: "18px 24px",
    borderBottom: "4px solid #b91c1c",
  },
  brand: {
    fontSize: "34px",
    fontWeight: 900,
    letterSpacing: "0.5px",
    margin: 0,
  },
  strap: {
    marginTop: 4,
    color: "#fca5a5",
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  tickerWrap: {
    background: "#b91c1c",
    color: "white",
    overflow: "hidden",
    whiteSpace: "nowrap",
    padding: "10px 0",
    fontWeight: 700,
    fontSize: 14,
  },
  tickerTrack: {
    display: "inline-block",
    paddingLeft: "100%",
    animation: "ticker 26s linear infinite",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: 24,
  },
  hero: {
    background: "linear-gradient(135deg, #111111, #2b2b2b)",
    color: "white",
    borderRadius: 20,
    padding: 28,
    marginBottom: 24,
  },
  heroKicker: {
    color: "#f87171",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 42,
    lineHeight: 1.1,
    margin: "0 0 12px 0",
    fontWeight: 900,
  },
  heroText: {
    fontSize: 18,
    color: "#e5e7eb",
    maxWidth: 760,
    marginBottom: 18,
  },
  button: {
    background: "#b91c1c",
    color: "white",
    border: 0,
    borderRadius: 10,
    padding: "12px 16px",
    fontWeight: 700,
    cursor: "pointer",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 900,
    margin: "0 0 16px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  card: {
    background: "white",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
  },
  category: {
    color: "#b91c1c",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 1.2,
    margin: "0 0 10px 0",
    fontWeight: 900,
  },
  cardSummary: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 1.6,
    marginBottom: 14,
  },
  sidebarBox: {
    background: "white",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    marginBottom: 16,
  },
  feedItem: {
    padding: "10px 0",
    borderBottom: "1px solid #e5e7eb",
    fontWeight: 700,
    fontSize: 14,
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.72)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  modal: {
    background: "white",
    width: "100%",
    maxWidth: 860,
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: 22,
    padding: 28,
    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
  },
  modalTitle: {
    fontSize: 38,
    lineHeight: 1.1,
    margin: "8px 0 14px 0",
    fontWeight: 900,
  },
  modalBody: {
    fontSize: 17,
    color: "#374151",
    lineHeight: 1.8,
    whiteSpace: "pre-line",
  },
  closeRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
};

function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.closeRow}>
          <div style={styles.category}>{article.category}</div>
          <button style={styles.button} onClick={onClose}>Close</button>
        </div>
        <h2 style={styles.modalTitle}>{article.title}</h2>
        <p style={{ ...styles.cardSummary, fontSize: 17 }}>{article.summary}</p>
        <div style={styles.modalBody}>{article.body}</div>
      </div>
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
      title: "Deadline Night Meltdown",
      summary: "Live studio coverage as one manager explains a clearly disastrous transfer plan with total confidence.",
      length: "12:41",
    },
    {
      title: "Captaincy Crisis Tonight",
      summary: "A primetime debate on whether one decent fixture has been wildly over-interpreted by half the league.",
      length: "8:16",
    },
    {
      title: "Benchwatch Special",
      summary: "Full analysis of points left stranded on the bench, complete with dramatic language and hindsight.",
      length: "10:03",
    },
    {
      title: "Trade Offer Tribunal",
      summary: "Experts review a proposal described by insiders as shameless, unserious, and spiritually offensive.",
      length: "6:54",
    },
  ];

  const socialPosts = [
    {
      handle: "@DraftAlarm",
      name: "Draft Alarm",
      post: "BREAKING: A manager has described his wildcard draft as 'basically done' despite having seven unresolved positions.",
    },
    {
      handle: "@BenchTruths",
      name: "Bench Truths",
      post: "We've obtained screenshots suggesting one member of the league said 'I actually like my team' and meant it.",
    },
    {
      handle: "@xGandVibes",
      name: "xG & Vibes",
      post: "Rob back on the timeline explaining that returns are coming soon. The timeline remains unconvinced.",
    },
    {
      handle: "@FPL24Studio",
      name: "FPL 24 Studio",
      post: "Tonight at 9: can confidence alone carry a mid-table manager through another terrible captaincy call?",
    },
  ];

  const latestHeadlines = [
    "Manager insists poor gameweek was actually a sign the strategy is working",
    "League split after emergency podcast episode reaches 47 minutes with no useful conclusions",
    "Pressure mounts on previously smug frontrunner after ordinary back-to-back scores",
    "Mystery deepens as same bad punt is described for a third week as 'one to monitor'",
  ];

  const renderNewsTab = () => (
    <div style={styles.layout} className="main-layout">
      <section>
        <h3 style={styles.sectionTitle}>Latest outrage</h3>
        <div style={styles.grid} className="article-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} style={styles.card}>
              <div style={styles.category}>{article.category}</div>
              <h4 style={styles.cardTitle}>{article.title}</h4>
              <p style={styles.cardSummary}>{article.summary}</p>
              <button style={styles.button} onClick={() => setSelectedArticle(article)}>
                Click through
              </button>
            </article>
          ))}
        </div>
      </section>

      <aside>
        <div style={styles.sidebarBox}>
          <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>News feed</h3>
          {feed.map((item, index) => (
            <div key={index} style={{ ...styles.feedItem, borderBottom: index === feed.length - 1 ? "none" : styles.feedItem.borderBottom }}>
              {item}
            </div>
          ))}
        </div>

        <div style={styles.sidebarBox}>
          <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Tonight's line</h3>
          <p style={{ ...styles.cardSummary, marginBottom: 10 }}>
            "The league is losing its tactical standards and nobody is prepared to say it."
          </p>
          <p style={{ ...styles.cardSummary, marginBottom: 0 }}>
            More coverage at 8pm, 9pm, 10pm, and whenever someone posts a catastrophic bench screenshot.
          </p>
        </div>

        <div style={styles.sidebarBox}>
          <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Power rankings</h3>
          <ol style={{ margin: 0, paddingLeft: 18, color: "#374151", lineHeight: 1.8, fontWeight: 700 }}>
            <li>Ben - too confident</li>
            <li>Alex - annoyingly stable</li>
            <li>Josh - one good week, unbearable since</li>
            <li>Dave - under formal review</li>
          </ol>
        </div>
      </aside>
    </div>
  );

  const renderVideoTab = () => (
    <div>
      <h3 style={styles.sectionTitle}>Video</h3>
      <div style={styles.grid} className="article-grid">
        {videos.map((video, index) => (
          <div key={index} style={styles.card}>
            <div
              style={{
                background: "linear-gradient(135deg, #7f1d1d, #111111)",
                borderRadius: 14,
                height: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 54,
                fontWeight: 900,
                marginBottom: 16,
                position: "relative",
              }}
            >
              ▶
              <div
                style={{
                  position: "absolute",
                  right: 12,
                  bottom: 12,
                  background: "rgba(0,0,0,0.7)",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              >
                {video.length}
              </div>
            </div>
            <div style={styles.category}>Studio feed</div>
            <h4 style={styles.cardTitle}>{video.title}</h4>
            <p style={styles.cardSummary}>{video.summary}</p>
            <button style={styles.button}>Watch now</button>
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
          <div key={index} style={{ ...styles.card, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div>
                <div style={{ fontWeight: 900 }}>{post.name}</div>
                <div style={{ color: "#6b7280", fontSize: 14 }}>{post.handle}</div>
              </div>
              <div style={{ color: "#b91c1c", fontWeight: 800, fontSize: 14 }}>LIVE</div>
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.7, color: "#1f2937" }}>{post.post}</div>
          </div>
        ))}
      </section>

      <aside>
        <div style={styles.sidebarBox}>
          <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Trending topics</h3>
          <div style={{ color: "#374151", lineHeight: 1.9, fontWeight: 700 }}>
            <div>#CaptaincyFraud</div>
            <div>#BenchJustice</div>
            <div>#WildcardPanic</div>
            <div>#UnderlyingNumbersAgain</div>
          </div>
        </div>
        <div style={styles.sidebarBox}>
          <h3 style={{ ...styles.sectionTitle, fontSize: 20 }}>Most shared</h3>
          {latestHeadlines.map((headline, index) => (
            <div key={index} style={{ ...styles.feedItem, borderBottom: index === latestHeadlines.length - 1 ? "none" : styles.feedItem.borderBottom }}>
              {headline}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );

  const renderHeadlinesTab = () => (
    <div>
      <h3 style={styles.sectionTitle}>Main news</h3>
      <div style={{ display: "grid", gap: 14 }}>
        {latestHeadlines.map((headline, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.category}>Headline</div>
            <h4 style={{ ...styles.cardTitle, marginBottom: 0 }}>{headline}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 900px) {
          .main-layout { grid-template-columns: 1fr !important; }
          .article-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 30px !important; }
          .tab-row { flex-wrap: wrap; }
        }
        input::placeholder { color: #9ca3af; }
      `}</style>

      <header>
        <div style={styles.topbar}>
          <div style={styles.strap}>FPL draft outrage, twenty-four hours a day</div>
          <h1 style={styles.brand}>The Draft Meltdown Network</h1>
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
          <div style={styles.heroKicker}>Lead story</div>
          <h2 style={styles.heroTitle} className="hero-title">
            Outrage Grows After Multiple Managers Declare Their Teams 'Quietly Strong'
          </h2>
          <p style={styles.heroText}>
            A fake highly opinionated FPL draft news site for your friends, packed with nonsense headlines,
            dramatic coverage, fake clips, and social posts designed purely for group-chat warfare.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button style={styles.button} onClick={() => setSelectedArticle(articles[0])}>
              Read top story
            </button>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fake scandals"
              style={{
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid #d1d5db",
                minWidth: 240,
                fontSize: 14,
              }}
            />
          </div>
        </section>

        <div
          style={{ display: "flex", gap: 10, marginBottom: 24 }}
          className="tab-row"
        >
          {[
            ["news", "News"],
            ["headlines", "Main News"],
            ["video", "Video"],
            ["social", "Social Feed"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                ...styles.button,
                background: activeTab === key ? "#b91c1c" : "#ffffff",
                color: activeTab === key ? "#ffffff" : "#111827",
                border: activeTab === key ? "none" : "1px solid #d1d5db",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === "news" && renderNewsTab()}
        {activeTab === "headlines" && renderHeadlinesTab()}
        {activeTab === "video" && renderVideoTab()}
        {activeTab === "social" && renderSocialTab()}
      </main>

      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}
