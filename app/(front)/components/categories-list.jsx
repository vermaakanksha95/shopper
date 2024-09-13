"use client";

import { List, ListItem, Card } from "@material-tailwind/react";

export function CategoriesList({ data }) {
  return (
    <Card className=" flex flex-1">
      <List>
        {data.map((category) => (
          <ListItem key={category._id}>{category.cat_title}</ListItem>
        ))}
      </List>
    </Card>
  );
}
