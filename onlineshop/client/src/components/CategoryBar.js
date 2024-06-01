import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import styles from './CategoryBar.module.css'; // Import your CSS module

const CategoryBar = observer(() => {
  const { item } = useContext(Context);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    item.setSelectedCategory(categoryId);
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className={styles.frameParent}>
      {item.categorys.map(category => (
        <div
          className={`${styles.wrapper} ${selectedCategoryId === category.id ? styles.active : ''}`}
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
        >
          <div className={styles.div5}>
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
});

export default CategoryBar;
