
import {Link} from 'react-router-dom'

import styles from './PostItem.module.css'

function PostItem({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className={styles.listItem}>
            <h3 className={styles.title}>
              <span>#{item.id}</span> {item.title}</h3>
            <Link to={`/post/${item.id}`} className={styles.link}>
                Подробно
            </Link>
          </div>
        ))}

    </>
  );
}

export default PostItem