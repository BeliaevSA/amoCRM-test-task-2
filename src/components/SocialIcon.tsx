import { FC } from "react";

interface ISocialIcon {
  href: string;
  value: string;
}

export const SocialIcon: FC<ISocialIcon> = ({ href, value }) => {
  return (
    <a href={href}>
      <img
        alt={value}
        src={require(`../assets/images/${value}.png`)}
      />
    </a>
  );
};
