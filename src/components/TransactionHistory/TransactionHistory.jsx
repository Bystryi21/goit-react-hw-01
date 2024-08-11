import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ item }) {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map((value) => {
          return (
            <tr key={value.id}>
              <td>{value.type}</td>
              <td>{value.amount}</td>
              <td>{value.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
