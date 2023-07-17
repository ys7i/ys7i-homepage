import { AppText } from "~/components/atoms/text/Text";
import "./MiniCard.scss";

interface MiniCardProps {
  title: string;
  src: string;
}

export function MiniCard({ title, src }: MiniCardProps) {
  return (
    <div class="mini-card">
      <img class="mini-card-img" src={src} />
      <AppText variant="h5" text={title} />
    </div>
  );
}
