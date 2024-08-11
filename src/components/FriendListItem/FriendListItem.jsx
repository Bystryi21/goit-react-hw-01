import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (
    <>
      <div>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p className={clsx(isOnline ? css.online : css.offline)}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
}
