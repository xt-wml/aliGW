import React, { useEffect, useRef, useState } from "react";
import styles from "./index.less";
export default function MainBar() {
  // 虚拟列表
  const [lists] = useState([
    {
      info: "阿里云智能事业群-解决方案架构师-大数据及AI方向",
      addr: "杭州",
      times: "1分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州,上海",
      times: "1分钟前",
    },
    {
      info: "菜鸟-销售运营专家/专员",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "阿里云智能事业群-AI高级解决方案架构师-杭州/北京",
      addr: "杭州，北京",
      times: "10分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "菜鸟-中欧中俄干线运营专家",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "菜鸟-中欧中俄干线运营专家",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "支付宝-Java研发（P6/P7/P8）-政务民生",
      addr: "杭州",
      times: "10分钟前",
    },
    {
      info: "盒马-区域产品运营专家-上海区",
      addr: "杭州",
      times: "10分钟前",
    },
  ]);
  // 控制列表top值
  const [val, setVal] = useState(50);
  // 列表滚动的定时器
  let [timer] = useState("");

  // 列表渲染函数
  const renderList = () => {
    return lists.map((item, index) => (
      <li key={index}>
        <a href="javascript:void(0);">{item.info}</a>
        <em className={styles.time}>{item.times} </em>
        <em className={styles.city}>{item.addr} </em>
      </li>
    ));
  };

  // 列表执行动态函数
  const moveList = () => {
    timer = setInterval(() => {
      setVal(val - 1);
    }, 30);
  };

  useEffect(() => {
    moveList();
    //动态计算
    if (val <= -400) setVal(50);
    return () => clearInterval(timer);
  });

  // 鼠标移入停止
  const overEvent = () => {
    clearInterval(timer);
  };

  // 鼠标移除运动
  const leaveEvent = () => {
    moveList();
  };

  return (
    <div className={styles.new_content}>
      <div className={styles.new_lists}>
        <div className={styles.more_list}>
          最新职位
          <a
            className={styles.click_more}
            href="https://job.alibaba.com/zhaopin/positionList.html?"
            data-spm-click="gostr=/hr;locaid=newPositionMore"
          >
            {" "}
            更多
          </a>
        </div>
        <ul
          style={{ top: val + "px" }}
          onMouseOver={overEvent}
          onMouseLeave={leaveEvent}
        >
          {renderList()}
        </ul>
      </div>
    <div className={styles.pic_box}>
    <a href="https://www.aliyun.com/careers?spm=a2obv.11410899.0.aliyun.55ef6c61XwyqGS" alt="" style={{marginBottom:'20px'}} className={styles.show_pic}>
        <img  src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt="" className={styles.pic_1}/>
    </a>
    <a href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?" alt="" className={styles.show_pic}>
        <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="" className={styles.pic_2} />
    </a>
    </div>
    </div>
  );
}
