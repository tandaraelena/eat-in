import { Card } from "../components/homepage/card";
import { NavBar } from "../components/global/navigation";
import { Banner } from "../components/global/banner";
import { categories } from "../components/homepage/utils";
import { StyledCards } from "../components/homepage/styles";
import { Footer } from "../components/global/footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <StyledCards>
        {categories.map(({ title, src }) => (
          <Card title={title} src={src} key={title} />
        ))}
      </StyledCards>
      <Footer />
    </div>
  );
};

export default HomePage;
