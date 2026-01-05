import Button from "./Button";

const ButtonList = () => {
  const topicButton = [
    "All",
    "TMKOC",
    "2 Sloggers",
    "DSA",
    "React",
    "Gaming",
    "Cricket",
    "Vlogs",
    "Podcasts",
    "SSC-CGL",
    "Music",
    "New to You",
    "Horror",
    "Placement",
    "Standup",
  ];

  return (
    <div className="relative">
      <div className="
        flex 
        gap-3 
        px-4 
        py-2 
        overflow-x-auto 
        whitespace-nowrap 
        scrollbar-hide
        max-w-full
      ">
        {topicButton.map((topic, index) => (
          <Button key={index} name={topic} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
