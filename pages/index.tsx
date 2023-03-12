import type { NextPage } from "next";
import Head from "next/head";
import Thumbnail from "../components/Thumbnail";
import {
  SiDiscord,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiLua,
} from "react-icons/si";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>vphoebe.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        <h1 className="font-bold text-lg mt-4 mb-6 italic bg-indigo-50 text-indigo-600 py-1 px-4 rounded-sm">
          https://vphoebe.dev
        </h1>
        <div className="grid gap-x-8 gap-y-4 md:gap-y-8 grid-cols-1 md:grid-cols-2">
          <Thumbnail
            githubHref="https://github.com/vphoebe/beatnik"
            siteName="Beatnik"
            description="An easy to use Discord bot for YouTube in voice channels"
            icons={[SiTypescript, SiDiscord]}
          />
          <Thumbnail
            href="https://vphoebe.itch.io/salvatore"
            githubHref="https://github.com/vphoebe/salvatore"
            siteName="Salvatore"
            description="A grid-based ship-sinking game for Playdate"
            icons={[SiLua]}
          />
          <Thumbnail
            href="https://pkmn-tools.vphoebe.dev/type-chart"
            githubHref="https://github.com/vphoebe/pkmn-tools"
            siteName="Pokémon tools"
            description="Various tools for playing Pokémon games"
            icons={[SiTypescript, SiNextdotjs]}
          />
          <Thumbnail
            href="https://kojima-ipsum.vphoebe.dev"
            githubHref="https://github.com/vphoebe/kojima-ipsum"
            siteName="Kojima-ipsum"
            description="Generate lorem ipsum text using words from the works of Hideo Kojima"
            icons={[SiTypescript, SiNextdotjs]}
          />
          <Thumbnail
            href="https://hitsmas.vphoebe.dev"
            githubHref="https://github.com/vphoebe/hitsmas"
            siteName="Hitsmas generator"
            description="Generate random objectives for Hitman levels"
            icons={[SiTypescript, SiReact]}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
