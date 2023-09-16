import Navbar from "@/components/Navbar";
import Filter from "@/components/Filter";
import News7SL from "../components/cards/News7SL";
import SpotMarket from "../components/cards/SpotMarket";
import CryptoTrade from "@/components/cards/CryptoTrade";
import Articles from "@/components/cards/Articles";
import AlphaCalls from "@/components/cards/AlphaCalls";
import Discussion from "@/components/cards/Discussion";
import NftVolume from "@/components/cards/NftVolume";

export default function Home() {
    return (
        <div className="min-h-screen max-w-7xl bg-[#F5F7F8] flex gap-2">

            <div className="p-5 ml-24 w-full flex flex-col gap-5">
                <Navbar/>
                <Filter/>
                <div className="grid grid-cols-12 gap-2 rounded-md">
                    <News7SL/>
                    <SpotMarket/>
                    <CryptoTrade/>
                </div>
                <div className="grid grid-cols-12 gap-2">
                    <Articles/>
                    <div className="col-span-6 flex flex-col justify-between">
                        <AlphaCalls/>
                        <Discussion/>
                    </div>
                    <NftVolume/>
                </div>
            </div>
        </div>
    )
}
