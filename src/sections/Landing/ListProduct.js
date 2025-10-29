import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import ItemProduct from "../../components/ItemProduct";
import { PRODUCT_ITEMS } from "./constant";

function ListProduct() {
  const horizontalRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      orientation: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // xử lý section ngang
    const horizontal = horizontalRef.current;
    const onScroll = ({ scroll }) => {
      if (!horizontal) return;

      const rect = horizontal.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom > 0;

      if (isInView) {
        const progress =
          Math.min(
            1,
            Math.max(0, (window.innerHeight - rect.top) / rect.height)
          ) *
          (horizontal.scrollWidth - window.innerWidth);

        horizontal.scrollLeft = progress;
      }
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="horizontal-wrapper">
      <div className="horizontal" ref={horizontalRef}>
        {PRODUCT_ITEMS.map((item, i) => (
          <ItemProduct
            key={i}
            srcImage={item.src}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
export default ListProduct;
