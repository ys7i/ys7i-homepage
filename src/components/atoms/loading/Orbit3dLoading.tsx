import { Show } from "solid-js";
import "./Orbit3dLoading.scss";

export function Orbit3dLoading() {
  return (
    <>
      <div class="spinner-box">
        <div class="blue-orbit leo"></div>

        <div class="green-orbit leo"></div>

        <div class="red-orbit leo"></div>

        <div class="primary-orbit w1 leo"></div>
        <div class="primary-orbit w2 leo"></div>
        <div class="primary-orbit w3 leo"></div>
      </div>
    </>
  );
}
