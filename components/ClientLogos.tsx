import Image from "next/image";

const clients = [
  {
    name: "Ministry of Defence",
    logo: "/clients/1.png",
  },
  {
    name: "Indian Army",
    logo: "/clients/2.png",
  },
  {
    name: "Indian Navy",
    logo: "/clients/3.png",
  },
  {
    name: "Indian Air Force",
    logo: "/clients/4.png",
  },
  {
    name: "DRDO",
    logo: "/clients/5.png",
  },
  {
    name: "Bharat Electronics",
    logo: "/clients/7.png",
  },
  {
    name: "HAL",
    logo: "/clients/6.png",
  },
  {
    name: "BHEL",
    logo: "/clients/10.png",
  },
{
    name: "CSIR-NAL",
    logo: "/clients/9.png",
  },
{
    name: "SAMEER",
    logo: "/clients/8.png",
  },

];

export function ClientLogos() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {clients.map((client) => (
        <div
          key={client.name}
          className="glass-card group flex min-h-[150px] items-center justify-center rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl"
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={220}
            height={100}
            className="max-h-20 w-auto max-w-[180px] object-contain grayscale transition duration-300 group-hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
}
