import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ item }) {
  return (
    <div className={css.container}>
      <ul className={css.squareList}>
        {item.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
