import Router from 'next/router';
import Link from 'next/link';
import styles from '../styles/lists.module.css'

const Pagination = ({ totalCount,currentPageNumber }) => {
  const PER_PAGE = 8;
  currentPageNumber = Number(currentPageNumber);
  const maxPageNumber = Math.ceil(totalCount / 8)
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={styles.pagenation}>
        <li>
            {currentPageNumber > 1 && (
                <Link href={ `/works/${prevPage}`}>
                    <a className={styles.arrow}>←</a>
                </Link>
            )}
        </li>

        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li className={styles.pageNo} key={index}>
                <Link href={ `/works/${number}`}>
                    <a>{number}</a>
                </Link>
            </li>
        ))}

        <li>
            {currentPageNumber < maxPageNumber && (
                <Link href={ `/works/${nextPage}`}>
                    <a className={styles.arrow}>→</a>
                </Link>
            )}
        </li>
    </ul>
  );
};

export default Pagination;