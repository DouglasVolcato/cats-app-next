import { Nav } from "../components/Nav/Nav";

export default function DefaultLayout({ children }: any) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
