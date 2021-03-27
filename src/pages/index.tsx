import styles from './index.less';
import { Link } from 'dva/router';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to={{pathname: '/buggy'}}>buggy</Link>
    </div>
  );
}
