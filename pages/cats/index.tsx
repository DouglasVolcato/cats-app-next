import Head from "next/head";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import DefaultLayout from "../../layouts/Default";

interface Cat {
  name: string;
  phone: string;
  email: string;
  image: { url: string; alt: string };
  id: string;
}

export default function Index() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="bg-secondary bg-gradient">
      <Head>
        <title>Our cats</title>
      </Head>
      <DefaultLayout>
        <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
          {cats.map((cat: Cat, key) => (
            <Card
              key={key}
              name={cat.name}
              phone={cat.phone}
              email={cat.email}
              image={cat.image}
              id={cat.id}
            />
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
}
