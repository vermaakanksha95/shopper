import DbConnect from "@/utils/dbConnect";
import { redirect } from "next/navigation";
import Coupon from "@/models/Coupon";
import { CouponForm } from "./_components/couponform";


const page = () => {
  const handleInsertCoupon = async (code,amount) => {
    "use server";
    DbConnect();
    let data = await Coupon.create({ code, amount });

    redirect("/admin/coupon");
  };

  return (
    <div className=" flex flex-1 justify-center">
      <CouponForm handleInsertCoupon={handleInsertCoupon} />
    </div>
  );
};

export default page;
