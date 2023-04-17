import styles from './credit.module.css';
import {FaRedditSquare, FaDiscord, FaTwitterSquare, FaLink} from 'react-icons/fa';

export default function Credit({reddit, discord, twitter, link}) {
  const redditUserLink = 'https://www.reddit.com/user/' + reddit;
  const twitterUserLink = 'https://twitter.com/' + twitter;

  return (
    <ul>
      {reddit ? (
        <li>
          <a href={redditUserLink} target="_blank" rel="noopener noreferrer">
            {FaRedditSquare} {reddit}
          </a>
        </li>
      ) : null}
      {discord ? (
        <li>
          {FaDiscord} {discord}
        </li>
      ) : null}
      {twitter ? (
        <li>
          <a href={twitterUserLink} target="_blank" rel="noopener noreferrer">
            {FaTwitterSquare} {twitter}
          </a>
        </li>
      ) : null}
      {link ? (
        <li>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {FaLink} {link}
          </a>
        </li>
      ) : null}
    </ul>
  );
}
