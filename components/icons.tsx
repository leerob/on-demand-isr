import styles from "../styles/Home.module.scss";

export function StarIcon() {
  return (
    <svg
      className={styles.star_icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"
      />
    </svg>
  );
}

export function ForkIcon() {
  return (
    <svg
      className={styles.fork_icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
      />
      <path
        fillRule="evenodd"
        d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"
      />
      <path fillRule="evenodd" d="M11.25 16.25v-5h1.5v5h-1.5z" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg
      className={styles.github_icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d="M16 .4a16 16 0 00-5 31.2c.7.1 1-.4 1-.8v-2.7c-4.4 1-5.4-2.2-5.4-2.2-.7-1.8-1.8-2.3-1.8-2.3-1.4-1 .2-1 .2-1 1.6.1 2.4 1.7 2.4 1.7 1.4 2.4 3.7 1.7 4.7 1.3a3 3 0 011-2.1c-3.6-.4-7.3-1.8-7.3-8a6 6 0 011.6-4.2c-.1-.4-.7-2 .2-4.3 0 0 1.3-.4 4.4 1.7a15.4 15.4 0 018 0C23 6.6 24.4 7 24.4 7a6 6 0 01.1 4.3 6 6 0 011.7 4.3c0 6.1-3.8 7.5-7.3 7.9.5.4 1 1.4 1 3v4.3c0 .4.3 1 1.1.8A16 16 0 0016 .4z" />
    </svg>
  );
}

export function IssueOpenIcon() {
  return (
    <svg
      className={styles.issue_icon}
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path
        fillRule="evenodd"
        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
      ></path>
    </svg>
  );
}

export function IssueClosedIcon() {
  return (
    <svg
      className={styles.issue_icon}
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
      ></path>
    </svg>
  );
}

export function CommentIcon() {
  return (
    <svg
      className={styles.comment_icon}
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
    </svg>
  );
}
