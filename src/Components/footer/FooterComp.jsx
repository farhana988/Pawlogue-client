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
import paw from "../../assets/images/paw.png";

const FooterComp = () => {
  return (
    <div className="pt-20 ">
      <Footer container className="bg-inherit dark:bg-inherit">
        <Container>
          <div
            className=" grid w-full justify-between sm:flex sm:justify-between
           md:flex md:grid-cols-1 "
          >
            {/* details */}
            <div
              className="pb-5 md:pb-0 md:w-96 lg:w-[600px] md:pr-10 lg:pr-0
            "
            >
              <div
                className="font-extrabold dark:text-ivory font-snow flex gap-4 relative
          items-center text-lg lg:text-2xl "
              >
                <span>Pa</span>
                <img
                  className="w-9 lg:w-12 -top-2 left-3 lg:left-4  object-cover absolute -rotate-12"
                  src={paw}
                  alt=""
                />
                <span>logue</span>
              </div>
              <p className="opacity-70 text-sm xl:text-base">
                To provide a comprehensive platform for pet lovers, enabling
                them to adopt, review, and explore pet-related services while
                fostering a community of responsible pet ownership
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink href="/overview">Website Overview</FooterLink>
                  <FooterLink href="/contact">Contact Information</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="https://github.com/yourusername">
                    Github
                  </FooterLink>
                  <FooterLink href="https://discord.com/invite/yourinvitecode">
                    Discord
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="/privacy">Privacy Policy</FooterLink>
                  <FooterLink href="/terms">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Pawlogue™" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="https://facebook.com" icon={BsFacebook} />
              <FooterIcon
                href="https://instagram.com/yourprofile"
                icon={BsInstagram}
              />
              <FooterIcon
                href="https://twitter.com/yourprofile"
                icon={BsTwitter}
              />
              <FooterIcon
                href="https://github.com/yourusername"
                icon={BsGithub}
              />
              <FooterIcon
                href="https://dribbble.com/yourprofile"
                icon={BsDribbble}
              />
            </div>
          </div>
        </Container>
      </Footer>
    </div>
  );
};

export default FooterComp;
