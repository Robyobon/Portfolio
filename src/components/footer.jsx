import ContactButton from "./Contak";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">© 2023 Roby Hidayat. All rights reserved.</p>
        </div>
        <ContactButton />
      </div>
    </footer>
  );
};

export default FooterSection;
