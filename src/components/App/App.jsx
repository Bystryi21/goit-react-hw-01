import "../App/App.css";
import userData from "../../userData.json";
import Profile from "../Profile/Profile";
import friends from "../../friends.json";
// import FriendListItem from "../FriendListItem/FriendListItem";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        avatar={userData.avatar}
        location={userData.location}
        stats={userData.stats}
      />
      {/* <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul> */}
      <FriendList item={friends} />
      <TransactionHistory item={transactions} />
    </>
  );
}
