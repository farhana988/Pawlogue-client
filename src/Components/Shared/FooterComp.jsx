import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Container from "../Reusable/Container";

const FooterComp = () => {
  return (
    <div className="pt-20">
      <Footer container>
        <Container>
          <div
            className=" grid w-full justify-between sm:flex sm:justify-between
           md:flex md:grid-cols-1"
          >
            {/* details */}
            <div
              className="pb-5 md:pb-0 md:w-96 lg:w-[600px] md:pr-10 lg:pr-0
            "
            >
              <h2 className="font-bold opacity-90  text-xl">Pawlogue </h2>
              <p className="opacity-70">
                To provide a comprehensive platform for pet lovers, enabling
                them to adopt, review, and explore pet-related services while
                fostering a community of responsible pet ownership
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Website Overview</FooterLink>
                  <FooterLink href="#">Contact Information</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Pawlogue™" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
              <FooterIcon href="#" icon={BsDribbble} />
            </div>
          </div>
        </Container>
      </Footer>
    </div>
  );
};

export default FooterComp;
