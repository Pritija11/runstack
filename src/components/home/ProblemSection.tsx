import ScrollReveal from "@/components/ui/ScrollReveal";

const problems = [
  {
    number: "01",
    title: "Deployments feel fragile",
    description:
      "Releases depend on manual steps, undocumented processes, or a single person who knows how everything works.",
  },
  {
    number: "02",
    title: "Cloud costs keep climbing",
    description:
      "Infrastructure grows faster than the systems used to understand, measure, and optimize what you are actually paying for.",
  },
  {
    number: "03",
    title: "Infrastructure becomes complex",
    description:
      "Containers, networking, databases, environments, secrets, and permissions become difficult to manage as the product grows.",
  },
  {
    number: "04",
    title: "Engineering time gets consumed",
    description:
      "Product engineers end up solving infrastructure problems instead of spending their time building the product.",
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="section-shell">
        <ScrollReveal className="section-intro">
          <div className="section-eyebrow">
            <span>02</span>
            THE INFRASTRUCTURE PROBLEM
          </div>

          <h2>
            Growth is good.
            <br />
            <em>Infrastructure debt isn't.</em>
          </h2>

          <p>
            Modern software moves quickly. The infrastructure underneath it
            has to keep pace without becoming a bottleneck for the people
            building the product.
          </p>
        </ScrollReveal>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <ScrollReveal
              as="article"
              className="problem-card"
              key={problem.number}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <span className="problem-number">{problem.number}</span>

              <div className="problem-card-content">
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>

              <span className="problem-corner">↗</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
