import css from "./Profile.module.css";

export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  console.log(username);
  return (
    <div className={css.container}>
      <div>
        <div>
          <img src={avatar} alt="User avatar" width="140" height="140" />
        </div>
        <p className={css.userName}>{username}</p>{" "}
        <p className={css.tagName}>{tag}</p>
        <p className={css.locationStyle}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.statsList}> {followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.statsList}> {views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.statsList}> {likes}</span>
        </li>
      </ul>
    </div>
  );
}
