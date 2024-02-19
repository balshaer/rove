/* eslint-disable react/prop-types */

const Partner = ({ imageUrl, name, handle }) => (
  <div className="h-[300px] p-5 rounded-lg bg-[#ffffff] flex flex-col justify-center items-center gap-4">
    <img className="h-32 w-32 object-contain" src={imageUrl} alt={name} />
    <div className="flex items-center justify-center gap-2 flex-col">
      <h3 className="text-[#040320] text-2xl">{name}</h3>
      <span>@{handle}</span>
    </div>
  </div>
);

const partnersData = [
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/6230851dfbef4b4d05285e07/6230988d106ddfee60a4ab1a_marca_5.png",
    name: "Trash Boutique",
    handle: "lixoboutique",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/6230851dfbef4b4d05285e07/6230988d422ad3557ec2017a_marca_2.png",
    name: "Maria Maria Concept Store",
    handle: "mariamariaconcept",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/6230851dfbef4b4d05285e07/6230988d8799db09c2120ade_marca_4.png",
    name: "Connection Brands",
    handle: "conexaocolatina",
  },
];

const Stat = () => (
  <div className="w-full bg-[#eeeeee] max-md:py-10 max-md:px-4" id="partners">
    <section className="m-auto max-w-screen-2xl">
      <div className="mx-auto max-w-screen-xl px-4 py-12 max-md:py-0 max-md:px-0 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">PARTNERS</h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
            Take a look at some of the partner merchants who trust Rove
          </p>
        </div>

        <br />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {partnersData.map((partner, index) => (
            <Partner key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Stat;
