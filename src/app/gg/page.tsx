"use client";
import { useState, useEffect } from "react";
export default function Nav() {
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa
      odit id assumenda earum, ratione provident, culpa minima repudiandae
      quibusdam sit eligendi aliquam nobis tempora quis odio molestiae magni
      aspernatur consectetur voluptatem placeat obcaecati nisi laudantium atque.
      Doloremque, culpa quam ad in recusandae eum adipisci, reiciendis aliquam
      at suscipit quas veritatis consequatur iusto necessitatibus esse aut totam
      autem tempore impedit? Ipsa iste eaque quia commodi ullam omnis corrupti
      totam nam aspernatur ex a mollitia modi eum dolorem dicta quod adipisci
      quisquam, inventore non facilis sunt. Porro asperiores facere non! Quae
      voluptas facere quas eligendi sequi molestiae possimus perferendis labore
      quam.
    </p>
    <Nn />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa
      odit id assumenda earum, ratione provident, culpa minima repudiandae
      quibusdam sit eligendi aliquam nobis tempora quis odio molestiae magni
      aspernatur consectetur voluptatem placeat obcaecati nisi laudantium atque.
      Doloremque, culpa quam ad in recusandae eum adipisci, reiciendis aliquam
      at suscipit quas veritatis consequatur iusto necessitatibus esse aut totam
      autem tempore impedit? Ipsa iste eaque quia commodi ullam omnis corrupti
      totam nam aspernatur ex a mollitia modi eum dolorem dicta quod adipisci
      quisquam, inventore non facilis sunt. Porro asperiores facere non! Quae
      voluptas facere quas eligendi sequi molestiae possimus perferendis labore
      quam.
    </p>
  </div>;
}

const Nn = () => {
  const [pos, setPos] = useState("top");
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement?.scrollTop!;
      if (scrolled >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);
  return (
    <div
      className="nav"
      style={{
        backgroundColor:
          pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, .5)",
      }}
    >
      // stuff inside the nav div
    </div>
  );
};
