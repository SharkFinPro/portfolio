import { Metadata } from "next";
import indexStyles from "./index.module.css";

export const metadata: Metadata = {
  description: "Hello, world!"
};

export default function Page() {
  return (
    <div className={indexStyles.wrapper}>
      <div className={indexStyles.header}>
        <div className={indexStyles.container}>
          <h1>Alex Martin</h1>
        </div>
      </div>
    </div>
  );
}