import { AppText } from "~/components/atoms/text/Text";
import "./BlogCard.scss";
import dayjs from "dayjs";
import { useNavigate } from "solid-start";

interface CardProps {
  image: string;
  title: string;
  description: string;
  createdAt: string;
  id: string;
}

export function BlogCard({
  title,
  image,
  description,
  createdAt,
  id,
}: CardProps) {
  const navigate = useNavigate();
  return (
    <div
      class="app-card"
      onClick={() => {
        navigate(`/blog/${id}`);
      }}
    >
      <div class="card-top">
        <div class="card-photo-wrapper">
          <img src={image} />
        </div>
      </div>
      <div id="card-content-wrapper">
        <AppText
          variant="caption"
          text={dayjs(createdAt).format("YYYY.MM.DD")}
          inputClass="text-align-start dark-primary"
        />
        <div id="card-content">
          <AppText
            variant="h6"
            text={title}
            inputClass="text-align-start primary"
          />
          <AppText
            variant="p"
            text={description}
            inputClass="text-align-start dark-primary blog-card-summary"
          />
        </div>
      </div>
    </div>
  );
}
