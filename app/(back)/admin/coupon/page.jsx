
import Link from "next/link";
import DbConnect from "@/utils/dbConnect";
import Coupon from "@/models/Coupon";
import { CouponTable } from "./create/_components/couponTable";


const page = async () => {
  DbConnect();
  const coupons = await Coupon.find({});
  return (
    <div>
      <div className="flex flex-1 justify-between items-center mb-4">
        <h2 className="text-2xl text-pink-700 font-semibold ">
          Manage Coupons
        </h2>

        <Link href="/admin/coupon/create">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded">
            Add New Coupon
          </button>
        </Link>
      </div>
      <CouponTable data={coupons} />
    </div>
  );
};

export default page;
