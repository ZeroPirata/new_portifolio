import "./style.css";
import { imagePathResolve } from "utils/imageresolver";
const AboutPage = () => {
  return (
    <main className="col-8 bg-about">
      <section>
        <h1>Zero</h1>
      </section>
      <section className="section-picture">
        <img className="profile-picture" src={imagePathResolve("/profile/profile.png")} alt="profile" />
      </section>
    </main>
  );
};

export { AboutPage };
