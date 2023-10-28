import HeaderTwo from '@/src/layout/headers/header-2';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioSlider from './portfolio-slider';
import PortfolioSliderArea from './portfolio-slider-area';
import PortfolioPagination from './../portfolio-single/portfolio-pagination';
import FooterTwo from '@/src/layout/footers/footer-2';

const PortfolioSingleThree = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Portfolio Single 3" title="Portfolio Single 3"  />
                <PortfolioSlider />
                <PortfolioSliderArea />
                <PortfolioPagination style_single_2={true} />
            </main>
            <FooterTwo />
        </>
    );
};

export default PortfolioSingleThree;