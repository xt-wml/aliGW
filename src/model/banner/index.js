import React from "react";
import styles from "./index.less";
export default function Main() {
  return (
    <div className={styles.index_main}>
      <img
        alt=""
        src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
      />
      <div className={styles.middle_main}>
        <p>If not now,when?</p>
        <p>If not me,who?</p>
        <p>此时此刻，非我莫属！</p>
        <div className={styles.search_box}>
          <span className={styles.search_pop}>请输入职位关键词</span>
          <div className={styles.box_pop}></div>
          <input type="text" className={styles.input_box} placeholder="请输入职位关键词" />
          <input type="submit" className={styles.input_btn} value="搜索" />
          <div  className={styles.hot_text} >
            热门搜索：
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              JAVA
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              IOS
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              数据
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              安全
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              搜索
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              算法
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              运营
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              视觉
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              交互
            </a>
            <a
              
              className={styles.search_key}
              href="javascript:void()"
              data-spm-click="gostr=/hr;locaid=hotPosition"
            >
              前端
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
