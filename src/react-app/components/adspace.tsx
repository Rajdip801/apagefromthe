import "../styles/adspace.css"
interface AdProps {
  title: string;
  description: string;
}

const AdSpace = ({ ads }: { ads: AdProps }) => {
  return (
    <div className="ad text-center">
      <h2>{ads.title}</h2>
        &nbsp;
      <p>{ads.description}</p>
    </div>
  );
};

export default AdSpace;