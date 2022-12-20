import { Card } from "./Card/Card";

const instaData = [
  {
    image: "/assets/img/EMF01489.jpg",
    link: "#/",
    id: "1",
  },
  {
    image: "/assets/img/EMF00850.jpg",
    link: "#/",
    id: "2",
  },
  {
    image: "/assets/img/EMF00875.jpg",
    link: "#/",
    id: "3",
  },
  {
    image: "/assets/img/EMF01917.jpg",
    link: "#/",
    id: "4",
  },
  {
    image: "/assets/img/EMF01097.jpg",
    link: "#/",
    id: "5",
  },
  {
    image: "/assets/img/EMF01415.jpg",
    link: "#/",
    id: "6",
  },
];

export const Insta = () => {
  return (
    <>
      {/* <!-- BEGIN INSTA PHOTOS --> */}
      <div className="insta-photos">
        {instaData.map((insta) => (
          <Card key={insta.id} insta={insta} />
        ))}
      </div>
      {/* <!-- INSTA PHOTOS EOF   --> */}
    </>
  );
};
