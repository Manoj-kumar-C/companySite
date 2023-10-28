import BlogMainArea from '../blog-common/blog-main-area';
import BlogSideArea from '../blog-common/blog-side-area';

const BlogArea = ({style_blog}) => {
    return (
        <>
            <section className="blog-area pt-120 pb-80">
                <div className="container">
                    <div className={`row ${style_blog && "flex-row-reverse"}`}>
                    <div className="col-lg-8">
                        <BlogMainArea />
                    </div>
                        <BlogSideArea />  
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogArea;