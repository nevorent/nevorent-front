import AdsGrid from '../../components/ads/AdsGrid';
import mockAds from '../../components/ads/mockAds';
//la cele favorite ar trebui sa ne uitam daca sunt adaugate la favorite
//ar trebui sa fie adaugate la favorite de catre utilizatorul logat
//vorbim cu backendul 
//deocamdata le afiseaza pe toate 
const FavoriteAdsPage = () => {
    const myAds = mockAds.filter(ad => ad.isActive === true);
    return (
        <AdsGrid mockAds={myAds} />
    );
}
export default FavoriteAdsPage;