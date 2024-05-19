import Styles from "./CardsListSection.module.css";
import { Card } from "../Card/Card";
import Link from "next/link";

export const CardsList = (props) => {
  return (
    <ul className={Styles["cards-list"]}>
      {props.data.map((item, index) => {
        return (
          <li className={Styles["cards-list__item"]} key={index}>
            <Link
              href={`/games/${item.id}`}
              className={Styles["card-list__link"]}
            >
              <Card {...item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
