import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function HeroImageAndSearch() {
  return (
    <MDBCarousel interval="3000">
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="/Users/andrewbeaven/Desktop/rose-barrel/public/steak.jpeg"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://mdbootstrap.com/img/new/slides/042.jpg"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://mdbootstrap.com/img/new/slides/043.jpg"
        alt="..."
      />
    </MDBCarousel>
  );
}
