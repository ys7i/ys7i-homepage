import "./Symbol.scss";

import { BiSolidCoinStack } from "solid-icons/bi";
import { AppText } from "~/components/atoms/text/Text";

interface AppSymbolProps {
  iconColorSecondary?: boolean;
}

export function AppSymbol({ iconColorSecondary = false }: AppSymbolProps) {
  return (
    <div class="flex-start">
      <BiSolidCoinStack
        size="50px"
        classList={{
          "color-primary": !iconColorSecondary,
          "coin-icon": true,
          "color-secondary": iconColorSecondary,
        }}
      />
      <AppText variant="h6" text={<>ys7i.com</>} />
    </div>
  );
}
