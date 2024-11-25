"use server";

import { CategoryProps } from "@/components/forms/CategoryForm";
import { ProductProps } from "@/components/forms/ProductForm";
import { db } from "@/prisma/db";

export async function createProduct(data: ProductProps) {
  const { slug, title } = data;
  try {
    // Check if the category exists
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return {
        error: `The Product ${title} already exists`,
        status: 409,
        data: null,
      };
    }
    const newProduct = await db.product.create({
      data,
    });
    console.log(newProduct);
    return {
      error: null,
      status: 200,
      data: newProduct,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
      status: 500,
      data: null,
    };
  }
}

export async function getCategories() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
}
