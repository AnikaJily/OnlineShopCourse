import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import styles from './css/CategoryBar.module.css'; // Import your CSS module

const CategoryBar = observer(() => {
  const { item } = useContext(Context);

  const handleCategoryClick = (category) => {
    if (category.id === item.selectedCategory.id) {
      item.setSelectedCategory(null); // Если выбрана текущая категория, сбросить выбор
    } else {
      item.setSelectedCategory(category);
    }
  };

  return (
    <div className={styles.frameParent}>
      {item.categorys.map(category => (
        <div
          className={`${styles.wrapper} ${category.id === item.selectedCategory?.id ? styles.active : ''}`}
          key={category.id}
          onClick={() => handleCategoryClick(category)}
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