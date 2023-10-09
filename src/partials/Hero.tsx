import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Tomas</GradientText> 👋
        </>
      }
      description={
        <>
          My aspiration is to fully embrace the present, dedicating my time to
          continuous learning and focusing on significant projects such as
          coding, surfing, climbing, maintaining a healthy lifestyle and
          immersing myself in the wonders of nature. My main stack is{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://https://tailwindcss.com/"
          >
            Tailwind
          </a>{" "}
          -{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://legacy.reactjs.org/"
          >
            React
          </a>{" "}
          -{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            JS
          </a>
        </>
      }
      avatar={
        <img
          className="h-50 w-80 rounded-lg mt-6"
          src="/assets/images/td.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/tdelgio">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://linkedin.com/in/tdelgio">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
