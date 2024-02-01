import React from "react";

const Tutorials = () => {
  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid - Tutorials";

    // Optionally, you can reset the title when the component unmounts
    //   return () => {
    //     document.title = "Worship Grid";
    //   };
  }, []);
  return (
    <AdsBanner
      header="SOMETHING AWESOME COMING"
      textFx="SOON!"
      subHeader="Check back next time for updates"
      buttonText2="LEARN MORE"
    />
  );
};

export default Tutorials;
