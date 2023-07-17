import { Show } from "solid-js";
import "./CircleLoading.scss";

export function CircleLoading() {
  return (
    <>
      <div id="loading-wrapper">
        <div class="loading-inner-div">
          <div id="loading-text">LOADING</div>
        </div>
        <div id="loading-content"></div>
      </div>
    </>
  );
}
