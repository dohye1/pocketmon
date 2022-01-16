import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const fetcher = (url: string, name: string) =>
  fetch(`${url}/${name}`).then((res) => res.json());

const Detail = ({ pocketmon }: { pocketmon: string }) => {
  const router = useRouter();
  const { name } = router.query;

  const { data, error } = useSWR<{ results: Pocketmon[] }>(
    "https://pokeapi.co/api/v2/pokemon",
    (url) => fetcher(url, pocketmon as string)
  );

  return (
    <div>
      <button>
        <Link href="/">back</Link>
      </button>
      {name}
      <p>{JSON.stringify(data, null, 3)}</p>
    </div>
  );
};

Detail.getInitialProps = (context: any) => {
  return { pocketmon: context.query.name };
};

export default Detail;
