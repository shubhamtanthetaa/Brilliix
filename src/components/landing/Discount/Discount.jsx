import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className="discount js-img"
        style={{ backgroundImage: `url('/assets/img/EMF02818.jpg')` }}
      >
        <div className="wrapper">
          <div className="discount-info">
            <span className="saint-text">Discount</span>
            <span className="main-text">
             <span></span>
            </span>
            <p>
            </p>

            <Link href="/shop">
              <a className="btn">get now!</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
