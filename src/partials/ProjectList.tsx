import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6 ">
      <Project
        name="SpaceX Launch Viewer"
        description="Dive into the future of space exploration with my latest project, the SpaceX Launch Viewer. Using cutting-edge technologies like Astro for lightning-fast performance and Tailwind CSS for sleek design, this web application fetches real-time data from SpaceX's API to display the most recent rocket launches."
        link="https://github.com/tdelgio/astro-tailwind"
        img={{
          src: "/assets/images/rocket.png",
          alt: "Project Web Design",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="CompartIr"
        description="Powered by Firebase for real-time updates and React for a smooth, interactive interface, CompartIr revolutionizes how we travel together. Whether you're planning a road trip or a daily commute, the app simplifies the process, promoting sustainability and community connections."
        link="https://test.compartir.viajes"
        img={{ src: "/assets/images/project-maps.png", alt: "Project Fire" }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Firebase</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.RED}>MaterialUI</Tags>
          </>
        }
      />
      <Project
        name="Āina Bakery"
        description="Using React's dynamic capabilities, Dough & Delights Bakery showcases our passion for baking and technology, offering a seamless online experience to explore our menu, place orders, and savor the magic of freshly baked delights."
        link="https:///ainaproject.netlify.app"
        img={{ src: "/assets/images/cart.png", alt: "Project Maps" }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>React</Tags>
            <Tags color={ColorTags.FUCHSIA}>E-Commerce</Tags>
            <Tags color={ColorTags.INDIGO}>Tailwind</Tags>
          </>
        }
      />
      <Project
        name="The Juicy Pause"
        description="A dynamic platform merging captivating podcasts and insightful blogs, leveraging GatsbyJS, Tailwind CSS, and Contentful. Immerse yourself in a rich experience, seamlessly transitioning between engaging audio content and thought-provoking articles."
        link="https://thejuicypause.com"
        img={{ src: "/assets/images/mic-iso.png", alt: "Project Maps" }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>Blog</Tags>
            <Tags color={ColorTags.INDIGO}>Tailwind</Tags>
            <Tags color={ColorTags.ROSE}>React</Tags>
            <Tags color={ColorTags.GREEN}>Contentful</Tags>
            <Tags color={ColorTags.YELLOW}>GraphQL</Tags>
          </>
        }
      />
      <Project
        name="Benalcons"
        description="Portfolio Showcase, a dynamic platform powered by React, designed to highlight our company's exceptional work. Seamlessly presented in both English and Spanish, this website invites you to explore our diverse projects and services"
        link="https://benalcons.com"
        img={{ src: "/assets/images/plumbing.png", alt: "Project Maps" }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>GraphQL</Tags>
            <Tags color={ColorTags.INDIGO}>Tailwind</Tags>
            <Tags color={ColorTags.ROSE}>React</Tags>
            <Tags color={ColorTags.GREEN}>Contentful</Tags>
            <Tags color={ColorTags.YELLOW}>i18n</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
