/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/Default";

export default function Cat() {
  const [cat, setCat] = useState<any>(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  });

  return (
    <div>
      <DefaultLayout>
        {cat && (
          <div className="conteiner mt-5 d-flex">
            <Head>
              <title>Cat {cat.name}</title>
            </Head>
            <img src={cat.image.url} alt={cat.image.alt} />
            <div className="mx-5">
              <h1>{cat.name}</h1>
              <p>{cat.description}</p>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}
