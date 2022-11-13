import * as React from "react";
import { IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

type ThumbnailProps = {
  href?: string;
  githubHref: string;
  siteName: string;
  description: string;
  icons?: IconType[];
};

const LinkButton = ({ href, Icon }: { href: string; Icon: IconType }) => {
  return (
    <a
      href={href}
      className="flex-1 bg-indigo-50 justify-center flex items-center hover:bg-indigo-200 cursor-pointer transition-all"
    >
      <Icon />
    </a>
  );
};

const Thumbnail = ({
  href,
  githubHref,
  siteName,
  description,
  icons = [],
}: ThumbnailProps) => {
  return (
    <div className="border border-indigo-50 rounded h-full flex justify-between">
      <div className="flex flex-1 flex-col justify-center p-4">
        <div className="font-bold text-md">{siteName}</div>
        <div className="text-sm italic text-indigo-200">{description}</div>
        <div className="flex gap-2 mt-2">
          {icons.map((Icon) => (
            <Icon key={Icon.name} />
          ))}
        </div>
      </div>
      <div className="w-16 flex flex-col text-indigo-600 text-xl gap-y-px">
        {href ? <LinkButton href={href} Icon={FiExternalLink} /> : null}
        <LinkButton href={githubHref} Icon={SiGithub} />
      </div>
    </div>
  );
};

export default Thumbnail;
