import Link from 'next/link';
import blogData from '../../../data/blog';

const Blog = () => {
  return (
    <>
      {blogData.slice(0, 4).map((blog, index) => (
        <div
          id='servicios'
          key={index}
          className={`col-lg-3 col-sm-6 d-flex mx-auto`}
          data-aos='fade-up'
          data-aos-delay={`${index * 100}`}
        >
          <article className='blog-meta-one tran3s mt-20 mx-auto'>
            <figure className='post-img m0'>
              <Link href={`/blog/${blog.id}`} className='w-100 d-block'>
                <img
                  src={blog.imageSrc}
                  alt='icon'
                  className='lazy-img w-100 tran4s'
                />
              </Link>
            </figure>
            <div className='post-data mt-25'>
              <h4 className='tran3s text-center'>{blog.title}</h4>
            </div>
            {/* /.post-data */}
          </article>
          {/* /.blog-meta-one */}
        </div>
      ))}
    </>
  );
};

export default Blog;
