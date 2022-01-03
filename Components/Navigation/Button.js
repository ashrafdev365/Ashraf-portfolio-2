import Link from "next/link";

export const Button = ({ name, link }) => {
  return (
    <>
    <Link href={`/${link}`}>
       <button className="naxt_btn">
        <span> {name}</span>
        <i className="fal fa-long-arrow-right"></i>
      </button>
    </Link>
     
    </>
  );
};
