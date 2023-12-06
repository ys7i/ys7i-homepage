import { AppText } from "~/components/atoms/text/Text";
import "./ReviewCard.scss";
import dayjs from "dayjs";
import { useNavigate } from "solid-start";
import LaunchIcon from "@suid/icons-material/Launch";

interface CardProps {
  image: string;
  title: string;
  summary: string;
  createdAt: string;
  id: string;
}

export function ReviewCard({
  title,
  image,
  summary,
  createdAt,
  id,
}: CardProps) {
  const navigate = useNavigate();
  return (
    <div
      id="review-card"
      onClick={() => {
        navigate(`/review/${id}`);
      }}
    >
      <div id="review-card-photo-wrapper">
        <img src={image} />
        <div id="review-hover-shadow">
          <AppText
            variant="caption"
            text={dayjs(createdAt).format("YYYY.MM.DD")}
            inputClass="text-align-start review-hover-text"
          />
          <AppText
            variant="caption"
            text={summary}
            inputClass="text-align-start review-hover-text"
          />
          <LaunchIcon id="right-alignment" />
        </div>
      </div>
      <div id="review-card-title">
        <AppText
          variant="h6"
          text={title}
          inputClass="text-align-start text-dark-primary"
        />
      </div>
    </div>
  );
}
