import { BookOpenText, MessageCircleMore, Lightbulb, User, Home } from "lucide-react";

interface IconProps {
  name: "book-open-text" | "message-circle-more" | "lightbulb" | "user" | "home";
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const icons = {
    "book-open-text": BookOpenText,
    "message-circle-more": MessageCircleMore,
    "lightbulb": Lightbulb,
    "user": User,
    "home": Home
  };

  const IconComponent = icons[name];

  return <IconComponent className={className} />;
}
