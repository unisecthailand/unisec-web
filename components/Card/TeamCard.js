const TeamCard = (props) => {
  return (
    <div
      className="relative h-full"
      key={props.title}
      data-aos="fade-left"
      data-aos-duration="700"
    >
      <div className="bg-custom-primary relative rounded-2xl border-2 border-white z-20 h-full">
        <img
          src={props.image}
          className="rounded-t-2xl h-1/2 w-full object-cover"
          alt={props.title}
        />
        <div className="px-12 py-4">
          <h2 className="font-impact text-3xl">{props.title}</h2>
          <div className="text-sm mt-4">{props.role}</div>
          <div className="text-sm mt-4">{props.description}</div>
        </div>
      </div>
      <div className="absolute w-full top-3 left-3 rounded-2xl bg-custom-primary border-2 border-white z-10 bg-white h-full"></div>
    </div>
  );
};

export default TeamCard;
