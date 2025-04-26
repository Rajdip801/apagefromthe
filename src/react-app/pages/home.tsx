import AdSpace from "../components/adspace";
import Scrolldown from "../components/scrolldown";
import ThumbnailById from "../components/thumbnails";
import Navtab from "../components/navtab";
import Gridads from "../components/gridads";
import "../styles/page.css";

export default function Home() {
    const ads = [
        { title: "Adspace 1", description: "This is the first advertisement." },
        { title: "Adspace 2", description: "This is the second advertisement." },
        { title: "Adspace 3", description: "This is the third advertisement." },
        { title: "Adspace 4", description: "This is the fourth advertisement." },
        { title: "Adspace 5", description: "This is the fifth advertisement." },
    ];

    const gridads = [
        [
            { title: "Adspace 1" },
            { title: "Adspace 2" },
            { title: "Adspace 3" },
            { title: "Adspace 4" },
        ],
        [
            { title: "Adspace 5" },
            { title: "Adspace 6" },
            { title: "Adspace 7" },
            { title: "Adspace 8" },
        ],
        [
            { title: "Adspace 9" },
            { title: "Adspace 10" },
            { title: "Adspace 11" },
            { title: "Adspace 12" },
        ],
        [
            { title: "Adspace 13" },
            { title: "Adspace 14" },
            { title: "Adspace 15" },
            { title: "Adspace 16" },
        ],
    ];

    return (
        <>
        <Scrolldown/>
            <section>
            <AdSpace ads={ads[0]} />
            <ThumbnailById id={"1"} />
            <Navtab />

            <Gridads gridads={gridads[0]} />
            <Gridads gridads={gridads[1]} />
            </section>
        </>
    );
}