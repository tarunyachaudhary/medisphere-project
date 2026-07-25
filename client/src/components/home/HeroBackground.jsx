import bgImage from "/russia-bg.png";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Russia Background */}
      <img
        src={bgImage}
        alt="Russia-bg"
        className="absolute inset-0 w-full h-full object-cover object-right justify-content"
      />

      {/* White overlay on left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.95) 25%, rgba(255,255,255,.70) 45%, rgba(255,255,255,.20) 70%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Light blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-transparent to-white" />

      {/* Blur Circle */}
      <div className="absolute top-16 left-24 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px]" />
    </div>
  );
}
