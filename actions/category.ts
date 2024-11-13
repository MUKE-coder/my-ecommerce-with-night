"use server";

import { CategoryProps } from "@/components/forms/CategoryForm";
import { db } from "@/prisma/db";

export async function createCategory(data: CategoryProps) {
  const { slug, title } = data;
  try {
    // Check if the category exists
    const existingCategory = await db.category.findUnique({
      where: {
        slug,
      },
    });
    if (existingCategory) {
      return {
        error: `The Category ${title} already exists`,
        status: 409,
        data: null,
      };
    }
    const newCategory = await db.category.create({
      data,
    });
    console.log(newCategory);
    return {
      error: null,
      status: 200,
      data: newCategory,
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
