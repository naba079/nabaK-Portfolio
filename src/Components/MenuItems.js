import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>
              Placeholder paragraph Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim beatae magnam assumenda laboriosam?
              Laudantium deleniti aliquam at provident corrupti. Totam laborum
              adipisci assumenda fugiat neque voluptas repellendus maxime
              repudiandae? Pariatur!
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
