import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import TeamTwoArea from './team-two-area';
import BrandArea from '../about/brand-area';
import Footer from '@/src/layout/footers/footer';

const TeamTwo = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Team Style 02" title="Team 02" />
                <TeamTwoArea />
                <BrandArea team={true} />
            </main>
            <Footer  />
        </>
    );
};

export default TeamTwo;