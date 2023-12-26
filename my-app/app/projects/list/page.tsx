import Link from "next/link";
// import styles from "./projects.module.css";

export default function ProjectList() {
  return (
    <main>
      <h1 className="h1-bold">ProjectList</h1>
      <ul>
        <li>
          <Link href="/projects/project1">Project1</Link>
        </li>
        <li>
          <Link href="/projects/job2">Project2</Link>
        </li>
        <li>
          <Link href="/projects/job3">Project3</Link>
        </li>
      </ul>
    </main>
  );
}
