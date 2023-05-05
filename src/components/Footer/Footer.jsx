import css from './Footer.module.css';

export default function Footer() {
  return (
    <div color="textSecondary" align="center">
      © {new Date().getFullYear()}
      .| All Rights Reserved | Developed by
      <a
        href="https://www.linkedin.com/in/igor-kalchin-b4861523b/"
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        {' '}
        Igor Kalchin
      </a>
    </div>
  );
}
