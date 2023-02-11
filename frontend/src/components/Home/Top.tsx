import React from "react";
import styles from "./top.module.css";
import icon from "../../assets/icon.svg";
import tree1 from "../../assets/tree1.svg";
import tree2 from "../../assets/tree2.svg";
const Top: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen  bg-black  text-slate-100 p-8 ">
      <div className={styles.heading}>
        <img src={icon} alt="icon" draggable="false" />
        Carbon Meter
      </div>
      <div className={styles.subheading}>
        <p>" Calculate your carbon footprint "</p>
      </div>
      <div className="flex items-center ">
        <div className={"text-left w-2/3 text-2xl " +styles.mainLeft }>
            <h1
            className={"text-6xl font-bold pb-8 " +styles.h1}
            >Did You Know ?</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          dolorem illum veritatis quaerat! Suscipit non, ad perferendis
          laudantium deserunt voluptatem? Labore omnis quas, odit delectus
          ducimus dolor quam dignissimos aliquam. Id nulla officia commodi
          tenetur et quasi ex minima culpa, soluta vero, in iure laborum alias
          pariatur incidunt! Eligendi aliquam consectetur praesentium totam
          voluptatem assumenda odit distinctio illo quia mollitia. Commodi quia
          nisi expedita at deleniti amet culpa nulla rerum tempore adipisci
          fugit mollitia perferendis aperiam doloribus, recusandae iste a modi
          iusto impedit? Unde voluptatibus ex placeat ullam voluptas nesciunt?
        </div>
        <div className="flex items-center justify-end w-1/3">
          <img
            className={styles.img1}
            src={tree1}
            alt="tree"
            draggable="false"
          />
          <img
            className={styles.img2}
            src={tree2}
            alt="tree"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
