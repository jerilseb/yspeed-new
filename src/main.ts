import { sleep, LOG, debounce } from "./util";
import fastIcon from "./icons/faster2.svg";


window.addEventListener("load", async () => {
    await sleep(1000);
    let container = document.querySelector(".html5-video-player") as HTMLElement;
    let video = container.querySelector("video");

    const ysContainer = document.createElement("div");
    ysContainer.setAttribute("class", "ys-container");
    let height = container.getBoundingClientRect().height;
    ysContainer.style.setProperty("--ys-video-scale", Math.floor(height / 100) + "px");

    container.appendChild(ysContainer);

    function setSpeed(speed): void {
        video.playbackRate = speed;
        speedIndicator.textContent = parseFloat(speed.toFixed(1)) + "x";
        animation.currentTime = 0;
        animation.play();
    }

    const speedIndicator = document.createElement("div");
    speedIndicator.setAttribute("class", "ys-speed-indicator");
    ysContainer.appendChild(speedIndicator);


    const speedbar = document.createElement("div");
    speedbar.setAttribute("class", "ys-speed-bar");
    ysContainer.appendChild(speedbar);

    for(let i = 0; i<11; i+=1) {
        const speed = 1+i/10;
        const speedItem = document.createElement("div");
        speedItem.setAttribute("class", "ys-speed-item");
        speedItem.setAttribute("data-speed", (1 + i/10).toFixed(1));
        speedItem.textContent = `${speed}x`;
        speedbar.appendChild(speedItem);

        speedItem.addEventListener("click", () => {
          setSpeed(speed);
        });
    }



  const animation = new Animation(
    new KeyframeEffect(
      speedIndicator,
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 1,
          transform: "scale(1)",
          offset: 0.3,
        },
        {
          opacity: 0,
          transform: "scale(1.6)",
        },
      ],
      {
        duration: 800,
        fill: "forwards",
        easing: "ease-in",
      }
    )
  );

  const setVideoScale = debounce((height) => {
    console.log("Setting video scale to", height);
    ysContainer.style.setProperty("--ys-video-scale", Math.floor(height / 100) + "px");
  }, 300);

  new window.ResizeObserver((entries) => {
    for (const target of entries) {
      setVideoScale(target.contentRect.height);
    }
  }).observe(container);
});
