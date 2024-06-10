import css from "./Users.module.css";

export default function User({ user: { avatar_url, html_url, login } }) {
  return (
    <div className={css.profile}>
      <a href={html_url}>{login}</a>
      <img src={avatar_url} alt={login} target="_blank" width={300} />
    </div>
  );
}
