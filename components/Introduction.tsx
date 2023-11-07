import TypeingEffect from "@/UI/TypeingEffect";

const Introduction = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 11,
          textAlign: "center",
          color: "white",
        }}
      >
        <header className="mb-16 group text-4xl">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There! <span className="inline-block animate-wave">👋🏻</span>
            {` I'm `}
            <strong className="text-blue-400 text-"> Nimit </strong>
          </h1>
          <TypeingEffect
            strings={["Software Engineer", "Web Dev"]}
            customCSS={"text-blue-500"}
          />
          <div className="text-4xl font-semibold md:text-3xl">
            developer by choice and designer for fun
          </div>
        </header>
      </div>
    </div>
  );
};
export default Introduction;
