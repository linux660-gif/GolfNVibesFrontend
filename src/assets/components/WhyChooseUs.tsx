import "./WhyChooseUs.css";

const Feature = ({ title, text, img, reverse = false }: { title: string; text: string; img: string; reverse?: boolean }) => {
  return (
    <div className={`feature ${reverse ? "reverse" : ""}`}>
      <div className="feature-image">
        <img src={img} alt={title} />
      </div>
      <div className="feature-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <h2 className="title">Why to choose US?</h2>

      <Feature
        title="Simple integration"
        text="Use the LocaleData gem to download translations directly into your Ruby on Rails projects using the provided command line interface. Just create a project and follow the step-by-step instructions."
        img="https://picsum.photos/400/240"
      />

      <Feature
        title="Easy collaboration"
        text="All LocaleData projects are private. Each project can have multiple collaborators with different roles and access permissions. You determine who can see and edit your translations."
        img="https://picsum.photos/400/240"
        reverse
      />

      <Feature
        title="No more syntax errors"
        text="LocaleData provides you easy import/export functions for your YAML files. Use a simple editor with many predefined languages to manage your locales."
        img="https://picsum.photos/400/240"
      />

      <Feature
        title="Bulk editing"
        text="Do you need to change the path of many translation keys at once? No problem, just use the bulk editing feature and enjoy the results."
        img="https://picsum.photos/400/240"
        reverse
      />
    </div>
  );
};

export default WhyChooseUs;
