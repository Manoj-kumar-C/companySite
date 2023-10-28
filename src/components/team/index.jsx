import HeaderTwo from '@/src/layout/headers/header-2'; 
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import TeamArea from './team-area';
import BrandArea from '../about/brand-area';
import Footer from '@/src/layout/footers/footer';

const Team = () => {
    return (
        <>
            <HeaderTwo />
            <main>
                <Breadcrumb top_title="Team Style 01"  title="Team" />
                <TeamArea />
                <BrandArea team={true} />
            </main>
            <Footer  />
        </>
    );
};

export default Team;