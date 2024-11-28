"use client"

import { Card,
  List,
  ListItem,
  ListItemSuffix,
  Chip, CardBody, Typography, Avatar, Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CartList({ user }) {
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscountAmount, setTotalDiscountAmount] = useState(0);
  const [totalTax,setTotalTax] = useState(0.0);
  const router = useRouter();

  const calculateTotal = (data) => {
    let orderItems = data.order.items;
    let total = 0;
    let discountTotal = 0;

    for(let item of orderItems){
      console.warn(item);
      total += item['item']['price']* item['quantity'];
      discountTotal += item['item']['discount_price']* item['quantity'];
    }
    setTotalAmount(total);
    setTotalDiscountAmount(discountTotal)
    let tax = discountTotal * 0.18;
    setTotalTax(tax)

  }
  const loadData = () => {
    fetch("http://localhost:3000/api/order").then(res => res.json())
      .then(res => {
        setCartData(res)
        calculateTotal(res)
      })
  }


  useEffect(() => {
    loadData();
  }, [])

  const handelPlus = async (id) => {
    const data = fetch(`http://localhost:3000/api/order/add-to-cart/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: user._id })
    });
    loadData();

  }

  const handelMinus = async (id) => {
    const data = fetch(`http://localhost:3000/api/order/remove-from-cart/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: user._id })
    });
    loadData();

  }
  return (
    <div className='px-[5%] flex flex-1 gap-4 mt-5'>

      <div className='w-9/12'>

        <Card className="w-full">
          <CardBody>

            <div className="divide-y divide-gray-200">
              {cartData.order?.items.map((orderItem, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                >
                  <div className="flex items-center gap-x-3">
                    <Avatar size="2xl" variant="rounded" src={`/productimages/${orderItem.item.image}`} alt="" />
                    <div>
                      <Typography color="blue-gray" variant="h6">
                        {orderItem.item.name}
                      </Typography>
                      <div className="flex  items-center mt-2">
                        <Button color="red" onClick={() => handelMinus(orderItem.item._id)} className="text-2xl px-3 py-1 rounded-full">-</Button>
                        <Typography variant="small" color="gray" className="text-2xl px-3 py-2">
                          {orderItem.quantity}
                        </Typography>
                        <Button color="green" onClick={() => handelPlus(orderItem.item._id)} className="text-2xl px-3 py-1 rounded-full">+</Button>
                      </div>
                    </div>
                  </div>
                  <Typography color="blue-gray" variant="h6">
                    ₹:{orderItem.item.discount_price * orderItem.quantity}<del>₹:{orderItem.item.price}</del>
                  </Typography>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <div className='w-3/12'>
        <Card className="w-96">
          <List>
            <ListItem>
              Total Amount
              <ListItemSuffix>
                <Chip
                  value={`${totalAmount}`}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              Total Discount Amount
              <ListItemSuffix>
                <Chip
                  value={`${totalAmount - totalDiscountAmount}`}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              Tax (18% GST)
              <ListItemSuffix>
                <Chip
                  value={`${totalTax}`}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              Total Payable Amount
              <ListItemSuffix>
                <Chip
                  value={`${totalTax + totalDiscountAmount}`}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </List>
        </Card>
        


      </div>
    </div>
  );
}
