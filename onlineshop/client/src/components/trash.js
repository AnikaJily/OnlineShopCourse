import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.ellipseParent}>
      <div className={styles.frameChild} />
      <div className={styles.arnyprahtParent}>
        <div className={styles.arnypraht}>ARNYPRAHT</div>
        <div className={styles.div}>
          <img
            className={styles.shoppingBag1Icon}
            alt=""
            src="/shoppingbag-1@2x.png"
          />
          <img
            className={styles.userProfile1Icon}
            alt=""
            src="/userprofile-1@2x.png"
          />
          <img className={styles.search1Icon} alt="" src="/search-1@2x.png" />
        </div>
      </div>
      <div className={styles.parent}>
        <div className={styles.div1}>ЧЕРЕЗ ПЛЕЧО</div>
        <div className={styles.div2}>{`ПОЯСНЫЕ `}</div>
        <div className={styles.div3}>БОЛЬШИЕ</div>
        <img className={styles.frameItem} alt="" src="/line-4.svg" />
        <img className={styles.frameInner} alt="" src="/line-4.svg" />
        <img className={styles.lineIcon} alt="" src="/line-4.svg" />
        <div className={styles.div4}>МАЛЕНЬКИЕ</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div5}>СУМКИ</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div5}>РЮКЗАКИ</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.div5}>АКСЕССУАРЫ</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.div5}>ОДЕЖДА</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.instanceChild} />
        <img
          className={styles.instanceItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.fujifilmEterna250d}>
          Fujifilm ETERNA 250D 200 iso 24
        </div>
        <b className={styles.b}>750 ₽</b>
      </div>
    </div>
  );
};

export default Frame;
